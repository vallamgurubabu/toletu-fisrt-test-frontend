import { ListingCard } from "@/components/ListingCard"
import { useEffect, useState } from "react"

type Listing = {
  id: string
  image: string
  rent: string
  type: string
  owner: string
  location: string
  datePosted: string
}

export const ListingScrollContainer = () => {
  const [listings, setListings] = useState<Listing[]>([])

  useEffect(() => {
    const dummyListings = Array.from({ length: 20 }, (_, i) => ({
      id: `${i}`,
      image: "/placeholder.jpg",
      rent: `₹${5000 + i * 100}`,
      type: "Apartment",
      location: "Vijayawada",
      owner: "John Doe",
      datePosted: "2024-05-25",
    }))
    setListings(dummyListings)
  }, [])

  return (
    <div className="overflow-y-auto max-h-[80vh] px-4 scrollbar-hide">
      {/* Top banner ad (scrolls with content) */}
      <div className="w-full h-[120px] mb-4 flex items-center justify-center border rounded bg-blue-100 text-blue-800 text-sm font-medium">
        Top Ad Banner — Scrolls with content
      </div>

      <div
        className="
          grid 
          gap-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {listings.map((listing, idx) => (
          <div key={listing.id} className="w-full">
            <ListingCard listing={listing} />
          </div>
        )).flatMap((element, idx) => {
          const adIndex = idx + 1
          const result = [element]
          if (adIndex % 5 === 0) {
            result.push(
              <div
                key={`ad-${adIndex}`}
                className="h-[200px] flex items-center justify-center border rounded bg-muted text-muted-foreground text-sm"
              >
                Ad: Sponsored Listing
              </div>
            )
          }
          return result
        })}
      </div>
    </div>
  )
}
