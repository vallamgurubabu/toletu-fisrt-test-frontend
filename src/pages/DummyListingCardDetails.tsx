
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"


const images = [
  "/images/sample1.jpg",
  "/images/sample1.jpg",
  "/images/sample1.jpg",
  "/images/sample1.jpg",
]

export default function DummyListingCardDetails() {
  const navigate = useNavigate()

  return (
    <div className="relative bg-gray-50 min-h-screen flex justify-center px-2 lg:px-10">
      {/* Left Ad (Desktop Only) */}
      <div className="hidden lg:block sticky top-4 h-[90vh] w-40 bg-gray-200 text-center text-sm p-2 rounded shadow-md">
        <div className="text-gray-500">Ad Space</div>
        {/* Google Ad Placeholder */}
      </div>

      {/* Main Listing Content */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-4 space-y-4 relative z-">
        {/* Back Arrow */}
        <button
          className="absolute -top-2 -left-2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
          onClick={() => navigate(-1)}
        >
          
        </button>

        {/* Title */}
        <div className="bg-gray-100 text-center py-2 rounded-md font-semibold text-blue-600">
          Toletu
        </div>
        <div className="text-sm text-gray-600 text-center">
          Homes for rent in Anantapur &gt; 2bhk - 2bds, Ram nagar Anantapur
        </div>

        {/* Google Ad Insert */}
        <div className="text-center">
          <div className="my-2 w-full bg-gray-200 h-20 flex items-center justify-center rounded-md text-sm text-gray-500">
            Ad Banner (Google Ad Here)
          </div>
        </div>

        {/* Main Image */}
        <img
          src={images[0]}
          alt="Main listing"
          className="w-full h-48 object-cover rounded"
        />

        {/* Thumbnail Images */}
        <div className="flex justify-between space-x-1">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className="w-1/4 h-16 object-cover rounded"
            />
          ))}
        </div>

        {/* Details Section */}
        <div className="bg-white border rounded-md p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Details:</h2>
            <div className="space-x-2">
              <Button variant="destructive" size="sm">Report ad</Button>
              <Button variant="outline" size="sm">Share</Button>
            </div>
          </div>

          <table className="text-sm w-full mt-2">
            <tbody className="text-gray-700">
              <tr><td className="font-medium">Type:</td><td>Individual</td></tr>
              <tr><td className="font-medium">Bedrooms:</td><td>2</td></tr>
              <tr><td className="font-medium">Bathrooms:</td><td>2</td></tr>
              <tr><td className="font-medium">Furnishing:</td><td>Semi Furnished</td></tr>
              <tr><td className="font-medium">Floor No:</td><td>1</td></tr>
              <tr><td className="font-medium">Car Parking:</td><td>Yes</td></tr>
              <tr><td className="font-medium">Residency Name:</td><td>Green Residency</td></tr>
            </tbody>
          </table>
        </div>

        {/* Ad Summary Section */}
        <div className="bg-gray-50 border rounded-md p-4">
          <p className="font-bold text-lg text-gray-800">₹5,000</p>
          <p className="text-sm text-gray-600">2bhk - 2bds</p>
          <p className="text-sm text-gray-600">Ram nagar, Anantapur</p>
          <p className="text-sm text-blue-600">Only for families</p>
          <p className="text-sm text-gray-500">Posted by: <span className="font-medium text-gray-800">Praveen</span></p>
          <Button className="mt-2 w-full">Contact Owner</Button>
        </div>
      </div>

      {/* Right Ad (Desktop Only) */}
      <div className="hidden lg:block sticky top-4 h-[90vh] w-40 bg-gray-200 text-center text-sm p-2 rounded shadow-md ml-4">
        <div className="text-gray-500">Ad Space</div>
        {/* Google Ad Placeholder */}
      </div>
    </div>
  )
}
