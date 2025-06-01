import { create } from "zustand"
import { persist } from "zustand/middleware"


interface User{
        id:string
    name:string
    phone:string //UserId for login purpose
    password:string 
    age:number
    location:string 
    roommateProfileId:string
    adsPosted:number //show if count >=1
    FavouriteAds:number //shpow if count>=1
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-store", // localStorage key
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
)
