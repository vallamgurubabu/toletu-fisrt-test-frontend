import { useNavigate, useLocation } from "react-router-dom"
import { cn } from "@/pages/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Home,
  Building2,
  Bed,
  Landmark,
  Hotel,
  Warehouse,
  Trees,
  Store,
  PencilRuler,
  MonitorSmartphone,
  LayoutDashboard,
  ScrollText,
} from "lucide-react"

const categories = [
  { label: "Houses", icon: Home },
  { label: "Apartments", icon: Building2 },
  { label: "Rooms", icon: Bed },
  { label: "Flats", icon: Landmark },
  { label: "PG / Hostels", icon: Hotel },
  { label: "Office Space", icon: MonitorSmartphone },
  { label: "Studio Space", icon: PencilRuler },
  { label: "Shops", icon: Store },
  { label: "Warehouses / Godowns", icon: Warehouse },
  { label: "Farm Lands", icon: Trees },
  { label: "Commercial Buildings", icon: LayoutDashboard },
  { label: "AD Space", icon: ScrollText },
]

export function CategoryBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const selected = params.get("category") || ""

  const handleSelect = (category: string) => {
    params.set("category", category)
    navigate(`/browse?${params.toString()}`)
  }

  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2 px-1">
      <div className="flex space-x-3 min-w-max">
        {categories.map(({ label, icon: Icon }) => (
          <Button
            key={label}
            variant="ghost"
            className={cn(
              "whitespace-nowrap text-sm rounded-full flex gap-1 items-center px-3 py-1 border",
              selected === label ? "bg-primary text-white" : "bg-muted"
            )}
            onClick={() => handleSelect(label)}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}
