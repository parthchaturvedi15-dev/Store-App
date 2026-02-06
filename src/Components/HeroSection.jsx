"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const heroImages = [
    { title: "Glow Boosting", subtitle: "Radiant Skin From Within", image: "img1.avif" },
    { title: "Hairfall & Thinning", subtitle: "Root-to-Tip Care", image: "img2.avif" },
    { title: "Weight Management", subtitle: "Healthy Metabolism", image: "img3.avif" },
    { title: "Skin Firming", subtitle: "Anti-Aging Solutions", image: "img4.avif" },
    { title: "Protein Power", subtitle: "Muscle Recovery & Growth", image: "img5.avif" },
    { title: "Multivitamins", subtitle: "Daily Vitality", image: "img6.avif" },
    { title: "Ayurveda & Herbs", subtitle: "Ancient Traditions", image: "img7.avif" },
    { title: "Sleep Better", subtitle: "Restful Night Support", image: "img8.avif" },
    { title: "Lean Body Support", subtitle: "Fitness & Fat Loss", image: "img9.avif" },
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
              <div key={index} className="flex flex-col items-center shrink-0 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  width={24}
                  height={24}
                  loading="eager"
                  className="md:w-32 md:h-32 object-cover shrink-0 hover:scale-110 transition-transform duration-500 rounded-full border-2 border-white shadow-sm"
                />
                <div className="mt-3 text-center">
                  <p className="text-sm font-bold text-white leading-tight">{item.title}</p>
                  <p className="text-[10px] text-white mt-1">{item.subtitle}</p>
                </div>
              </div>
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