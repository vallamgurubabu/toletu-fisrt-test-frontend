import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Heart, Megaphone, X } from "lucide-react"
import { useState } from "react"

export default function ProfileSheet({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [showFavourites, setShowFavourites] = useState(false)
  const [showMyAds, setShowMyAds] = useState(false)

  return (
    <>
      {/* Main Profile Sheet */}
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[340px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <SheetTitle className="text-lg font-semibold">My Profile</SheetTitle>
           
          </div>

          <div className="flex flex-col items-center gap-3 px-4 pb-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="Avatar"
              className="w-20 h-20 rounded-full border"
            />
            <div className="text-center">
              <h3 className="text-base font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">
                john.doe@example.com
              </p>
            </div>
          </div>

          <div className="px-4 space-y-2">
            <Button
              variant="secondary"
              className="w-full justify-start gap-2"
              onClick={() => setShowFavourites(true)}
            >
              <Heart className="h-5 w-5" />
              Favourite Ads
            </Button>
            <Button
              variant="secondary"
              className="w-full justify-start gap-2"
              onClick={() => setShowMyAds(true)}
            >
              <Megaphone className="h-5 w-5" />
              My Ads
            </Button>
          </div>

          <div className="mt-auto px-4 py-4 border-t">
            <Button variant="destructive" className="w-full">
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Favourite Ads Sheet */}
      <Sheet open={showFavourites} onOpenChange={setShowFavourites}>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[340px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <SheetTitle className="text-lg font-semibold">Favourite Ads</SheetTitle>
            
          </div>

          {/* Your favourite ads content here */}
          <div className="p-4 space-y-2 text-sm text-muted-foreground">
            <p>You have 3 favourite ads saved.</p>
            {/* Replace below with actual mapped ads */}
            <p>- 2BHK near City Center</p>
            <p>- Flatmate required for 1BHK</p>
          </div>
        </SheetContent>
      </Sheet>

      {/* My Ads Sheet */}
      <Sheet open={showMyAds} onOpenChange={setShowMyAds}>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[340px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <SheetTitle className="text-lg font-semibold">My Ads</SheetTitle>
            
          </div>

          {/* Your posted ads content here */}
          <div className="p-4 space-y-2 text-sm text-muted-foreground">
            <p>You’ve posted 2 ads.</p>
            {/* Replace below with actual mapped ads */}
            <p>- 1BHK for Rent in Jubilee Hills</p>
            <p>- Room Available in Hostel PG</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
