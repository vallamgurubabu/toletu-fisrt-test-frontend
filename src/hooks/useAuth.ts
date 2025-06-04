// hooks/useAuth.ts
import { useAuthStore } from "@/store/useAuthStore";
import { useAuthServices } from "@/hooks/useAuthServies"

export function useAuth() {
  const { user, accessToken, isAuthenticated, signupPhone, otpSent } = useAuthStore();

  const {
    login,
    logout,
    startSignup,
    verifySignupOtp,
    completeSignupAndLogin,
    authFetch,
    refreshToken,
  } = useAuthServices();

  return {
    user,
    accessToken,
    isAuthenticated,
    signupPhone,
    otpSent,

    login,
    logout,
    startSignup,
    verifySignupOtp,
    completeSignupAndLogin,
    authFetch,
    refreshToken,
  };
}
