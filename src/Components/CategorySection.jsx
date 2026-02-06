const categories = [
  { title: "Daily Vitamins", image: "/pr1.avif" },
  { title: "Protein & Nutrition", image: "/pr2.avif" },
  { title: "Ayurveda & Herbs", image: "/pr3.avif" },
  { title: "Immunity Boosters", image: "/pr4.avif" },
  { title: "Personal Care", image: "/pr5.avif" },
  { title: "Weight Management", image: "/pr6.avif" },
  { title: "Natural Wellness", image: "/pr7.avif" },
  { title: "Fitness Essentials", image: "/pr8.avif" },
  { title: "Women's Care", image: "/pr9.avif" },
  { title: "Health Supplements", image: "/pr10.avif" },
  { title: "Hair & Skin Supplements", image: "/pr11.avif" },
  { title: "Specialty Diets", image: "/pr12.avif" },
  { title: "Aromatherapy & Oils", image: "/pr13.avif" },
  { title: "Nutritional Gummies", image: "/pr14.avif" },
  { title: "K-Beauty Wellness", image: "/pr15.avif" },
  { title: "Detox & Cleanse", image: "/pr16.avif" },
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
