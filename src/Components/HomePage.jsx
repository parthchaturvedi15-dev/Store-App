import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

function HomePage(){
    return(
        <>
        <div className="min-h-screen bg-">
        
        <section className="flex flex-col items-center justify-center px-6 py-5 text-center bg-white text-black">
        <div className=" text-2xl text-center justify-center my-10">
            <h1 className="text-2xl font-semibold py-1 tracking-tight mb-4">Welcome to AllThings-Store</h1>
            <p className="text-xl opacity-90 mb-8 max-w-lg">Already have an account?</p>
            <Link 
            to="/SignUp" 
            className="border border-white px-8 py-3 rounded-lg font-bold bg-blue-700 hover:bg-blue-900 hover:text-white transition">
            Signup
          </Link>
        </div>
        </section>
        </div>
        </>
    );
}
export default HomePage;