import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import StoreLayout from "../store/features/StoreLayout";
import Catalogue from "../store/features/Catalogue";
import Products from "../store/pages/Productpage";
import CategoryPage from "../store/pages/CategoryPage";
import AddProduct from "../store/pages/AddProduct";
import AdminDashboard from "../pages/AdminDashboard";
import Profile from "../pages/Profile";
import ProtectedRoute from "../Components/ProtectedRoute";
import ProductPageLayout from '../Components/ProductPageLayout';
import CustomerCount from "../Components/CustomerCount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: (
      <div className="p-10 text-white bg-black h-screen">
        Page Not Found
      </div>
    ),
  },

  { path: "/SignUp", element: <SignUp /> },
  { path: "/Login", element: <Login /> },

  {
  path: "/store",
  element: <StoreLayout />,
  children: [
    {
      index: true,
      element: <Catalogue />,
    },

    {
      element: <ProductPageLayout />,
      children: [
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "category/:categoryName",
          element: <CategoryPage />,
        },
      ],
    },
  ],
},

  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/customers',
    element: (
      <CustomerCount/>
    ),
  },

  {
    path: "/admin/add-product",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AddProduct />
      </ProtectedRoute>
    ),
  },

  {
    path: "/profile",
    element: (
      <ProtectedRoute allowedRoles={["customer", "admin"]}>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);

export default router;
