// src/main.tsx
import React from "react"
import ReactDOM from "react-dom/client"
import "@/index.css"
import App from "@/App"  // <-- Correct: use App.tsx
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./pages/lib/queryClient"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />   {/* Contains AppRouter + useInitUserSettings */}
  </QueryClientProvider>
  </React.StrictMode>
)
