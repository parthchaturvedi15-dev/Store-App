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
    <section className="py-12 sm:py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-center text-black dark:text-white">
          Shop by Category
        </h2>

        <div className="grid 
                        grid-cols-2 
                        sm:grid-cols-3 
                        md:grid-cols-4 
                        lg:grid-cols-5 
                        xl:grid-cols-6 
                        gap-6">

          {categories.map((cat) => (
            <div
              key={cat.title}
              to={`/store/category/${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white dark:bg-gray-700 
                         rounded-2xl p-5 
                         flex flex-col items-center justify-center text-center
                         shadow-sm hover:shadow-xl
                         hover:-translate-y-2 
                         transition-all duration-300"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                              rounded-full overflow-hidden 
                              border border-gray-200 dark:border-gray-500 
                              mb-4 
                              group-hover:scale-110 transition-transform duration-300">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm sm:text-base font-medium 
                            text-gray-900 dark:text-gray-200 
                            group-hover:text-[#FC2779] transition">
                {cat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
