import { useEffect, useRef, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { MainBottomBar } from "@/components/MainBottomBar"
import { motion, AnimatePresence } from "framer-motion"
export function AppLayout() {
  const location = useLocation()
  const path = location.pathname

  const showBottombar = ["/", "/home", "/profile", "/search"].includes(path)
  const isProfileRoute = location.pathname.startsWith("/profile")

  const [expanded, setExpanded] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const barRef = useRef<HTMLDivElement>(null)

  // Collapse on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const shouldClose =
        expanded &&
        (!isProfileRoute || (isProfileRoute && !isSheetOpen))

      if (shouldClose && barRef.current && !barRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [expanded, isProfileRoute, isSheetOpen])

  // Collapse on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (expanded && (!isProfileRoute || (isProfileRoute && !isSheetOpen))) {
        setExpanded(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [expanded, isProfileRoute, isSheetOpen])

   return (
    <div className="pb-16 relative min-h-screen flex flex-col">
      <Outlet />


      {showBottombar && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          {/* Mobile View: Always show full bar */}
          <div className="sm:hidden">
            <MainBottomBar
              isSheetOpen={isSheetOpen}
              setIsSheetOpen={setIsSheetOpen}
            />
          </div>

          {/* Desktop View: Expandable with animation */}
          <div className="hidden sm:block relative">
            <AnimatePresence>
              {expanded && (
                <motion.div
                  ref={barRef}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute bottom-0 left-0 right-0"
                >
                  <MainBottomBar
                    isSheetOpen={isSheetOpen}
                    setIsSheetOpen={setIsSheetOpen}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="absolute bottom-4 right-4 w-12 h-12 bg-blue-400 text-white rounded-full shadow-lg flex items-center justify-center z-50"
                aria-label="Open Bottom Bar"
              >
                ≡
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
