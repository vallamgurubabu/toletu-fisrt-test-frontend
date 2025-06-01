import { useAuthStore } from "@/store/useAuthStore"
import type { JSX } from "react"
import { Navigate } from "react-router-dom"

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) return <Navigate to="/login" replace />
  return children
}
