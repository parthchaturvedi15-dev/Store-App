import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

function HomePage(){
    return(
        <>
        <div className="min-h-screen bg-black my-10 justify-center items-center px-4">
        
        <section className="flex flex-col items-center justify-center px-10 py-10 text-center text-white shadow-2xl shadow-blue-600 border border-blue-300 w-full max-w-5xl rounded-2xl backdrop-blur-sm">
        <div className=" text-2xl text-center justify-center my-5">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to AllThings-Store</h1>
            <p className="text-lg opacity-80 mb-10">Already have an account?</p>
            <Link 
            to="/SignUp" 
            className="border border-white px-6 py-2 rounded-full font-semibold bg-blue-700 hover:bg-blue-900 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:text-white tracking-tight">
            Create an Account
          </Link>
        </div>
        </section>
        </div>
        </>
    );
}
export default HomePage;