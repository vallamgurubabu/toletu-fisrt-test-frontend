import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { FilterSortBar } from "@/components/FilterSortBar"
import { ListingScrollContainer } from "@/components/ListingScrollContainer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getFromCache, setInCache } from "@/pages/lib/redis"
import { performSearch } from "@/pages/lib/api"

export function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const query = searchParams.get("q") || ""
  const location = searchParams.get("location") || ""

  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState([])

  useEffect(() => {
    const cacheKey = `${location}:${query}`
    const cachedResults = getFromCache(cacheKey)

    if (cachedResults) {
      setResults(cachedResults)
    } else {
      performSearch(query, location).then((res) => {
        setResults(res)
        setInCache(cacheKey, res)
      })
    }
  }, [query, location])

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    const encodedQuery = encodeURIComponent(searchQuery.trim())
    const encodedLocation = encodeURIComponent(location)
    navigate(`/search?q=${encodedQuery}&location=${encodedLocation}`)
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="text-center text-xl font-bold mb-2 bg-blue-100 text-blue-400 rounded-xl p-2">
        Toletu
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search listings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Filter & Listings */}
      <h1 className="text-xl text-center font-bold mb-4">Search Results</h1>
      <FilterSortBar />
      <ListingScrollContainer searchQuery={query} location={location} />
    </div>
  )
}
