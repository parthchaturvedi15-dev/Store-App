const categories = [
  { title: "Smartphones", image: "/cat-phones.avif" },
  { title: "Laptops", image: "/cat-laptops.avif" },
  { title: "Smart Watches", image: "/cat-watches.avif" },
  { title: "Gaming Consoles", image: "/cat-gaming.avif" },
  { title: "PC Components", image: "/cat-cpu.avif" },
  { title: "Smart Home", image: "/cat-home.avif" },
  { title: "Cameras & Gear", image: "/cat-cameras.avif" },
  { title: "Tablets", image: "/cat-tablets.avif" },
  { title: "Storage Devices", image: "/cat-ssd.avif" },
  { title: "Monitors", image: "/cat-monitors.avif" },
  { title: "Accessories", image: "/cat-cables.avif" },
];

export default function CategorySection() {
  return (
    <section className="bg-black py-14 md:py-1">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight mb-12 text-center text-white">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-black rounded-xl h-44 flex flex-col items-center justify-center text-center p-4 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
            >
              <div className="h-30 w-30 rounded-full overflow-hidden mb-3 border-2 border-white group-hover:scale-105 transition-transform duration-300">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-medium text-white text-sm md:text-base leading-tight group-hover:underline">
                {cat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
