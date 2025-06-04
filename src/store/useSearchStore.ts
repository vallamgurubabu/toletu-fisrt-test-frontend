import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export interface SearchFilters {
  priceRange?: [number, number]
  category?: 'flat' | 'house' | 'room' | 'pg' | 'hostel'
  furnished?: boolean
  bedrooms?: number
  bathrooms?: number
  // ...add as needed
}


interface SearchState {
  query: string
  location: string
  filters: SearchFilters
  setQuery: (q: string) => void
  setLocation: (l: string) => void
  setFilters: (f: SearchFilters) => void
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      query: '',
      location: '',
      filters: {},
      setQuery: (query) => set({ query }),
      setLocation: (location) => set({ location }),
      setFilters: (filters) => set({ filters }),
    }),
    { name: 'search-store' }
  )
)