"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Login({ closeModal }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const result = await login(email, password);

        if (result.success) {
            toast.success('Login successful');
            if (closeModal) closeModal();

            if (result.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/profile');
                console.log("Logged in user:", result.user);
            }

        } else {
            throw new Error(result.error || 'Login failed');
        }

    } catch (error) {
        toast.error(error.message);
    }
};


    return (
        <div className='flex items-center justify-center text-white px-4'>
            <section className='w-full max-w-md border border-gray-800 rounded-2xl p-8 shadow-2xl bg-zinc-950'>
                <div className="mb-8 text-center">
                    <h1 className='text-3xl font-bold tracking-tight'>Welcome Back</h1>
                    <p className="text-gray-400 mt-2">Please enter your details</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-medium text-white'>Email</label>
                        <input
                            type='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-black border border-gray-800 border-b-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className="text-sm font-medium text-white">Password</label>
                        <input
                            type='password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-black border border-gray-800 border-b-blue-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all'
                        />
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-blue-800 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg mt-4 transition-colors duration-200 shadow-lg active:scale-[0.98]'
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-6">
                    Don't have an account? 
                    <span className="text-blue-500 cursor-pointer ml-1 hover:underline">Sign up</span>
                </p>
            </section>
        </div>
    );
}