import { create } from "zustand"

interface SessionState {
  sessionStart: number | null
  setSessionStart: (timestamp: number) => void
  clearSession: () => void
}

export const useSessionStore = create<SessionState>((set) => ({
  sessionStart: null,
  setSessionStart: (timestamp) => set({ sessionStart: timestamp }),
  clearSession: () => set({ sessionStart: null }),
}))
