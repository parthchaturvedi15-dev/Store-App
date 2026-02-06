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
    { title: "B1G1 on Wellness Bestsellers", image: "product7.avif" },
    { title: "Free Mini on Orders Above ₹799", image: "product8.avif" },
    { title: "Supplements Starting @ ₹899", image: "product9.avif" },
    { title: "Price Drop: Best of K-Beauty", image: "product10.avif" },
    { title: "Gifts on Orders Above ₹2000", image: "product11.avif" },
    { title: "Detox & Diet: Up to 20% Off", image: "product12.avif" },
    { title: "New Launches: Early Access Deals", image: "product13.avif" },
    { title: "Flash Sale: Luxe Beauty Deals", image: "product14.avif" },
  ];

  const firstLineOffers = offers.slice(0, 6);
  const secondLineOffers = offers.slice(6);

  const renderOffers = (items) =>
    items.map((offer) => (
      <div
        key={offer.title}
        className="min-w-70 md:min-w-[320px] bg-black rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
      >
        <div className="h-40 md:h-44 overflow-hidden rounded-t-xl">
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-[15px] md:text-[16px] text-white mb-1">
            {offer.title}
          </h3>
          <p className="text-sm md:text-[14px] text-white">
            Across top  brands
          </p>
        </div>
      </div>
    ));

  return (
    <section className="w-full bg-[#000000] py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-[26px] font-semibold tracking-tight mb-8 text-center text-white">
          Limited Time Deals
        </h2>
        <div className="relative mb-8">
          <button
            onClick={() => scroll(scrollRef1, "left")}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full shadow-lg p-2 hover:scale-110 transition-transform"
          >
            <ChevronLeft size={22} />
          </button>
          <div
            ref={scrollRef1}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 scrollbar-hide"
          >
            {renderOffers(firstLineOffers)}
          </div>
          <button
            onClick={() => scroll(scrollRef1, "right")}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full shadow-lg p-2 hover:scale-110 transition-transform"
          >
            <ChevronRight size={22} />
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll(scrollRef2, "left")}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full shadow-lg p-2 hover:scale-110 transition-transform"
          >
            <ChevronLeft size={22} />
          </button>
          <div
            ref={scrollRef2}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 scrollbar-hide"
          >
            {renderOffers(secondLineOffers)}
          </div>
          <button
            onClick={() => scroll(scrollRef2, "right")}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full shadow-lg p-2 hover:scale-110 transition-transform"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
      <section className="mt-10">
      <div className="bg-fuchsia-800 text-white text-center mx-auto px-6 md:px-10 py-3 rounded-lg w-fit hover:scale-105 transition-transform cursor-pointer ">
        <h1 className="text-base md:text-lg font-medium tracking-wide">
          Shop All Wellness
        </h1>
      </div>
    </section>
    </section>
    
  );
}
