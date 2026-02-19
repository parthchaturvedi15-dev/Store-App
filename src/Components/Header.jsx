import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LogoutButton from "./Logoutbutton";
import ThemeToggleBttn from "./ThemeButton";
import ProfileMenu from "./Profilebutton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    
    <header className="w-full top-0 z-50 bg-white dark:bg-black text-black dark:text-white shadow-md transition-colors duration-300 absolute">
        
      {/*top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">

        <div className='flex items-center gap-4'>

          {/*hamburger menu*/}
        <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

        </div>


        <div className="flex items-center gap-3  sm:gap-4">

          <div className="hidden md:flex gap-3">
            <button className="bg-black dark:bg-white text-[#fc2779] px-4 py-1.5 rounded-full font-semibold text-sm hover:opacity-90 transition">
              Get App
            </button>

            <button className="border border-current px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-[#fc2779] hover:text-white transition">
              Store Events
            </button>
          </div>

          <ProfileMenu />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white dark:bg-gray-800 px-6 py-4 flex flex-col gap-4 shadow-lg text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          {!user ? (
            <>
              <Link to="/SignUp" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
              <Link to="/Login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </>
          ) : (
            <div onClick={() => setMenuOpen(false)}>
              <LogoutButton />
            </div>
          )}
        </nav>
        </div>
    </header>
  );
};

export default Header;
