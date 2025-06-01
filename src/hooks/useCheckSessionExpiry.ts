// hooks/useCheckSessionExpiry.ts
import { useAuthServices } from "../hooks/useAuthServies"

export function useCheckSessionExpiry() {
  const { checkSessionExpiry } = useAuthServices()

  const validateSession = () => {
    const expired = checkSessionExpiry()
    if (expired) {
      alert("Session expired. Please log in again.")
      // optionally redirect to login
    }
  }

  return validateSession
}
