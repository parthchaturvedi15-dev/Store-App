"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Login({ closeModal }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer');

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
                }

            } else {
                throw new Error(result.error || 'Login failed');
            }

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
        <div className='border-2 border-gray-500 w-full min-h-screen sm:min-h-0
    sm:max-w-3xl px-6 sm:px-20 py-10 sm:py-20 mx-auto 
    sm:my-20 rounded-none sm:rounded-2xl shadow-xl shadow-blue-700 bg-black'>
            <div className='flex gap-4 justify-center mb-4 '>
                <button
                    type='button'
                    onClick={() => setRole('customer')}
                    className={`px-4 py-2 rounded ${role === 'customer' ? "bg-blue-700" : "bg-gray-800"}`}
                >
                    Customer
                </button>

                <button
                    type='button'
                    onClick={() => setRole('admin')}
                    className={`px-4 py-2 rounded ${role === "admin" ? "bg-blue-700" : "bg-gray-800"}`}
                >
                    Admin
                </button>
            </div>

            <div className='flex items-center justify-center text-white px-4'>
                <section className='w-full max-w-md rounded-2xl p-8 shadow-2xl bg-zinc-950'>
                    <div className="mb-8 text-center">
                        <h1 className='text-3xl font-bold tracking-tight'>Welcome Back</h1>
                        <p className="text-gray-400 mt-2">Please enter your details</p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-6'>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-white">
                                {role === "admin" ? "Admin Email" : "Email"}
                            </label>

                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-black border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className="text-sm font-medium text-white">Password</label>
                            <input
                                type='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-black border border-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600'
                            />
                        </div>

                        <button
                            type='submit'
                            className='w-full bg-blue-800 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg mt-4'
                        >
                            Login
                        </button>
                    </form>
                </section>
            </div>
            </div>
        </>
    );
}
