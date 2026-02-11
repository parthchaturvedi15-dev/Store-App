import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import StoreLayout from "../store/features/StoreLayout"; 
import Catalogue from "../store/features/Catalogue";
import Products from "../store/pages/Productpage";
import CategoryPage from '../store/pages/CategoryPage';
import AddProduct from "../store/pages/AddProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <div className="p-10 text-white bg-black h-screen">Page Not Found</div>,
    },
    { path: '/SignUp', element: <SignUp /> },
    { path: '/Login', element: <Login /> },
    {
                path: '/admin/add-product',
                element: <AddProduct/>
            },
    {
        path: '/store',
        element: <StoreLayout />,
        children: [
            {
                index: true,
                element: <Catalogue /> 
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'category/:categoryName',
                element: <CategoryPage/>
            },
            
        ]
    }
]);

export default router;