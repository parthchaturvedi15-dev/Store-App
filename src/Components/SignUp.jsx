import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function SignUp() {
  const [formData, setFormData]=useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profile_picture: "",
  });

  const formFields =[
    { label: "First Name", name: "fName", type: 'text'},
    {label: "LastName", name: "lName", type: 'text'},
    {label: 'email', name: 'email', type: 'email'},
    {label: 'passwprd', name: 'password', type: 'password'},
    {label: 'Re-enter Password', name: 'confirmPassword', type: 'password'},
  ];

  const handleChange =(e)=>{
    const {name, value}= e.target;
    setFormData(prevState=>({
      ...prevState, [name]: value
    }));
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Enter Password");
      return;
    }
    console.log("Form submitted:", formData);
    toast.success("Account created");
    
    setFormData({fName: "", lName: "", email: "", password: "", confirmPassword: "", profile_picture: "",});};

  return (
    <>
    <div className='min-h-screen text-center justify-center items-center text-2x1'>
      <form onSubmit={handleSubmit} className='bg-black p-8 rounded-xl shadow-lg w-full max-w-md space-y-4'>
        {formFields.map((field)=>(
          <div key={field.name} className='flex flex-col'>
            <label className='text-sm font-medium text-white mb-1'>
              {field.label}:
            </label>
            <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className='border border-gray-300 rounded-lg p-2 
            focus:ring-2 focus:ring-blue-500 outline-none 
            transition'
            required/>
          </div>
        ))}
        <button type="submit"
        className='w-full bg-blue-600 text-white py-2 
        rounder-lg font-semibold hover:bg-blue-700 transition'>
        Register
        </button>
      </form>
    </div>
    </>
  )
}
