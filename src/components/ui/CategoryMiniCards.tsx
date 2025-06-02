import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/pages/lib/utils";
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
    { label: "PG / Hostels", slug: "pg-hostels", icon: Hotel },
    { label: "Office Space", slug: "office-space", icon: Briefcase },
    { label: "Studio Space", slug: "studio-space", icon: Layout },
    { label: "Shops", slug: "shops", icon: ShoppingBag },
    { label: "Warehouses / Godowns", slug: "warehouses-godowns", icon: Boxes },
    { label: "Farm Lands", slug: "farm-lands", icon: TreePine },
    { label: "Commercial Buildings", slug: "commercial-buildings", icon: Banknote },
    { label: "AD Space", slug: "ad-space", icon: Megaphone },
];

export function CategoryMiniCards() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selected = params.get("category") || "";

    const handleSelect = (slug: string) => {
        params.set("category", slug);
        navigate(`/browse?${params.toString()}`);
    };

    return (
        <div className="w-full overflow-x-auto scrollbar-hide py-1 px-4">
            <div className="flex flex-nowrap justify-start lg:justify-center space-x-3 w-max lg:mx-auto">
                {categories.map(({ label, slug, icon: Icon }) => {
                    const isSelected = selected === slug;

                    return (
                        <div
                            key={slug}
                            onClick={() => handleSelect(slug)}
                            className={cn(
                                "min-w-[58px] h-[58px] rounded-md border text-center cursor-pointer transition duration-200 flex flex-col items-center justify-center",
                                isSelected
                                    ? "bg-blue-100 border-blue-500 text-blue-600 shadow-sm"
                                    : "bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
                            )}
                        >
                            <Icon size={14} className="mb-1" />
                            <span className="text-[9px] font-medium leading-tight text-center">
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
