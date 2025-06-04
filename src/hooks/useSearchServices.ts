import { performSearch } from '@/pages/lib/api'
import { getFromCache, setInCache } from '@/pages/lib/redis'

export async function fetchSearchResults(query: string, location: string) {
  const cacheKey = `${location}:${query}`
  const cached = getFromCache(cacheKey)
  if (cached) return cached

  const results = await performSearch(query, location)
  setInCache(cacheKey, results)
  return results
}

