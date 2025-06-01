import { Header } from "@/components/ui/Header"
import { CategoryBar } from "@/components/ui/CategoryBar"
import { FilterSortBar } from "@/components/FilterSortBar"
import { ListingScrollContainer } from "@/components/ListingScrollContainer"



const HomePage = () => {
  return (
    <div className="flex flex-col gap-0 p-0">
      <Header />
     
      <CategoryBar />
      <FilterSortBar />
      <ListingScrollContainer />


    </div>
  )
}

export default HomePage
