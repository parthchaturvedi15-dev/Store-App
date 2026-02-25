"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const heroImages = [
    { title: "phone", subtitle: "Latest Flagships", image: "phones.avif" },
    { title: "laptop", subtitle: "Power & Performance", image: "laptops.avif" },
    { title: "Smartwatches", subtitle: "Stay Connected", image: "watches.avif" },
    { title: "Audio", subtitle: "Immersive Sound", image: "audio.avif" },
    { title: "Gaming", subtitle: "Level Up Your Play", image: "gaming.avif" },
    { title: "Tablets", subtitle: "Creativity on the Go", image: "tablets.avif" },
    { title: "Cameras", subtitle: "Capture Every Moment", image: "cameras.avif" },
    { title: "Accessories", subtitle: "Essential Tech Gear", image: "accessories.avif" },
    { title: "Smart Home", subtitle: "Automate Your Living", image: "smarthome.avif" },
    { title: "Storage", subtitle: "Keep Your Data Safe", image: "storage.avif" },
    { title: "Monitors", subtitle: "Crystal Clear Displays", image: "monitors.avif" },
    { title: "Printers", subtitle: "Efficient Office Solutions", image: "printers.avif" },
    { title: "Networking", subtitle: "Seamless Connectivity", image: "networking.avif"},
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
  if (!scrollRef.current) return;
  scrollRef.current.scrollBy({
    left: direction === "left"
      ? -scrollRef.current.clientWidth
      : scrollRef.current.clientWidth,
    behavior: "smooth"
  });
};

  return (
    <section className="py-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-15 relative overflow-hidden">

          <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 
                     bg-black/80 dark:bg-white/80 backdrop-blur-md 
                     text-white dark:text-black 
                     rounded-full p-2 shadow-lg 
                     hover:scale-110 transition"
        >
          <ChevronLeft size={18} />
        </button>


          <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-3 overflow-x-auto scroll-smooth py-6 
                     scrollbar-hide snap-x snap-mandatory"
        >
          {heroImages.map((item, index) => (
            <Link
              key={index}
              to={`/store/category/${item.title.toLowerCase()}`}
              className="flex flex-col items-center shrink-0 
              w-1/5 sm:w-1/4 lg:w-1/5
              snap-start group transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-22 h-22 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 
                           object-cover rounded-full 
                           border-2 border-gray-300 dark:border-white 
                           shadow-md
                           group-hover:scale-110 transition-transform duration-500"
              />
                <div className="mt-3 text-center">
                <p className="text-xs sm:text-sm font-semibold 
                              text-black dark:text-white">
                  {item.title}
                </p>
                <p className="text-[10px] sm:text-xs 
                              text-gray-600 dark:text-gray-400 mt-1">
                  {item.subtitle}
                </p>
              </div>
            </Link>
            ))}
      <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 
                     bg-black/80 dark:bg-white/80 backdrop-blur-md 
                     text-white dark:text-black 
                     rounded-full p-2 shadow-lg 
                     hover:scale-110 transition"
        >
          <ChevronRight size={18} />
        </button>
        </div>
      </div>
    </section>
  );
}