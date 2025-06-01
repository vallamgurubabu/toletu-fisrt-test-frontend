import { useAuthStore } from "@/store/useAuthStore"
import { useAuthServices } from "@/hooks/useAuthServies"

export function useAuth() {
  const { user, isAuthenticated } = useAuthStore()
  const { login, signup,logout, restoreSession, checkSessionExpiry } = useAuthServices()

  return {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
    restoreSession,
    checkSessionExpiry,
  }
}