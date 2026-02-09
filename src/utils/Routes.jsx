import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
// Note: Changed the import to use your StoreLayout
import StoreLayout from "../store/features/StoreLayout"; 
import Catalogue from "../store/features/Catalogue";
import Products from "../store/pages/Productpage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <div className="p-10 text-white bg-black h-screen">Page Not Found</div>,
    },
{ path: '/SignUp', element: <SignUp /> },
    { path: '/Login', element: <Login /> },

  // 3. The Actual Store (Post-Auth)
  // We wrap these in StoreLayout so the Footer stays visible
  {
        path: '/store',
        element: <StoreLayout />, // Your wrapper with the Footer
        children: [
            {
                index: true, // This loads at localhost:5173/store
                element: <Catalogue /> 
            },
            {
                path: 'products', // This loads at localhost:5173/store/products
                element: <Products />
            }
        ]
    }
]);

export default router;