import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/ui/Header2';
import { FilterSortBar } from '@/components/FilterSortBar';
import { ListingScrollContainer } from '@/components/ListingScrollContainer';
import { useCategoryStore } from '@/store/useCategoryStore';
import { useListingStore } from '@/store/useListingStore';
import { ToletuLoader } from '@/components/ui/ToletuLoader';

export function BrowsePage() {
  const [searchParams] = useSearchParams();
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const setSelectedCategory = useCategoryStore((state) => state.setSelectedCategory);
  
  const {
    listings,
    loading,
    error,
    fetchListings
  } = useListingStore();

  // Set category from URL param on first render
  useEffect(() => {
    const categoryFromURL = searchParams.get('category');
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
      fetchListings(categoryFromURL);
    }
  }, [searchParams]);

  return (
    <div>
      <Header />
      <h1 className="text-xl text-center font-bold">
        Showing rental listings for {selectedCategory || "All Categories"}
      </h1>
      <FilterSortBar />
      {loading ? (
        <ToletuLoader />
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <ListingScrollContainer listings={listings} />
      )}
    </div>
  );
}
