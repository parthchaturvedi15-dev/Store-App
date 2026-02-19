import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';


const bannerImages = [
  '/BannerImage.avif',
  '/Banner2.avif',
  '/Banner3.avif'
];

export default function Banner() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <section className='w-full relative overflow-hidden'>
        
        <div className='absolute top-0 w-full z-30 bg-black/20 text-white text-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='overflow-hidden flex-1 marquee-mask'>
              <div className='animate-marquee whitespace-nowrap flex gap-6 py-1'>
                <span><em>Extra 10% Off on App Orders • Limited Time Sale</em></span>
                <span><em>Free Shipping Above ₹299 • Shop Top Brands</em></span>
                <span><em>The Future is Here • Shop Next-Gen Devices & Accessories</em></span>
                <span><em>Upgrade Your Gear • Latest Tech at Unbeatable Prices</em></span>
                <span><em>No-Cost EMI Available • Get Your Tech Today</em></span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] flex items-center overflow-hidden">
          
          <div className="absolute inset-0 z-0">
            {bannerImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
                  index === currentImgIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url('${img}')` }}
              >
                {/* Fixed Overlay: Ensures text readability across all images */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full text-white">
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-[#FC2779] uppercase tracking-wide mb-2">
                Biggest Sale
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Up To <span className="text-[#FC2779]">40% Off</span>
                <br />
                On Electronics
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 max-w-md">
                Get deals on Phones, Laptops & Accessories. High-performance gear at unbeatable prices.
              </p>
              
              <Link
                to="/store/products"
                className="inline-block bg-[#FC2779] text-white px-8 py-3 rounded-md font-semibold shadow-lg 
                hover:bg-[#d62066] hover:scale-105 transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>  
        </div>

        <svg className='absolute bottom-0 left-0 w-full h-20 md:h-28 z-20 pointer-events-none'
          viewBox='0 0 1440 180'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='#00D0FF'
            fillOpacity='0.9'
            d="M0,96C80,96,160,128,240,128C320,128,400,96,480,80C560,64,640,64,720,80C800,96,880,128,960,144C1040,160,1120,160,1200,144C1280,128,1360,96,1400,80L1440,64L1440,180L0,180Z"/>
          <path
            fill="#fd7daf"
            fillOpacity="0.5"
            d="M0,128C48,128,96,120,144,112C192,104,240,96,288,104C336,112,384,136,432,136C480,136,528,112,576,96C624,80,672,72,720,80C768,88,816,112,864,120C912,128,960,120,1008,112C1056,104,1104,96,1152,104C1200,112,1248,136,1296,136C1344,136,1392,112,1440,104L1440,180L0,180Z"
          />
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,144C30,144,60,136,90,128C120,120,150,112,180,120C210,128,240,152,270,152C300,152,330,128,360,120C390,112,420,120,450,128C480,136,510,144,540,136C570,128,600,104,630,96C660,88,690,96,720,104C750,112,780,128,810,136C840,144,870,144,900,136C930,128,960,112,990,104C1020,96,1050,96,1080,104C1110,112,1140,128,1170,136C1200,144,1230,144,1260,136C1290,128,1320,112,1350,104C1380,96,1410,96,1440,104L1440,180L0,180Z"
          />
        </svg>
      </section>
      
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-2xl">
            <button 
              onClick={() => setShowLogin(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-black z-10 text-xl"
            >✕</button>
            <Login />
          </div>
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg shadow-2xl">
            <button 
              onClick={() => setShowSignup(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-black z-10 text-xl"
            >✕</button>
            <SignUp />
          </div>
        </div>
      )}
    </div>
  );
}