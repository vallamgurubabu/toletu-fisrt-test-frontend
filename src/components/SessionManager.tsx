import { useEffect } from "react"
import { useAuthServices } from "@/hooks/useAuthServies"

// Run session check every 2 minutes
const SESSION_CHECK_INTERVAL = 2 * 60 * 1000

export function SessionManager() {
  const { checkSessionExpiry } = useAuthServices()

  useEffect(() => {
    const interval = setInterval(() => {
      const stillValid = checkSessionExpiry()
      if (!stillValid) {
        console.warn("Session expired — logging out.")
      }
    }, SESSION_CHECK_INTERVAL)

    return () => clearInterval(interval)
  }, [checkSessionExpiry])

  return null // No UI
}
