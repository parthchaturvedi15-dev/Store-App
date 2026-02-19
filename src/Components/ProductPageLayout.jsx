import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import LogoutButton from "../Components/Logoutbutton";
import { Outlet, useParams } from "react-router-dom";

export default function ProductFilterSideBar() {
  const { categoryName } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: "",
    min_price: "",
    price_bucket: "",
    category: "",
    brand: [],
    in_stock: false,
    sort: "",
    max_price: 2000000,
  });
  useEffect(() => {
    if (!categoryName) return;

    const fetchBrands = async () => {
      try {
        const res = await fetch(
  `http://localhost:5000/api/products/brands?category=${encodeURIComponent(categoryName.trim())}`,
  { cache: 'no-cache' }
);


        const data = await res.json();

        console.log("Brand API response:", data);

        setBrands(Array.isArray(data) ? data : []);

        setFilters((prev) => ({
          ...prev,
          brand: [],
        }));

      } catch (error) {
        console.error("Brand fetch error:", error);
        setBrands([]); 
      }
    };

    fetchBrands();
  }, [categoryName]);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      
      <button
        className="md:hidden fixed top-4 left-4 z-60 text-white bg-zinc-800 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      <aside
        className={`fixed md:static w-64 h-screen p-6 bg-zinc-900 border-r border-zinc-800 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50`}
      >
        <h2 className="text-white text-xl font-bold mb-6">Filters</h2>

        <div className="flex flex-col gap-6">

          <div>
            <label className="text-gray-400 text-xs uppercase font-bold">
              Search
            </label>
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full mt-1 p-2 rounded bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-cyan-500"
              value={filters.searchTerm}
              onChange={(e) =>
                setFilters({ ...filters, searchTerm: e.target.value })
              }
            />
          </div>

          <div>
            <div className="flex justify-between text-sm text-white mb-2">
              <span>Max Price</span>
              <span className="text-cyan-400 font-bold">
                ₹{filters.max_price.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="2000000"
              step="1000"
              className="w-full accent-cyan-500 cursor-pointer"
              value={filters.max_price}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  max_price: Number(e.target.value),
                })
              }
            />

            <select
              className="mt-2 bg-zinc-800 text-white p-2 rounded"
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  price_bucket: e.target.value,
                  min_price: "",
                  max_price: "",
                }))
              }
            >
              <option value="">All Prices</option>
              <option value="under_25000">Under ₹25,000</option>
              <option value="25000_50000">₹25,000 - ₹50,000</option>
              <option value="50000_100000">₹50,000 - ₹1,00,000</option>
              <option value="above_100000">Above ₹1,00,000</option>
            </select>
          </div>

          <div>
            <p className="text-gray-400 text-xs uppercase font-bold">
              Brand
            </p>

            {brands.length === 0 ? (
              <p className="text-gray-500 text-sm mt-2">
                No brands found
              </p>
            ) : (
              brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 text-white mt-2"
                >
                  <input
                    type="checkbox"
                    value={brand}
                    checked={filters.brand.includes(brand)}
                    onChange={(e) => {
                      const value = e.target.value;

                      setFilters((prev) => ({
                        ...prev,
                        brand: prev.brand.includes(value)
                          ? prev.brand.filter((b) => b !== value)
                          : [...prev.brand, value],
                      }));
                    }}
                  />
                  {brand}
                </label>
              ))
            )}
          </div>

          <div>
            <select
              className="bg-zinc-800 text-white rounded p-2"
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sort: e.target.value,
                }))
              }
            >
              <option value="">Price</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  in_stock: e.target.checked,
                }))
              }
            />
            <span>In Stock Only</span>
          </div>

          <div className="mt-auto">
            <LogoutButton />
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet context={{ filters, setFilters }} />
      </main>
    </div>
  );
}
