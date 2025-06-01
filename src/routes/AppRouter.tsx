// src/routes/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "@/components/layout/AppLayout"
import HomePage from "@/pages/HomePage"
import { BrowsePage } from "@/pages/BrowsePage"
import DummyListingCardDetails from "@/pages/dummyListingCardDetails"
import RoommatePoolPage from "@/pages/RoommatePoolPage"
import RoommateProfileDetailsPage from "@/pages/RoommateProfileDetailsPage"
import RoommateCategorySelectPage from "@/pages/RoommateCategorySelectPage"
import DynamicPostAdFormPage from "@/pages/DynamicPostAdFormPage"
import PostAdCategorySelectPage from "@/pages/PostAdCategorySelectPage"
import { SearchResultsPage } from "@/pages/SearchResultPage"
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage"
import LoginPage from "@/pages/LoginPage"


const router = createBrowserRouter([
  {

    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "browse", element: <BrowsePage /> },
      {path:"search/", element:<SearchResultsPage/>},
      { path: "listing/:id", element: <DummyListingCardDetails/> },
      {  path: "roommate/:id",element: <RoommateProfileDetailsPage />,},
      {path:"/login",element:<LoginPage/>},
      {path:"Post-Ad-Form",element:<PostAdCategorySelectPage/>},
      {path:"DynamicForm/:category",element:<DynamicPostAdFormPage/>},
      { path: "roommate-pool", element: <RoommatePoolPage /> },
      {path:"roommate-category", element:<RoommateCategorySelectPage/>},
      {path:"privacy",element:<PrivacyPolicyPage/>}

    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
