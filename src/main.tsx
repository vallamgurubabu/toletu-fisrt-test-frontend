// src/main.tsx
import React from "react"
import ReactDOM from "react-dom/client"
import "@/index.css"
import App from "@/App"  // <-- Correct: use App.tsx

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />   {/* Contains AppRouter + useInitUserSettings */}
  </React.StrictMode>
)
