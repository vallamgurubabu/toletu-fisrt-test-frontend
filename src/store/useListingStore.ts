// store/useListingStore.ts
import { create } from "zustand";

interface Listing {
  id: string;
  title: string;
  // Add your actual fields here
}

interface ListingStore {
  listings: Listing[] | null;
  loading: boolean;
  error: string | null;
  fetchListings: (category: string | null) => Promise<void>;
}

export const useListingStore = create<ListingStore>((set) => ({
  listings: null,
  loading: false,
  error: null,

  fetchListings: async (category) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/listings?category=${category || ""}`);
      const data = await response.json();
      set({ listings: data, loading: false });
    } catch (error) {
      set({ error: "Failed to load listings", loading: false });
    }
  },
}));
