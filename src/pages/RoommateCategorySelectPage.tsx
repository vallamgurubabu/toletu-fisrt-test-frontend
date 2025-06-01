import { useNavigate } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BedDouble, UserPlus } from "lucide-react"

export default function RoommateCategorySelectPage() {
  const navigate = useNavigate()

  const options = [
    {
      title: "I Have a Room",
      description: "I am Looking for a Roommate to move in",
      icon: <UserPlus className="w-10 h-10 text-blue-600" />,
      action: () => navigate("/roommate-pool"),
    },
    {
      title: "I Need a Room",
      description: "I am Looking for a Room to move into",
      icon: <BedDouble className="w-10 h-10 text-emerald-600" />,
      action: () => navigate("/roommate-pool"),
    },
  ]

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-center">
        What are you looking for?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full">
        {options.map((option, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className="rounded-2xl p-4 cursor-pointer shadow-md hover:shadow-xl transition"
              onClick={option.action}
            >
              <CardContent className="flex flex-col items-center gap-4">
                {option.icon}
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="text-sm text-muted-foreground text-center">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
