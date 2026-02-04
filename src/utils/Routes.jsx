import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage";
import SignUp from "../Components/SignUp";


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
]);

export default router;