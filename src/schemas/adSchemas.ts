// File: schemas/adSchema.ts
// schemas/adSchemas.ts
export type FormField = {
  name: string;
  type: "text" | "number" | "textarea" | "select" | "checkbox" | "image" | "date";
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
};

export type CategorySchema = Record<string, FormField[]>;

export const adSchema: CategorySchema = {
  'houses': [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    { name: "price", label: "Rent (INR)", type: "number", required: true },
    { name: "location", label: "Location", type: "text", required: true },
    { name: "bedrooms", label: "Bedrooms", type: "number" },
    { name: "bathrooms", label: "Bathrooms", type: "number" },
    { name: "furnished", label: "Furnished", type: "select", options: ["Yes", "No", "Semi"], required: true },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  'apartments': [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    { name: "price", label: "Price (INR)", type: "number", required: true },
    { name: "location", label: "Location", type: "text", required: true },
    { name: "floor", label: "Floor", type: "number" },
    { name: "totalFloors", label: "Total Floors", type: "number" },
    { name: "balcony", label: "Balcony Available", type: "select", options: ["Yes", "No"] },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  'rooms': [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "price", label: "Rent (INR)", type: "number", required: true },
    { name: "location", label: "Location", type: "text", required: true },
    { name: "attachedBathroom", label: "Attached Bathroom", type: "select", options: ["Yes", "No"] },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  'flats': [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    { name: "price", label: "Price (INR)", type: "number", required: true },
    { name: "location", label: "Location", type: "text", required: true },
    { name: "bedrooms", label: "Bedrooms", type: "number" },
    { name: "bathrooms", label: "Bathrooms", type: "number" },
    { name: "furnished", label: "Furnished", type: "select", options: ["Yes", "No", "Semi"] },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  'pg-hostels': [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    { name: "rentPerBed", label: "Rent per Bed (INR)", type: "number" },
    { name: "location", label: "Location", type: "text", required: true },
    { name: "mealsIncluded", label: "Meals Included", type: "select", options: ["Yes", "No"] },
    { name: "acAvailable", label: "AC Available", type: "select", options: ["Yes", "No"] },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  "office-space": [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    { name: "price", label: "Monthly Rent (INR)", type: "number", required: true },
    { name: "location", label: "Location", type: "text" },
    { name: "area", label: "Area (sq.ft)", type: "number" },
    { name: "seatingCapacity", label: "Seating Capacity", type: "number" },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  'studio-space': [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    { name: "price", label: "Rent (INR)", type: "number" },
    { name: "location", label: "Location", type: "text" },
    { name: "area", label: "Area (sq.ft)", type: "number" },
    { name: "availableFor", label: "Available For", type: "text" },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  'shops': [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "location", label: "Location", type: "text", required: true },
    { name: "price", label: "Monthly Rent (INR)", type: "number", required: true },
    { name: "shopArea", label: "Area (sq.ft)", type: "number" },
    { name: "facing", label: "Shop Facing", type: "text" },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  'warehouses-godowns': [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea" },
    { name: "location", label: "Location", type: "text" },
    { name: "area", label: "Total Area (sq.ft)", type: "number" },
    { name: "loadingDock", label: "Loading Dock", type: "select", options: ["Yes", "No"] },
    { name: "price", label: "Rent (INR)", type: "number" },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  "farm-lands": [
    { name: "title", label: "Title", type: "text" },
    { name: "location", label: "Location", type: "text" },
    { name: "area", label: "Land Area (Acres)", type: "number" },
    { name: "irrigated", label: "Irrigated", type: "select", options: ["Yes", "No"] },
    { name: "price", label: "Price (INR)", type: "number" },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  "commercial-buildings": [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "location", label: "Location", type: "text" },
    { name: "area", label: "Area (sq.ft)", type: "number" },
    { name: "floors", label: "No. of Floors", type: "number" },
    { name: "parking", label: "Parking Available", type: "select", options: ["Yes", "No"] },
    { name: "price", label: "Price (INR)", type: "number" },
    { name: "images", label: "Upload Images", type: "image" }
  ],
  "ad-space": [
    { name: "title", label: "Ad Title", type: "text", required: true },
    { name: "location", label: "Ad Location", type: "text", required: true },
    { name: "type", label: "Ad Type", type: "select", options: ["Billboard", "Digital Display", "Posters"] },
    { name: "duration", label: "Duration (in weeks)", type: "number" },
    { name: "price", label: "Price (INR)", type: "number" },
    { name: "images", label: "Upload Sample Images", type: "image" }
  ]
};


