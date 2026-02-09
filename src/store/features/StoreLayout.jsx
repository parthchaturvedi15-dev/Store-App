import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer';

export default function StoreLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="grow">
        {/* This Outlet will swap between Catalogue (Store Front) and ProductPage */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}