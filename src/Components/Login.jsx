import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



export default function Login() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate =useNavigate();

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const storedData =localStorage.getItem("FormData:");

        if(!storedData){
            toast.error('No user Found. please sign up first');
            return;
        }
        const user =JSON.parse(storedData);

        if(email !== user.email){
            toast.error('Email is incorrect');
            return;
        }
        if(password !== user.password){
            toast.error('Password is incorrect');
            return;
        }
        toast.success('User logged');
        navigate('/Catalogue');
    };

  return (
  <>
  <div className='min-h-screen flex items-center justify-center bg-black text-white px-4 '>
    <section className='w-full max-w-md border border-gray-800 rounded-2xl p-8 shadow-2xl shadow-red-900/20 bg-zinc-950'>
        <div className="mb-8 text-center">
          <h1 className='text-3xl font-bold tracking-tight'>Welcome Back</h1>
          <p className="text-gray-400 mt-2">Please enter your details</p>
        </div>

    <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='flex flex-col gap-2'>
            <label className='text-sm font-md text-white'>Email</label>
            <input
            type='email'
            name='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='bg-black border border-b-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-blue-600 focus:border-transparent transition-all'/>
        </div>

        <div className='flex flex-col gap-2'>
            <label className="text-sm font-md text-white">Password</label>
            <input
            type='password'
            name='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='bg-black border border-b-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-blue-600 focus:border-transparent transition-all'/>
        </div>
        <button
        type='submit'
        className='w-full bg-blue-800 hover:bg-blue-600 ttext-white font-semibold py-3 rounded-lg mt-4 transition-colors duration-200 shadow-lg active:scale-[0.98]'
        >Sign In</button>
    </form>
    </section>
  </div>
  </>
  );
};
