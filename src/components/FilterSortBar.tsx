import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

import { useLocationStore } from "@/store/useLocationStore"

const areaMap: Record<string, string[]> = {
  Anantapur: ["Clock Tower", "Kamalanagar", "Housing Board"],
  Chittoor: ["Bharathi Nagar", "Kattamanchi", "Mangasamudram"],
  Guntur: ["Brodipet", "Lakshmipuram", "Patnam Bazar"],
  Kadapa: ["RTC Colony", "Yerramukkapalli", "Tilak Nagar"],
  Kakinada: ["Sarpavaram", "Jagannadhapuram", "Rama Rao Peta"],
  Kurnool: ["Nandyal Road", "Deva Nagar", "Ashok Nagar"],
  Nellore: ["Balaji Nagar", "Magunta Layout", "Dargamitta"],
  Ongole: ["Bhagyanagar", "Mangamuru Donka", "Kurnool Road"],
  Rajahmundry: ["Morampudi", "Tilak Road", "Aryapuram"],
  Srikakulam: ["Balaga", "Arasavalli", "Day & Night Junction"],
  Tadepalligudem: ["RTC Colony", "Gandhi Nagar", "Ameerpet"],
  Tirupati: ["Korlagunta", "Renigunta Road", "Balaji Colony"],
  Vijayawada: ["Benz Circle", "Governorpet", "Gollapudi"],
  Visakhapatnam: ["MVP Colony", "Dwaraka Nagar", "Gajuwaka"],
  Vizianagaram: ["Kothapeta", "Chintalavalasa", "Vasavi Nagar"],
  Eluru: ["Powerpet", "Ashok Nagar", "Sanivarapupeta"],
}

const sortOptions: { label: string; value: string }[] = [
  { label: "Date: Newest first", value: "newest" },
  { label: "Price: Low - High", value: "priceLow" },
  { label: "Price: High - Low", value: "priceHigh" },
]

export function FilterSortBar() {
  const selectedLocation = useLocationStore((state) => state.selectedLocation)
  const [selectedSort, setSelectedSort] = React.useState("")
  const [selectedArea, setSelectedArea] = React.useState("")
  const [searchText, setSearchText] = React.useState("")

  const areaOptions = selectedLocation ? areaMap[selectedLocation] || [] : []

  const handleSearch = () => {
    console.log("Searching for:", searchText)
  }

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full px-2 py-3 bg-white border-b shadow-md">
      {/* Search - 60% */}
      <div className="relative w-full sm:w-[60%]">
        <Input
          placeholder="Search 'Houses' 'Flats' 'Shops' properties..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="pl-4 pr-28 h-10 rounded-full shadow-sm focus:ring-2 focus:ring-blue-400"
        />
        <Button
          onClick={handleSearch}
          className="absolute top-1/2 right-1 -translate-y-1/2 h-8 px-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm flex items-center gap-1 shadow"
        >
          <Search className="w-4 h-4" />
          Search
        </Button>
      </div>

      {/* Area + Sort - 40% */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-[40%]">
        {/* Sort Dropdown */}
        <div className="w-full sm:w-1/2">
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger id="sort" className="w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Area Dropdown */}
        <div className="w-full sm:w-1/2">
          <Select value={selectedArea} onValueChange={setSelectedArea} disabled={areaOptions.length <= 1}>
            <SelectTrigger id="area" className="w-full">
              <SelectValue placeholder={areaOptions.length ? "Choose area" : "Select area"} />
            </SelectTrigger>
            <SelectContent>
              {areaOptions.map((area) => (
                <SelectItem key={area} value={area}>
                  {area}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
