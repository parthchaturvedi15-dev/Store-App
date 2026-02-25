'use client';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

  

export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Categories didn’t load', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 text-black dark:text-white">
          Exclusive Brand Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              to={`/store/product/${cat._id}`}
              className="group relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {cat.discount && (
                <div className="absolute top-2 left-2 z-10 bg-[#FC2779] text-white text-[10px] font-bold px-2 py-1 rounded">
                  {cat.discount}% OFF
                </div>
              )}

              {/* Product Image Container */}
              <div className="aspect-4/3 w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <img
                  src={`http://localhost:5000/${cat.image}`}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-[#FC2779] transition-colors">
                  {cat.title}
                </h3>
                
                <div className="mt-3">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-black dark:text-white">
                      ₹{cat.price ? Number(cat.price).toLocaleString('en-IN') : "N/A"}
                    </span>
                    {cat.oldPrice && (
                       <span className="text-xs text-gray-400 line-through">
                         ₹{Number(cat.oldPrice).toLocaleString('en-IN')}
                       </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}