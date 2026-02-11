import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Header from "./Header";

function HomePage(){
    return(
        <>
        <Header/>
        <div className='flex items-center justify-center min-h-screen bg-linear-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-all duration-300'>
        <section className="max-w-md w-full text-center p-8 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
            <h1 className="text-4xl font-extrabold mb-4 text-blue-700 dark:text-blue-400">Welcome to AllThings-Store</h1>
            <Link 
            to="/SignUp" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-400 animate-pulse">
            Create an Account
          </Link>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">Already have an account?</p>
            <Link to='/Login' className="text-blue-600 hover:underline">Login</Link>
        </section>
        </div>
        </>
    );
}
export default HomePage;