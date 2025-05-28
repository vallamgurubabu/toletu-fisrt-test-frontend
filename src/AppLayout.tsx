import { Outlet, useLocation } from "react-router-dom"
import { MainBottomBar } from "@/components/MainBottomBar"
import { ProfileBottomBar } from "@/components/ProfileBottomBar"
import { motion, AnimatePresence } from "framer-motion"

export function AppLayout() {
  const location = useLocation()
  const path = location.pathname

  const showBottombar = ["/", "/home", "/profile", "/search"].some((route) =>
    path.startsWith(route)
  )
  const isProfileRoute = path.startsWith("/profile")

  return (
    <div className="pb-16">
      <Outlet />

      {/* AnimatePresence ensures smooth mount/unmount */}
      <AnimatePresence>
        {showBottombar && (
          <motion.div
            key={isProfileRoute ? "profile-bar" : "main-bar"}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0"
          >
            {isProfileRoute ? <ProfileBottomBar /> : <MainBottomBar />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
