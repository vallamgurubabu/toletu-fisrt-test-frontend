// stores/useAuthStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";
import  type { AuthUser } from "../types/types";

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;

  // Login/Signup/Logout actions
  setUser: (user: {
    id: string;
    phone: string;
    password:string;
    accessToken: string;
    refreshToken?: string;
  }) => void;
  clearUser: () => void;

  // Signup-related state
  signupPhone: string | null;
  setSignupPhone: (phone: string | null) => void;

  otpSent: boolean;
  setOtpSent: (sent: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,

      setUser: ({ id, phone, accessToken, refreshToken }) =>
        set({
          user: { id, phone },
          accessToken,
          refreshToken: refreshToken ?? null,
          isAuthenticated: true,
        }),

      clearUser: () =>
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          signupPhone: null,
          otpSent: false,
        }),

      signupPhone: null,
      setSignupPhone: (phone) => set({ signupPhone: phone }),

      otpSent: false,
      setOtpSent: (sent) => set({ otpSent: sent }),
    }),
    {
      name: "auth", // localStorage key
    }
  )
);
