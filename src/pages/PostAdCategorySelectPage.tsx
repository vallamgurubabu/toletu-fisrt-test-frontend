import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Building,
  Bed,
  Landmark,
  Hotel,
  Briefcase,
  Layout,
  ShoppingBag,
  Boxes,
  TreePine,
  Banknote,
  Megaphone,
} from "lucide-react";

const categories = [
  { label: "Houses", slug: "houses", icon: Home },
  { label: "Apartments", slug: "apartments", icon: Building },
  { label: "Rooms", slug: "rooms", icon: Bed },
  { label: "Flats", slug: "flats", icon: Landmark },
  { label: "PG & Hostels", slug: "pg-hostels", icon: Hotel },
  { label: "Office Space", slug: "office-space", icon: Briefcase },
  { label: "Studio Space", slug: "studio-space", icon: Layout },
  { label: "Shops", slug: "shops", icon: ShoppingBag },
  { label: "Warehouses / Godowns", slug: "warehouses-godowns", icon: Boxes },
  { label: "Farm Lands", slug: "farm-lands", icon: TreePine },
  { label: "Commercial Buildings", slug: "commercial-buildings", icon: Banknote },
  { label: "Ad Space", slug: "ad-space", icon: Megaphone },
];

const PostAdCategorySelectPage = () => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const navigate = useNavigate();

  // Navigate immediately on click
  const handleCategoryClick = (slug: string) => {
    setSelectedSlug(slug); // optional, keeps highlight if needed
    navigate(`/DynamicForm/${encodeURIComponent(slug)}`);
  };

  return (
    <div className="p-4 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Select a Category</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map(({ label, slug, icon: Icon }) => (
          <Card
            key={slug}
            onClick={() => handleCategoryClick(slug)}
            className={`cursor-pointer hover:shadow-lg transition duration-200 border-2 ${
              selectedSlug === slug
                ? "border-blue-500 bg-blue-50"
                : "border-transparent"
            }`}
          >
            <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
              <Icon size={32} className="text-blue-600" />
              <p className="text-sm text-center font-medium">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Removed the Next button */}
    </div>
  );
};

export default PostAdCategorySelectPage;
