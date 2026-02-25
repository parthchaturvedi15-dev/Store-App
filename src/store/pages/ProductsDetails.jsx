'use client';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

export default function ProductDetail(){
    const {productId} =useParams();
    const [product, setProduct]=useState(null);
    const [loading, setLoading]=useState(true);
    const {addToCart}=useCart();

    window.scrollTo({top: 0, behavior: 'smooth'});

    useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${productId}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error loading product", error);
    } finally {
      setLoading(false);
    }
  };
  fetchProduct();
}, [productId]);

    if(loading) return <div className="p-10">Loading...</div>
    if(!product) return <div className="p-10">Product not found</div>;

    return (
    <div className="max-w-fit mx-auto p-4 md:p-8 bg-black font-sans text-white scroll-auto">
        <nav className="text-xs text-gray-400 mb-4 hover:underline cursor-pointer">
        {product.category} › {product.brand} › {product.name}
        </nav>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* product image */}
        <div className="lg:w-2/5 flex justify-center">
          <div className="border border-gray-100 p-4 rounded-md">
            <img
              src={`http://localhost:5000/${product.image}`}
              alt={product.name}
              className="max-h-70 w-auto object-contain"
            />
          </div>
        </div>

        {/* product description*/}
        <div className="lg:w-2/5 border-b lg:border-b-0 pb-6">
          <h1 className="text-2xl font-medium leading-tight mb-1">
            {product.brand} {product.name}
          </h1>

          <div className="py-4">
            <div className="flex items-baseline gap-1">
              <span className="text-sm self-start mt-1">₹</span>
              <span className="text-3xl font-medium">
                {Number(product.price).toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div className="py-4">
            <h1><span>Product Description</span></h1>
            <p><span><em>{product.description}</em></span></p>
          </div>
        </div>

        <div className="lg:w-1/5">
          <div className="border border-[#D5D9D9] rounded-lg p-4 space-y-4">
            <div>
              {product.stock > 0 ? (
                <p className="text-md text-gray-400">{product.stock} left</p>
              ) : (
                <p className="text-lg text-pink-300">Currently Unavailable</p>
              )}
            </div>
            <div className=" flex space-y-2 pt-2 mb-2 gap-4">
              <button onClick={()=>addToCart(product, quantity)} className="w-fit bg-blue-700 text-white py-2 px-8 rounded-full text-md font-normal shadow-sm transition">
                Add to Cart
              </button>
              <button className="w-fit bg-blue-700 text-white py-2 px-5 rounded-full text-md font-normal shadow-sm transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}