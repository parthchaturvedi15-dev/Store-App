import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import Catalogue from "../store/features/Catalogue";


const router =createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: "not Found",
    },
    {
        path: '/SignUp',
        element: <SignUp/>,
    },
    {
        path: '/Login',
        element: <Login/>
    },
    {
        path: '/Catalogue',
        element: <Catalogue/>
    }
]);

export default router;