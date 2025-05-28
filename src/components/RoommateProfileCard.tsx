import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

interface Roommate {
  id: string
  name: string
  occupation: string
  location: string
  bio: string
  photoUrl: string
}

export function RoommateProfileCard({ roommate }: { roommate: Roommate }) {
  const navigate = useNavigate()

  return (
    <Card
      onClick={() => navigate(`/roommate/${roommate.id}`)}
      className="w-full max-w-md mx-auto cursor-pointer hover:shadow-lg transition-shadow"
    >
      <CardHeader className="flex items-center gap-4">
        <img
          src={roommate.photoUrl}
          alt={roommate.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <CardTitle>{roommate.name}</CardTitle>
          <CardDescription>{roommate.occupation}</CardDescription>
          <CardDescription>{roommate.location}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">{roommate.bio}</p>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
  )
}
