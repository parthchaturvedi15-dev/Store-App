import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import HeroSection from "../../Components/HeroSection";
import Footer from "../../Components/Footer";

export default function Products(){
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState('');

    async function fetchProduts() {
    try{
        const response = await fetch('http://localhost:5000/api/products');
 
        if(!response.ok){
            throw new Error('Product fetching failed');
        }

        const data = await response.json();
        setProducts(data);
    } catch(err){
        setError(err.message);
    }finally{
        setLoading(false);
    }
}
useEffect(()=>{
    fetchProduts();
}, []);
if(loading){
    return <p>Loading catalogue</p>;
}
return (
  <>
  <Banner/>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-black min-h-screen">
      {products.map((product) => (
        <div
          key={product._id}
          className="border border-gray-800 rounded-xl p-4 text-white bg-zinc-900"
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
      ))}
    </div>
    </>
  );
}