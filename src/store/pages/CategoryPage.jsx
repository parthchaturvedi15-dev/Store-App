import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductPageLayout from '../../Components/ProductPageLayout';
import { useOutletContext } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


const CategoryPage = ()=>{
    const {categoryName}=useParams();
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const {filters} =useOutletContext();
    const { addToCart } = useCart();

    useEffect(() => {
      window.scrollTo(0,0);
  const fetchCategoryProducts = async () => {
    setLoading(true);

    try {
      const mergedFilters = {
  ...filters,
  category: categoryName
};

const cleanFilters = Object.fromEntries(
  Object.entries(mergedFilters).filter(([_, value]) => {
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "number") return true;
    return value !== "" && value !== null && value !== false && value !== undefined;
  })
);

if (cleanFilters.brand) cleanFilters.brand = cleanFilters.brand.join(",");

const query = new URLSearchParams(cleanFilters).toString();


      console.log("Final Query:", query);

      const response = await fetch(
        `http://localhost:5000/api/products?${query}`
      );

      const data = await response.json();
      setProducts(data);

    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchCategoryProducts();
}, [categoryName, filters]);


    if(loading) return <div className='min-h-screen bg-black text-white p-10'>Loading {categoryName}</div>;

    return(
        <>
        <div className='min-h-screen bg-black text-white p-8 '>
            <h1 className='text-4xl font-bold capitalize mb-8 border-b border-gray-700 pb-4'>
                {categoryName}
            </h1>
            {products.length === 0? (
                <p className='text-gray-400'>No products found in this category.</p>
            ):(
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {products.map((product)=>(
                        <div key={product._id} className='bg-gray-900 rounded-2xl p-4 hover:shadow-cyan-500/20 shadow-lg transition'>
                       <img src={`http://localhost:5000/${product.image}`}
                       alt={product.name}
                       className='w-full h-48 object-cover rounded-xl mb-4'/>
                       <h2 className='text-xl font-semibold'>{product.name}</h2>
                       <div>{product.description.length>40?(
                        <p>{product.description.substring(0, 40)}...<span className="text-cyan-400 ml-2 cursor-pointer">Read More</span>
                        </p>
                       ):(
                        <p>{product.description}</p>
                       )}
                       </div>
                       <div className='flex justify-between items-center'>
                        <span className='text-cyan-400 font-bold text-lg'>{product.price}</span>
                        <button 
                                    onClick={() => addToCart(product, 1)}
                                    className='bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg text-sm transition font-bold'
                                >
                                    Add to Cart
                                </button>
                        </div>
                        </div>
                        ))}
                        </div>
            )}
        </div>
        </>
    );
};

export default CategoryPage;