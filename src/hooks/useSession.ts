import { useSessionStore } from "@/store/useSessionStore"

export function useSession() {
  const { sessionStart, setSessionStart, clearSession } = useSessionStore()

  return {
    sessionStart,
    setSessionStart,
    clearSession,
  }
}
