// MainBottomBar.tsx
import { useNavigate, useLocation } from "react-router-dom"
import { Home, Users, PlusCircle } from "lucide-react"
import ProfileSheet from "./ui/ProfileSheet"
import { useAuthStore } from "@/store/useAuthStore"

interface MainBottomBarProps {
  isSheetOpen: boolean
  setIsSheetOpen: (open: boolean) => void
}

export function MainBottomBar({ isSheetOpen, setIsSheetOpen }: MainBottomBarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated } = useAuthStore()


  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav className="bg-blue-400 flex justify-around items-center py-2 text-white">
        <button
          onClick={() => navigate("/roommate-category")}
          className={`flex-1 flex flex-col items-center justify-center text-white ${
            isActive("/roommates") ? "font-bold" : "font-medium"
          }`}
        >
          <Users size={24} />
          <span className="text-xs mt-0.5">Roommates</span>
        </button>

        <div className="relative flex-1 flex justify-center">
          <button
            onClick={() => navigate("/Post-Ad-Form")}
            className="absolute -top-8 bg-white rounded-full p-4 shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
            aria-label="Post Ad"
          >
            <PlusCircle size={28} className="text-blue-400" />
          </button>
        </div>

        <button
  onClick={() => {
    if (isAuthenticated) {
      setIsSheetOpen(true)
    } else {
      navigate("/login")
    }
  }}
  className={`flex-1 flex flex-col items-center justify-center text-white ${
    isActive("/profile") ? "font-bold" : "font-medium"
  }`}
>
  <Home size={24} />
  <span className="text-xs mt-0.5">Profile</span>
</button>
      </nav>

      <ProfileSheet open={isSheetOpen} onOpenChange={setIsSheetOpen} />
    </>
  )
} 
