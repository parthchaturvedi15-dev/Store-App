'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import LogoutButton from './Logoutbutton';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ProfileMenu({ openLoginModal, openSignupModal }) {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (loading) return <div className="w-8 h-8 rounded-full bg-gray-400 animate-pulse" />;

  const handleMouseEnter = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div 
      ref={menuRef}
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer" onClick={toggleMenu}>
        {user ? (
          <img 
          src={user.profileImage ? `/${user.profileImage.replaceAll("\\","/")}` : "/profileimage.jpg"} 
          className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Profile"/>
        ) : (
          <div className="border border-white px-3 py-1 rounded-full text-white font-semibold text-xs hover:bg-white hover:text-[#fc2779] transition">
            Login
          </div>
        )}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-5 w-48 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800">
          {user ? (
            <>
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-md font-bold truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
              <Link to='/profile' className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100">My Profile</Link>
              <Link to='profile/Orders' className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100">Orders</Link>
             <div className="w-fit px-2 mx-4 my-2 py-2 text-sm bg-red-500 cursor-pointer rounded-2xl">
              <LogoutButton />
              </div>
            </>
          ) : (
            <div className="p-3 flex flex-col gap-2">
              <p className="text-xs font-bold text-gray-400 uppercase">Welcome</p>
              <button 
                onClick={() => { navigate("/Login"); setIsOpen(false); }}
                className="w-full bg-[#fc2779] text-white py-2 rounded-md text-sm font-bold"
              >
                Login
              </button>
              <button 
                onClick={() => { navigate("/SignUp"); setIsOpen(false); }}
                className="w-full border border-gray-200 py-2 rounded-md text-sm font-semibold hover:bg-gray-50"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}