import React from 'react'
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div>
      <section className='w-full relative'>
        <div className='text-white text-xs'>
            <div className='max-w-7xl mx-auto px-4 py-2 flex items-center gap-6'>
                <div className='overflow-hidden flex-1 marquee-mask'>
                    <div className='animate-marquee whitespace-nowrap flex gap-8'>
                        <span><em></em></span>
                        <span><em></em></span>
                        <span><em></em></span>
                        <span><em></em></span>
                    </div>
                    <div className='hidden md:flex items-centre gap-3 shrink-0'>
                        <button className='bg-black text-[#fc2779] px-3 py-1 rounded-full font-semibold text-xs hover:opacity-90 transition-transform transform hover:-translate-y-px'>
                            Get App
                        </button>
                        <button className='border border-white px-3 py-1 rounded-full font-semibold text-xs hover:bg-blue-700 hover:text-[#fc2779] transition-transform transform hover:-translate-y-1'>
                            Store Events
                        </button>
                    </div>
                </div>
            </div>
            <div className='relative p-4 bg-linear-to-4 from-blue-400 via-blue-300 to-orange-400 BannerImage-bg'>
              <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div className="text-center md:text-left p-4">
            <p className="text-sm font-semibold text-[#FC2779] mb-2 uppercase tracking-wide">
              Wellness Sale
            </p>
            <h1 className="text-[36px] md:text-[40px] lg:text-[44px] leading-tight font-semibold text-pink-400 mb-3">
              Up To <span className="text-[#FC2779]">40% Off</span>
              <br />
              On electronics
            </h1>
            <p className="text-white text-[20px] md:text-[24px] mb-6 max-w-md mx-auto md:mx-0">
              Get deals on Phones, laptops etc.
            </p>
            <Link to={'./Catalogue.jsx'} className="bg-[#FC2779] text-white px-7 py-3 rounded-md font-semibold shadow hover:shadow-lg hover:scale-[1.10] transition">
              Shop Now
            </Link>
          </div>
                </div>  
            </div>
            <svg className='absolute bottom-0 left-0 w-full h-20 md:h-28'
            viewBox='0 0 1440 180'
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'>
                <path
                fill='#0000ff'
                fillOpacity='0.9'
                d="M0,96C80,96,160,128,240,128C320,128,400,96,480,80C560,64,640,64,720,80C800,96,880,128,960,144C1040,160,1120,160,1200,144C1280,128,1360,96,1400,80L1440,64L1440,180L0,180Z"/>
                <path
    fill="#fd7daf"
    fillOpacity="0.5"
    d="M0,128C48,128,96,120,144,112C192,104,240,96,288,104C336,112,384,136,432,136C480,136,528,112,576,96C624,80,672,72,720,80C768,88,816,112,864,120C912,128,960,120,1008,112C1056,104,1104,96,1152,104C1200,112,1248,136,1296,136C1344,136,1392,112,1440,104L1440,180L0,180Z"
  />
  
  <path
    fill="#ffffff"
    fillOpacity="0.3"
    d="M0,144C30,144,60,136,90,128C120,120,150,112,180,120C210,128,240,152,270,152C300,152,330,128,360,120C390,112,420,120,450,128C480,136,510,144,540,136C570,128,600,104,630,96C660,88,690,96,720,104C750,112,780,128,810,136C840,144,870,144,900,136C930,128,960,112,990,104C1020,96,1050,96,1080,104C1110,112,1140,128,1170,136C1200,144,1230,144,1260,136C1290,128,1320,112,1350,104C1380,96,1410,96,1440,104L1440,180L0,180Z"
  />
            </svg>
        </div>
      </section>
    </div>
  );
}
