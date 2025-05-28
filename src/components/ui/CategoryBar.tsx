import { Button } from "@/components/ui/button"
import { cn } from "@/pages/lib/utils"


const categories = [
  "Houses",
  "Apartments",
  "Rooms",
  "Flats",
  "PG / Hostels",
  "Office Space",
  "Studio Space",
  "Shops",
  "Warehouses / Godowns",
  "Farm Lands",
  "Commercial Buildings",
  "AD Space"
]

export function CategoryBar({
  selected,
  onSelect,
}: {
  selected: string
  onSelect: (category: string) => void
}) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-2">
      <div className="flex space-x-3 min-w-max px-0">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selected === category ? "toletu" : "toletu"}
            className={cn(
              "whitespace-nowrap text-sm rounded-full",
              selected === category ? "bg-primary text-white" : ""
            )}
            onClick={  () => onSelect(category) }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
