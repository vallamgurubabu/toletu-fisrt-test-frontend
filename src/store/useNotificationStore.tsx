import { create } from 'zustand'

interface NotificationState {
  isOpen: boolean
  notifications: string[]
  openSheet: () => void
  closeSheet: () => void
  setNotifications: (notifications: string[]) => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  isOpen: false,
  notifications: [],
  openSheet: () => set({ isOpen: true }),
  closeSheet: () => set({ isOpen: false }),
  setNotifications: (notifications) => set({ notifications }),
}))