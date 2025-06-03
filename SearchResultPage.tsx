import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useSearchStore } from '@/store/useSearchStore'
import { useSearch } from '@/hooks/useSearch'
import { FilterSortBar } from '@/components/FilterSortBar'
import { ListingScrollContainer } from '@/components/ListingScrollContainer'
import { SearchResultsheader } from '@/components/searchResultsheader'

export function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get("q") || ""
  const location = searchParams.get("location") || ""

  const { setQuery, setLocation } = useSearchStore()

  useEffect(() => {
    setQuery(query)
    setLocation(location)
  }, [query, location])

  const { results, isLoading } = useSearch()

  return (
    <div className="p-0">
      <SearchResultsheader />
      <h1 className="text-xl text-center font-bold mb-4">Rentals in {location}</h1>
      <FilterSortBar />
      {isLoading ? (
        <p className="text-center mt-10">Loading...</p>
      ) : results && results.length > 0 ? (
        <ListingScrollContainer listings={results} />
      ) : (
        <div className="text-center text-gray-500 mt-20 text-lg">
          <p>We&apos;re sorry — no listings found.</p>
          <p>Try another category or location.</p>
        </div>
      )}
    </div>
  )
}
