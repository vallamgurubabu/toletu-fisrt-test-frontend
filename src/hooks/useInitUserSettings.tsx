import { useLocationStore } from "@/store/useLocationStore"
import { useEffect } from "react"

export function useInitUserSettings() {
  console.log("useInitUserSettings hook invoked")

  const setLocation = useLocationStore((state) => state.setSelectedLocation)

  useEffect(() => {
    console.log("useEffect in useInitUserSettings running")

    
    // Location access
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          console.log("Got position", latitude, longitude)

          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then(res => res.json())
            .then(data => {
              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.state_district ||
                "Unknown"
              setLocation(city)
              console.log("Set location to:", city)
            })
            .catch(err => console.warn("Fetch error", err))
        },
        (error) => {
          console.warn("Geolocation error", error.message)
        }
      )
    } else {
      console.warn("Geolocation not supported")
    }

    // Notification access
    if ("Notification" in window) {
      Notification.requestPermission()
        .then(permission => {
          console.log("Notification permission:", permission)
          if (permission === "granted") {
            new Notification("Welcome to Toletu!", {
              body: "We’ll notify you about the best rentals near you.",
              icon: "/icon.png",
            })
          }
        })
        .catch(err => console.warn("Notification permission error", err))
    } else {
      console.log("Notifications not supported")
    }
  }, [setLocation])
}
