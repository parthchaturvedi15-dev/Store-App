import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import { useOutletContext } from "react-router-dom";

export default function Products() {
  const {filters}=useOutletContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_,value])=>value !== '' && value !== null
        )
      );
      const query = new URLSearchParams(cleanFilters).toString();
      console.log("Final API URL:", `http://localhost:5000/api/products?${query}`);

      const response = await fetch(
        `http://localhost:5000/api/products${query ? `?${query}` : ""}`
      );

      if (!response.ok) {
        throw new Error("Product fetching failed");
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  console.log('Filters:', filters);

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  if (loading) {
    return (
      <>
        <Banner />
        <div className="flex justify-center items-center min-h-screen bg-black text-white">
          <p className="text-xl">Loading catalogue...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Banner />
        <div className="flex justify-center items-center min-h-screen bg-black text-red-500">
          <p className="text-xl">{error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Banner />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-black min-h-screen">
        {products.length === 0 ? (
          <p className="text-white col-span-full text-center text-xl">
            No products found
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-800 rounded-xl p-4 text-white bg-zinc-900 hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-lg mb-3"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-400">{product.brand}</p>
              <p className="text-lg font-bold mt-2">₹{product.price}</p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}
