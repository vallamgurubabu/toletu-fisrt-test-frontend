import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Share2, Flag, LinkedinIcon,InstagramIcon } from "lucide-react"
import { useEffect } from "react"

export default function RoommateProfileDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (window.adsbygoogle) {
      try {
        // @ts-ignore
        window.adsbygoogle.push({})
      } catch (e) {
        console.error("AdSense error", e)
      }
    }
  }, [])

  const profile = {
    id,
    name: "Ankit Sharma",
    age: 26,
    gender: "Male",
    occupation: "Software Engineer",
    city: "Bangalore",
    preferredLocalities: ["HSR Layout", "Koramangala"],
    moveInDate: "2025-06-10",
    roomType: "Private",
    budget: "₹10,000 - ₹15,000",
    smoker: "No",
    drinker: "Occasionally",
    food: "Eggetarian",
    hobbies: ["Reading", "Football", "Gaming"],
    about:
      "Hi, I'm Ankit, a calm and clean person who works in IT. I'm looking for a chill roommate who respects personal space.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  }

  return (
    <div className="relative">
      {/* Ad Banners */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-32 bg-gray-50 z-0">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="1111111111"
          data-ad-format="auto"
        ></ins>
      </div>
      <div className="hidden lg:block fixed right-0 top-0 h-full w-32 bg-gray-50 z-0">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="2222222222"
          data-ad-format="auto"
        ></ins>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 relative z-10 bg-white">
        <Button
          variant="ghost"
          className="mb-4 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} /> Back
        </Button>

        {/* Top Ad Banner */}
        <div className="mb-6 text-center bg-amber-50">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="3333333333"
            data-ad-format="horizontal"
            data-full-width-responsive="true"
          ></ins>
        </div>

        <Card className="rounded-2xl shadow-lg relative">
          {/* Report & Share Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="ghost" className="text-red-500 hover:text-red-600 p-2">
              <Flag size={18} />
            </Button>
            <Button variant="ghost" className="text-blue-500 hover:text-blue-600 p-2">
              <Share2 size={18} />
            </Button>
          </div>

          <CardHeader className="flex flex-col items-center text-center gap-2">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-28 h-28 rounded-full object-cover"
            />
            <CardTitle className="text-xl">{profile.name}</CardTitle>
            <div className="text-sm text-muted-foreground">
              {profile.occupation}
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Info label="Age" value={profile.age} />
              <Info label="Gender" value={profile.gender} />
              <Info label="City" value={profile.city} />
              <Info label="Move-in Date" value={profile.moveInDate} />
              <Info label="Room Type" value={profile.roomType} />
              <Info label="Budget" value={profile.budget} />
              <Info label="Smoker" value={profile.smoker} />
              <Info label="Drinker" value={profile.drinker} />
              <Info label="Food Preference" value={profile.food} />
            </div>

            <div>
              <p className="font-semibold text-muted-foreground mb-1">
                Preferred Localities
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.preferredLocalities.map((locality, i) => (
                  <Badge key={i} variant="outline">
                    {locality}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-muted-foreground mb-1">
                Hobbies & Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.hobbies.map((hobby, i) => (
                  <Badge className="bg-blue-400" key={i}>
                    {hobby}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-muted-foreground mb-1">About</p>
              <p className="text-sm text-gray-700">{profile.about}</p>
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full mt-2 bg-blue-400">Send Request</Button>
          </CardFooter>
          <div className="flex justify-center gap-6 mt-4 mb-4">
  
  <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
    <img
      src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
      alt="Instagram"
      className="w-6 h-6 object-contain"
    />
  </a>
  
  <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
      alt="Facebook"
      className="w-6 h-6 object-contain"
    />
  </a>
  <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
    <img
      src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
      alt="LinkedIn"
      className="w-6 h-6 object-contain"
    />
  </a>
</div>

        </Card>
      </div>
    </div>
  )
}

// Info helper
function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}
