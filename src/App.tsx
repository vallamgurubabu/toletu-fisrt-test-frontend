// src/App.tsx
import { useInitUserSettings } from './hooks/useInitUserSettings'
import { AppRouter } from '@/routes/AppRouter'
import { Toaster } from "@/components/ui/sonner"
import { SessionManager } from './components/SessionManager'

function App() {
  useInitUserSettings()
  console.log('[App] Component mounted')

  return (
    <>
    <SessionManager/>
      <AppRouter />
      <Toaster />
    </>
  )
}

export default App
