import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { useLocationStore } from "@/store/useLocationStore"
import { useNotificationStore } from "@/store/useNotificationStore"
import { fetchNotifications, performSearch } from "@/pages/lib/api"
import { getFromCache, setInCache } from "@/pages/lib/redis"

const cities = [
  'Amaravati', 'Anantapur','Chittoor', 
   'Guntur', 'Kadapa', 'Kakinada', 'Krishna', 'Kurnool',
   'Nandyal', 'Nellore', 'Vijayawada', 
  'Rajahmundry', 'Srikakulam', 'Tirupati', 'Visakhapatnam',
].sort()

export function Header() {
  const { selectedLocation, setSelectedLocation } = useLocationStore()
  const { isOpen, notifications, openSheet, closeSheet, setNotifications } = useNotificationStore()
  const [searchText, setSearchText] = useState('')

  const handleSearch = async () => {
    const cacheKey = `${selectedLocation}:${searchText}`
    let results = getFromCache(cacheKey)
    if (!results) {
      results = await performSearch(searchText, selectedLocation)
      setInCache(cacheKey, results)
    }
    console.log("Search Results:", results)
  }

  const handleNotifications = async () => {
    const notes = await fetchNotifications()
    setNotifications(notes)
    openSheet()
  }

  return (
    <header className="w-full p-2 flex flex-col gap-2 bg-white shadow-s">
      <div className="flex items-center justify-between gap-2">
        <div className="text-blue-400 text-4xl font-bold">Toletu</div>
        <div className="flex items-center ">
          <Select onValueChange={setSelectedLocation} value={selectedLocation}>
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
              <Button variant="ghost" onClick={handleNotifications}><Bell className="w-5 h-5" /></Button>
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

      <div className="flex gap-1">
        <Input
          placeholder="Search 'Houses' 'Flats' 'Shops' properties..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={handleSearch} className='bg-blue-400'>Search</Button>
      </div>
    </header>
  )
}

export default Header