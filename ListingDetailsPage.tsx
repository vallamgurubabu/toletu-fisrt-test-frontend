import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { getListingById } from "@/pages/lib/api"

export default function ListingDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [listing, setListing] = useState<any | null | undefined>(undefined)

  useEffect(() => {
    async function fetchListing() {
      const data = await getListingById(id!)
      setListing(data) // can be null
    }
    fetchListing()
  }, [id])

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
        <h1 className="text-xl font-bold text-blue-400">Toletu</h1>
        <div className="w-6" />
      </div>

      {listing === undefined ? (
        <p>Loading...</p>
      ) : !listing ? (
        <div className="p-4 border border-dashed rounded bg-gray-50 text-center">
          <p className="text-gray-600">No listing found for ID <b>{id}</b>.</p>
        </div>
      ) : (
        <>
          <img src={listing.imageUrls?.[0]} alt="listing" className="w-full h-64 object-cover rounded-lg mb-4" />

          <div className="flex space-x-2 overflow-x-auto mb-4">
            {listing.imageUrls?.map((url: string, idx: number) => (
              <img key={idx} src={url} alt="" className="w-16 h-16 rounded border" />
            ))}
          </div>

          <div className="border p-4 rounded-lg bg-white shadow">
            <h2 className="text-lg font-semibold mb-2">Details:</h2>
            <ul className="text-sm space-y-1">
              <li><b>Type:</b> {listing.type}</li>
              <li><b>Bedrooms:</b> {listing.bedrooms}</li>
              <li><b>Bathrooms:</b> {listing.bathrooms}</li>
              <li><b>Furnishing:</b> {listing.furnishing}</li>
              <li><b>Floor No:</b> {listing.floor}</li>
              <li><b>Car Parking:</b> {listing.carParking ? "Yes" : "No"}</li>
              <li><b>Residency Name:</b> {listing.residency}</li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
