// src/App.tsx
import { useInitUserSettings } from './hooks/useInitUserSettings'
import { AppRouter } from '@/routes/AppRouter'
import { Toaster } from "@/components/ui/sonner"

function App() {
  useInitUserSettings()
  console.log('[App] Component mounted')

  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  )
}

export default App
