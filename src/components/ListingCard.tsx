// src/components/ListingCard.tsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"

export type Listing = {
  id: string
  image: string
  rent: string
  type: string
  owner: string
  location: string
  datePosted: string
}

export function ListingCard({ listing }: { listing: Listing }) {
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLiked((prev) => !prev)
    // Add onClick handler logic here if needed
  }

  return (
    <Card
      onClick={() => navigate(`/listing/${listing.id}`)}
      className="relative min-w-[250px] max-w-sm cursor-pointer hover:shadow-lg transition-shadow p-0"
    >
      {/* Love icon on top-right */}
      <button
        onClick={toggleLike}
        className="absolute top-2 right-2 z-10 p-1 rounded-full"
        aria-label={liked ? "Unlike" : "Like"}
      >
        <Heart
          size={30}
          strokeWidth={0}
          fill={liked ? "currentColor" : "black"}
          className={`w-7 h-7 transition-colors duration-[500ms] ease-in-out ${liked ? "text-red-500" : "text-blue-500"
            }`}
        />
      </button>

      <img
        src={listing.image}
        alt="Listing"
        className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-md m-0 p-0"
      />

      <CardContent className="p-4 space-y-1">
        <div className="flex justify-between text-lg font-bold text-primary">
          {listing.rent}
        </div>
        <p className="text-sm text-muted-foreground">
          {listing.type} • {listing.location}
        </p>
        <p className="text-sm">By {listing.owner}</p>
        <Badge className="text-xs mt-2 bg-blue-400">{listing.datePosted}</Badge>
      </CardContent>
    </Card>
  )
}
