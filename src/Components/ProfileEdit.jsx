import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const formFields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
  { label: "Admin ID", name: "adminId", type: "text" },
];

export default function EditProfile(){
const navigate = useNavigate();
const [formData, setFormData]=useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    adminId: '',
    profile_picture: null
});
const [errors, setErrors] = useState({});

useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/auth/me', {
          credentials: 'include'
        });
        const data = await res.json();
        if (data && data.user) {
          setFormData({
            firstName: data.user.firstName || '',
            lastName: data.user.lastName || '',
            email: data.user.email || '',
            password: '',
            adminId: data.user.adminId || '',
            profile_picture: null
          });
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };
    fetchUser();
  }, []);

const handleChange = (e)=>{
    const {name, value, files}=e.target;
    setFormData((prev)=>({
        ...prev,[name]: name === 'profile_picture'? files[0]:value
    }));
};

const handleSubmit = async (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append('firstName', formData.firstName);
    form.append('lastName', formData.lastName);
    form.append('email', formData.email);
    form.append('adminId', formData.adminId);
    if(formData.password){
        form.append('password', formData.password);
    }
    if(formData.profile_picture){
        form.append('profile_picture', formData.profile_picture);
    }
    const res = await fetch('http://localhost:5000/api/auth/update-profile',
        {
            method: 'PUT',
            credentials: 'include',
            body: form
        }
    );
    if(res.ok){
        navigate('/profile');
    }
};

return(
<div className="min-h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-10 rounded-2xl shadow-2xl shadow-blue-600 border border-blue-300 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Edit your Profile
        </h2>

        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-300">
              {field.label}
            </label>

            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className={`w-full bg-black text-white border rounded-lg px-3 py-2 text-sm focus:outline-none transition-all duration-200
                ${
                  errors[field.name]
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
                }`}
            />
            {errors[field.name] && (
              <span className="text-red-400 text-xs">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-1">
          <label htmlFor="profile_picture" className="text-xs font-medium text-gray-300">
            Profile Picture
            </label>
            <input type="file" id="profile_picture" accept="image/*" onChange={(e) =>
            setFormData((prev) => ({...prev,profile_picture: e.target.files[0],}))}
            className="text-white text-sm"/>
            </div>
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 
            rounded-lg font-semibold hover:bg-blue-700 
            transition-all hover:scale-[1.02]">Save Changes
            </button>
            </form>
            </div>
            );
        }