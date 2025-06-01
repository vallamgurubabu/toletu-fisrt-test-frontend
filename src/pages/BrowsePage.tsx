import { FilterSortBar } from "@/components/FilterSortBar"
import { ListingScrollContainer } from "@/components/ListingScrollContainer"
export function BrowsePage() {
  return (
    <div>
    <div>
      <h1 className="text-center text-xl p-1 font-bold m-1 bg-blue-100 rounded-1xl text-blue-400">Toletu</h1>
      </div>
      <h1 className=" text-xl text-center font-bold">Browse Listings  </h1>
      <FilterSortBar/>
      <ListingScrollContainer />
    </div>
  )
}
