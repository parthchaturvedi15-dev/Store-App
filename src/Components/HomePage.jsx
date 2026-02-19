import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Header from "./Header";
import ThemeToggleBttn from "./ThemeButton";
import StorePage from "../store/features/Catalogue";
import Footer from "./Footer";
import ProfileMenu from "./Profilebutton";

function HomePage(){
    return(
        <>
        <div className="min-h-screen">
        <Header/>
        
        <StorePage/>
        <Footer/>
        </div>
        </>
    );
}
export default HomePage;