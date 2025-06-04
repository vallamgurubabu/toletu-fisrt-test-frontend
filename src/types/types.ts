
interface FlatMetadata {
  floor: number
  bedrooms: number
  bathrooms: number
  furnished: boolean
  areaInSqFt: number
}

interface HouseMetadata {
  floors: number
  bedrooms: number
  parking: boolean
  garden: boolean
  builtYear: number
}

interface RoomMetadata {
  shared: boolean
  attachedBathroom: boolean
  furnished: boolean
}

interface PGMetadata {
  foodIncluded: boolean
  genderAllowed: 'male' | 'female' | 'any'
  acAvailable: boolean
  occupancy: 'single' | 'double' | 'triple'
}

interface HostelMetadata {
  numberOfBeds: number
  messIncluded: boolean
  inTime: string // e.g. "10:00 PM"
}


export type ListingMetadata =
  | ({ category: 'flat' } & FlatMetadata)
  | ({ category: 'house' } & HouseMetadata)
  | ({ category: 'room' } & RoomMetadata)
  | ({ category: 'pg' } & PGMetadata)
  | ({ category: 'hostel' } & HostelMetadata)


export type ListingCategory = 'flat' | 'house' | 'room' | 'pg' | 'hostel'



export interface AuthUser {
  id: string;
  phone: string;
  password?: string; // if needed in store, otherwise omit
  accessToken: string;
  refreshToken?: string;
}



// ---------------------------
// 📍 User Types
// ---------------------------

export interface User {
  id: string
  name: string
  phoneNumber: string
  password:string
  email?: string
  role: 'user' | 'admin' | 'guest'
  createdAt: string
  updatedAt: string
  accesstoken:string
  refreshToken:string 
  isVerified: boolean
}

export interface GuestUser {
  id: string
  sessionId: string
  createdAt: string
}

// ---------------------------
// 🛠️ Admin Types
// ---------------------------

export interface Admin extends User {
  role: 'admin'
  permissions: string[] // ['ban_user', 'delete_ad', 'view_reports', etc.]
}

// ---------------------------
// 🏠 Ad Listing
// ---------------------------

export interface Listing {
  id: string
  title: string
  description: string
  price: number
  category: ListingCategory
  location: string
  city: string
  area: string
  images: string[]
  createdBy: string // userId
  createdAt: string
  updatedAt: string
  isPublished: boolean
  metadata?: ListingMetadata // for category-specific info
}

// Example metadata usage (stored as JSONB in DB):
// {
//   floor: 2,
//   bedrooms: 1,
//   furnished: true
// }

// ---------------------------
// 🤝 Roommate Pool Profile
// ---------------------------

export interface RoommateProfile {
  id: string
  userId: string
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
  occupation: string
  preferences: {
    genderPreference: 'male' | 'female' | 'any'
    smoking: boolean
    food: 'veg' | 'nonveg' | 'any'
    guestsAllowed: boolean
  }
  bio?: string
  location: string
  budget: number
  createdAt: string
  updatedAt: string
}

// ---------------------------
// 📢 Roommate Ad (Listing-like)
// ---------------------------

export interface RoommateAd {
  id: string
  title: string
  description: string
  location: string
  budget: number
  sharedWithProfileId: string
  images: string[]
  createdAt: string
  updatedAt: string
  isActive: boolean
}

// ---------------------------
// 🧾 Search and Filter Payloads
// ---------------------------

export interface SearchFilters {
  category?: string
  location?: string
  minPrice?: number
  maxPrice?: number
  keywords?: string
}

export interface SearchResult<T> {
  total: number
  items: T[]
}

// ---------------------------
// 🛡️ Auth State (Zustand)
// ---------------------------

export interface AuthState {
  currentUser: User | null
  isAuthenticated: boolean
  token?: string
}

// ---------------------------
// 🗄️ UI/Client State (Zustand)
// ---------------------------

export interface SearchState {
  query: string
  location: string
  filters: SearchFilters
}
