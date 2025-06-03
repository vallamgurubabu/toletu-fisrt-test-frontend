import { useSearchStore } from '../store/useSearchStore'
import { useQuery } from '@tanstack/react-query'
import { fetchSearchResults } from './useSearchServices'

export function useSearch() {
  const { query, location, filters } = useSearchStore()
  const { data, isLoading, error } = useQuery({
    queryKey: ['searchResults', query, location],
    queryFn: () => fetchSearchResults(query, location),
    enabled: !!query && !!location
  })

  return {
    results: data,
    isLoading,
    error,
    query,
    location,
    filters
  }
}
