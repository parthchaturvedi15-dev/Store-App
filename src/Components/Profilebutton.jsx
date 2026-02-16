'use client';
import React, { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import LogoutButton from './Logoutbutton';

export default function ProfileMenu({ openLoginModal, openSignupModal }) {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const {logout = LogoutButton}=useAuth();
  const timeoutRef = useRef(null);
  console.log('Auth State', {user, loading});

  if (loading) return <div className="w-8 h-8 rounded-full bg-gray-400 animate-pulse" />;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
    console.log
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 1000);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      <div className="cursor-pointer" onClick={()=>setIsOpen(prev => !prev)}>
        {user ? (
          <img 
            src={user.profileImage || "/profileimage.jpg"} 
            className="w-8 h-8 rounded-full border-2 border-white object-cover" 
            alt="Profile" 
          />
        ) : (
          <div className="border border-white px-3 py-1 rounded-full text-white font-semibold text-xs hover:bg-white hover:text-[#fc2779] transition">
            login In
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800">
          {user ? (
            <>
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-bold truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">My Profile</button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Orders</button>
              <LogoutButton />
            </>
          ) : (
            <div className="p-3 flex flex-col gap-2">
              <p className="text-xs font-bold text-gray-400 uppercase">Welcome</p>
              <button 
                onClick={openLoginModal}
                className="w-full bg-[#fc2779] text-white py-2 rounded-md text-sm font-bold"
              >
                Login
              </button>
              <button 
                onClick={openSignupModal}
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