import axios from "axios"
import { useAuthStore } from "@/store/useAuthStore"
import { useSessionStore } from "@/store/useSessionStore"

const SESSION_EXPIRY_MS = 3 * 60 * 60 * 1000 // 3 hours
const USER_STORAGE_KEY = "toletu_user"
const SESSION_TIME_KEY = "toletu_session_start"

export function useAuthServices() {
  const setUser = useAuthStore((state) => state.setUser)
  const logout = useAuthStore((state) => state.logout)
  const setSessionStart = useSessionStore((state) => state.setSessionStart)
  const clearSession = useSessionStore((state) => state.clearSession)

  // Login with axios, set session and localStorage
  const login = async (credentials: { phone: string; password: string }) => {
    try {
      const response = await axios.post("/api/login", credentials)
      const user = response.data
      const now = Date.now()

      setUser(user)
      setSessionStart(now)
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
      localStorage.setItem(SESSION_TIME_KEY, String(now))
    } catch (error) {
      throw new Error("Invalid credentials")
    }
  }

  // Signup with axios, returns created user or success message
  const signup = async (credentials: { phone: string; password: string, otp:string , username:string}) => {
    const response = await axios.post("/api/signup", credentials)
    return response.data
  }

  // Check if session expired and logout if yes
  const checkSessionExpiry = () => {
    const sessionStart = localStorage.getItem(SESSION_TIME_KEY)
    if (!sessionStart || Date.now() - Number(sessionStart) > SESSION_EXPIRY_MS) {
      logout()
      clearSession()
      localStorage.removeItem(USER_STORAGE_KEY)
      localStorage.removeItem(SESSION_TIME_KEY)
      return false
    }
    return true
  }

  // Restore session if valid
  const restoreSession = () => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY)
    const sessionStart = localStorage.getItem(SESSION_TIME_KEY)
    if (storedUser && sessionStart) {
      const start = Number(sessionStart)
      if (Date.now() - start < SESSION_EXPIRY_MS) {
        setUser(JSON.parse(storedUser))
        setSessionStart(start)
      } else {
        logout()
        clearSession()
        localStorage.removeItem(USER_STORAGE_KEY)
        localStorage.removeItem(SESSION_TIME_KEY)
      }
    }
  }

  return {
    login,
    signup,
    logout,
    checkSessionExpiry,
    restoreSession,
  }
}
