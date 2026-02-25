'use client';
import { useAuth } from "../context/AuthContext";
import LogoutButton from '../Components/Logoutbutton';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate =useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/me',
          {
            credentials: 'include'
          }
        );
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setProfile(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-32 h-32 bg-neutral-800 rounded-full"></div>
          <div className="h-4 w-48 bg-neutral-800 rounded"></div>
        </div>
      </div>
    );
  }
  const profileImg = profile.profile_picture? `http://localhost:5000/${profile.profile_picture.replaceAll("\\", "/")}` 
    : "/profileimage.jpg";

  return (
    <div className="min-h-screen bg-black py-12 px-4 selection:bg-blue-500">
      <div className="max-w-4xl mx-auto bg-black border border-blue-900 rounded-4xl shadow-lg overflow-hidden shadow-blue-600">

        <div className="h-30 bg-gray-700 "/>
        <div className="px-8 pb-8">
          <div className="relative flex flex-col md:flex-row md:items-end -mt-16 gap-6 mb-8">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-40 h-40 rounded-2xl object-cover border-4 border-black shadow-lg"
              onError={(e) => e.target.src = "/profileimage.jpg"}
            />
            <div className="pb-2">
              <h1 className="text-3xl font-bold text-white">{profile.firstName} {profile.lastName}</h1>
              <p className="text-blue-400 font-light">Account Role: {profile.role}</p>
            </div>
          </div>
          

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 dark:bg-neutral-800 p-5 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400">User ID</p>
            <p className="font-medium text-gray-800 dark:text-white">{profile._id}</p>
          </div>

          <div className="bg-gray-50 dark:bg-neutral-800 p-5 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400">User ID</p>
            <p className="font-medium text-gray-800 dark:text-white">{profile.email}</p>
          </div>

          <div className="bg-gray-50 dark:bg-neutral-800 p-5 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400">First Name</p>
            <p className="font-medium text-gray-800 dark:text-white">{profile.firstName}</p>
          </div>

          <div className="bg-gray-50 dark:bg-neutral-800 p-5 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400">Last Name</p>
            <p className="font-medium text-gray-800 dark:text-white">{profile.lastName}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-neutral-700 pt-6 flex justify-end">
          <button onClick={()=>navigate('/profile/ProfileEdit')} className="bg-blue-800 text-white py-2 px-2 mx-5 rounded-3xl">
          Edit Profile
        </button>
          <LogoutButton />
        </div>
      </div>
    </div>
    </div>
  );
}