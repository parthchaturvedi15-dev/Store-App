"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OffersSection() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scroll = (containerRef, direction) => {
  const container = containerRef.current;
  if (!container) return;

  container.scrollBy({
    left: direction === "left" ? -360 : 360,
    behavior: "smooth",
  });
};


  const offers = [
    { title: "Up to 40% Off", image: "product1.avif" },
    { title: "Buy 1 Get 1", image: "product2.avif" },
    { title: "Extra 10% Cashback", image: "product3.avif" },
    { title: "Flat ₹500 Off", image: "product4.avif" },
    { title: "Free Gifts on Orders", image: "product5.avif" },
    { title: "Combo Deals", image: "product6.avif" },
    { title: "Gifts on Orders Above ₹2000", image: "product7.avif" },
    { title: "New Launches: Early Access Deals", image: "product8.avif" },
  ];

  const firstLineOffers = offers.slice(0, 6);
  const secondLineOffers = offers.slice(6);

  const renderOffers = (items) =>
    items.map((offer) => (
      <div
        key={offer.title}
        className="shrink-0 w-260px sm:w-280px md:w-[320px] bg-black rounded-xl shadow-md 
          hover:shadow-xl transition hover:-translate-y-1snap-start">
        <div className="h-36 sm:h-40 md:h-44 overflow-hidden rounded-t-xl">
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-4 md:p-6">
          <h3 className="font-semibold text-sm md:text-base text-white mb-1">
            {offer.title}
          </h3>
        </div>
      </div>
    ));

  return (
    <section className="w-full bg-[#000000] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-center text-white">
          Limited Time Deals
        </h2>
        {/* first row*/}
        <div className="relative mb-8">
          {/* left arrow only for desktop*/}
          <button
            onClick={() => scroll(scrollRef1, "left")}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 
                       bg-black/80 backdrop-blur-md text-white 
                       rounded-full p-2 shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef1}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth 
                       scrollbar-hide snap-x snap-mandatory"
          >
            {renderOffers(firstLineOffers)}
          </div>
          {/* right arrow*/}
          <button
            onClick={() => scroll(scrollRef1, "right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 
                       bg-black/80 backdrop-blur-md text-white 
                       rounded-full p-2 shadow-lg hover:scale-110 transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/*second */}
        <div className="relative">
          <button
            onClick={() => scroll(scrollRef2, "left")}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth 
                       scrollbar-hide snap-x snap-mandatory"
          >
            <ChevronLeft size={22} />
          </button>


          <div
            ref={scrollRef2}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth 
                       scrollbar-hide snap-x snap-mandatory"
          >
            {renderOffers(secondLineOffers)}
          </div>

          <button
            onClick={() => scroll(scrollRef2, "right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 
                       bg-black/80 backdrop-blur-md text-white 
                       rounded-full p-2 shadow-lg hover:scale-110 transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>
        
      </div>
    </section>
  );
}
