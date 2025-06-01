import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

// Mock fetch function for listings
type Listing = {
  id: string
  title: string
  description: string
  imageUrl: string
}

async function fetchListings(category: string, location: string): Promise<Listing[]> {
  // Replace with real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 10 }, (_, i) => ({
          id: `${category}-${i}`,
          title: `${category} Listing #${i + 1}`,
          description: `Located in ${location || "various locations"}`,
          imageUrl: "https://via.placeholder.com/400x300",
        }))
      )
    }, 1000)
  })
}

export function ListingGrid({ category, location }: { category: string; location: string }) {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchListings(category, location).then((data) => {
      setListings(data)
      setLoading(false)
    })
  }, [category, location])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {loading ? (
        <div className="col-span-full flex justify-center items-center py-12">
          <Loader2 className="animate-spin text-muted-foreground" size={32} />
        </div>
      ) : (
        listings.map((listing, index) => (
          <>
            {/* Insert ad after every 4th listing */}
            {index > 0 && index % 4 === 0 && (
              <div className="col-span-full">
                {/* Google AdSense ad slot */}
                <div className="w-full h-32 flex items-center justify-center border border-dashed border-gray-400">
                  <p className="text-sm text-muted-foreground">Ad Placeholder (Google AdSense)</p>
                </div>
              </div>
            )}

            <Card key={listing.id} className="overflow-hidden">
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-3">
                <h3 className="text-base font-semibold mb-1">{listing.title}</h3>
                <p className="text-sm text-muted-foreground">{listing.description}</p>
              </CardContent>
            </Card>
          </>
        ))
      )}
    </div>
  )
}
