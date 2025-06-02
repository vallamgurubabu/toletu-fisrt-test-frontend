import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { useLocationStore } from "@/store/useLocationStore"
import { useNotificationStore } from "@/store/useNotificationStore"
import { fetchNotifications, performSearch } from "@/pages/lib/api"
import { getFromCache, setInCache } from "@/pages/lib/redis"
import { useNavigate } from 'react-router-dom'


const cities = [
  'Amaravati', 'Anantapur', 'Chittoor',
  'Guntur', 'Kadapa', 'Kakinada', 'Krishna', 'Kurnool',
  'Nandyal', 'Nellore', 'Vijayawada',
  'Rajahmundry', 'Srikakulam', 'Tirupati', 'Visakhapatnam',
].sort()

// ... all imports remain the same

export function Header() {
  const navigate = useNavigate()
  const { selectedLocation, setSelectedLocation } = useLocationStore()
  const { isOpen, notifications, openSheet, closeSheet, setNotifications } = useNotificationStore()
  const [searchText, setSearchText] = useState('')
  const [showLocationWarning, setShowLocationWarning] = useState(false)

  const handleSearch = async () => {
    if (!selectedLocation) {
      setShowLocationWarning(true)
      return

    }
    setShowLocationWarning(false)

    if (!searchText.trim()) return

    const cacheKey = `${selectedLocation}:${searchText.trim()}`
    let results = getFromCache(cacheKey)

    if (!results) {
      results = await performSearch(searchText.trim(), selectedLocation)
      setInCache(cacheKey, results)
    }

    const query = encodeURIComponent(searchText.trim())
    const location = encodeURIComponent(selectedLocation)
    navigate(`search/?q=${query}&location=${location}`)
  }
  console.log("Selected Location:", selectedLocation)

  const handleNotifications = async () => {
    const notes = await fetchNotifications()
    setNotifications(notes)
    openSheet()
  }

  return (
    <header className="w-full p-2 flex flex-col gap-2 bg-white shadow-s">
      <div className="flex items-center justify-between gap-2">
        <div className="text-blue-500 text-4xl font-bold">Toletu</div>
        <div className="flex flex-col items-start gap-1">
          {showLocationWarning && (
            <div className="text-red-500 text-sm font-medium ml-1">
              📍 Please select a location
            </div>
          )}
          <div className="flex items-center gap-2">
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[125px]">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Sheet open={isOpen} onOpenChange={(open) => !open && closeSheet()}>
              <SheetTrigger asChild>
                <Button variant="ghost" onClick={handleNotifications}>
                  <Bell className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Notifications</SheetTitle>
                  <SheetDescription>Here are your latest updates</SheetDescription>
                </SheetHeader>
                <ul className="mt-4 list-disc pl-4 space-y-2 text-sm">
                  {notifications.length > 0 ? notifications.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  )) : <li>No new notifications</li>}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Centered Search Bar */}
      <div className="w-full flex justify-center">
        <div className="relative w-full sm:w-[60%]">
          <Input
            placeholder="Search 'Houses' 'Flats' 'Shops' properties..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-4 pr-28 h-10 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <Button
            onClick={handleSearch}
            className="absolute top-1/2 right-1 -translate-y-1/2 h-8 px-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm flex items-center gap-1 shadow"
          >
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
