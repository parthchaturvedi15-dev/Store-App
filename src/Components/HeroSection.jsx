"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

export default function HeroSection() {
  const heroImages = [
    { title: "Smartphones", subtitle: "Latest Flagships", image: "phones.avif" },
    { title: "Laptops", subtitle: "Power & Performance", image: "laptops.avif" },
    { title: "Smartwatches", subtitle: "Stay Connected", image: "watches.avif" },
    { title: "Audio", subtitle: "Immersive Sound", image: "audio.avif" }, // Simplified title for URL
    { title: "Gaming", subtitle: "Level Up Your Play", image: "gaming.avif" },
    { title: "Tablets", subtitle: "Creativity on the Go", image: "tablets.avif" },
    { title: "Cameras", subtitle: "Capture Every Moment", image: "cameras.avif" },
    { title: "Accessories", subtitle: "Essential Tech Gear", image: "accessories.avif" },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section className="py-10 bg-black">
      <div className="max-w-7xl mx-auto px-10">
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black text-white rounded-full p-2 shadow hover:scale-110 transition"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth py-6 pl-12 pr-12 scrollbar-hide"
          >
            {heroImages.map((item, index) => (
              <Link 
                key={index} 
                to={`/store/category/${item.title.toLowerCase()}`} 
                className="flex flex-col items-center shrink-0 cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="eager"
                  className="md:w-32 md:h-32 w-24 h-24 object-cover shrink-0 group-hover:scale-110 transition-transform duration-500 rounded-full border-2 border-white shadow-sm"
                />
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-white leading-tight">{item.title}</p>
                  <p className="text-[10px] text-white mt-1">{item.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800 text-white rounded-full p-2 shadow hover:scale-110 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}