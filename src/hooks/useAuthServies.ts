// services/useAuthServices.ts
import { useAuthStore } from "@/store/useAuthStore";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface LoginResponse {
  user: { id: string; name: string; phone: string };
  accessToken: string;
  refreshToken?: string ;
}

// Utility: Decode JWT to get expiry
function parseJwt(token: string): { exp: number } | null {
  try {
    const base64 = token.split(".")[1];
    const decoded = JSON.parse(atob(base64));
    return decoded;
  } catch {
    return null;
  }
}

function isTokenExpired(token: string): boolean {
  const data = parseJwt(token);
  if (!data) return true;
  const now = Math.floor(Date.now() / 1000);
  return data.exp < now;
}

// Check if phone exists for signup
export async function checkPhoneExists(phone: string): Promise<boolean> {
  const res = await fetch(`/api/auth/check-phone?phone=${encodeURIComponent(phone)}`);
  if (!res.ok) throw new Error("Failed to check phone");
  const data = await res.json();
  return data.exists; // true or false
}

// Send OTP
export async function sendOtp(phone: string): Promise<void> {
  const res = await fetch("/api/auth/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone }),
  });
  if (!res.ok) throw new Error("Failed to send OTP");
}

// Verify OTP
export async function verifyOtp(phone: string, otp: string): Promise<void> {
  const res = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, otp }),
  });
  if (!res.ok) throw new Error("OTP verification failed");
}

// Complete signup with details and auto-login
export async function completeSignup(data: {
  phone: string;
  password: string;
  username: string;
}): Promise<LoginResponse> {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message || "Signup failed");
  }
  return res.json();
}

// Login API
export async function loginApi(phone: string, password: string): Promise<LoginResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, password }),
  });
  if (!res.ok) {
    throw new Error("Invalid credentials");
  }
  return res.json();
}

// Logout API
export async function logoutApi() {
  await fetch("/api/auth/logout", { method: "POST" });
}

export function useAuthServices() {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);
  const setSignupPhone = useAuthStore((state) => state.setSignupPhone);
  const setOtpSent = useAuthStore((state) => state.setOtpSent);

  async function login(phone: string, password: string) {
    const data = await loginApi(phone, password);
    setUser({
  id: data.user.id,
  phone: data.user.phone,
  accessToken: data.accessToken,
  refreshToken: data.refreshToken ?? "",
    });
  }

  async function logout() {
    try {
      await logoutApi();
    } catch {
      // ignore
    }
    clearUser();
    queryClient.clear();
  }

  async function startSignup(phone: string) {
    const exists = await checkPhoneExists(phone);
    if (exists) throw new Error("User with this phone already exists");
    setSignupPhone(phone);
    await sendOtp(phone);
    setOtpSent(true);
  }

  async function verifySignupOtp(otp: string) {
    const phone = useAuthStore.getState().signupPhone;
    if (!phone) throw new Error("No phone to verify");
    await verifyOtp(phone, otp);
  }

  async function completeSignupAndLogin(password: string, username: string) {
    const phone = useAuthStore.getState().signupPhone;
    if (!phone) throw new Error("No phone to complete signup");
    const data = await completeSignup({ phone, password, username });
    setUser({
      ...data.user,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken ?? "",
    });
    setOtpSent(false);
    setSignupPhone(null);
  }

  async function refreshToken() {
    const refreshToken = useAuthStore.getState().refreshToken;
    if (!refreshToken) throw new Error("No refresh token");

    const res = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    if (!res.ok) throw new Error("Failed to refresh token");

    const data = await res.json();
    const currentUser = useAuthStore.getState().user;
    if (!currentUser) throw new Error("No user logged in");

    setUser({
      ...currentUser,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken || useAuthStore.getState().refreshToken,
    });
  }

  async function authFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    let token = useAuthStore.getState().accessToken;

    // Refresh token if expired
    if (!token || isTokenExpired(token)) {
      try {
        await refreshToken();
        token = useAuthStore.getState().accessToken;
      } catch (err) {
        throw new Error("Session expired. Please login again.");
      }
    }

    const headers = new Headers(init?.headers || {});
    if (token) headers.set("Authorization", `Bearer ${token}`);

    const res = await fetch(input, { ...init, headers });

    // Retry once if unauthorized
    if (res.status === 401) {
      try {
        await refreshToken();
        const newToken = useAuthStore.getState().accessToken;
        headers.set("Authorization", `Bearer ${newToken}`);
        return await fetch(input, { ...init, headers });
      } catch {
        throw new Error("Authentication failed");
      }
    }

    return res;
  }

  function isLoggedIn(): boolean {
    const token = useAuthStore.getState().accessToken;
    return token !== null && !isTokenExpired(token);
  }

  return {
    login,
    logout,
    startSignup,
    verifySignupOtp,
    completeSignupAndLogin,
    authFetch,
    refreshToken,
    isLoggedIn,
  };
}
