import { useNavigate, useLocation } from "react-router-dom"
import { FileText, Heart, Settings } from "lucide-react"

export function ProfileBottomBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-blue-400 flex justify-around items-center py-2 text-white">
      <button
        onClick={() => navigate("/profile/my-ads")}
        className={`flex flex-col items-center space-y-1 ${isActive("/profile/my-ads") ? "font-bold" : ""}`}
        aria-label="My Ads"
      >
        <FileText size={24} />
        <span>My Ads</span>
      </button>
      <button
        onClick={() => navigate("/profile/saved-ads")}
        className={`flex flex-col items-center space-y-1 ${isActive("/profile/saved-ads") ? "font-bold" : ""}`}
        aria-label="Saved Ads"
      >
        <Heart size={24} />
        <span>Saved Ads</span>
      </button>
      <button
        onClick={() => navigate("/profile/settings")}
        className={`flex flex-col items-center space-y-1 ${isActive("/profile/settings") ? "font-bold" : ""}`}
        aria-label="Settings"
      >
        <Settings size={24} />
        <span>Settings</span>
      </button>
    </nav>
  )
}
