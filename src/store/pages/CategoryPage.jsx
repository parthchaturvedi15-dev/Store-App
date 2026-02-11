import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const CategoryPage = ()=>{
    const {categoryName}=useParams();
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const fetchCategoryProducts = async ()=>{
            setLoading(true);
            try{
                const response = await fetch(`http://localhost:5000/api/products?category=${categoryName}`);
                const data = await response.json();
                setProducts(data);
            } catch (error){
                console.error('Error fetching products:',error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategoryProducts();
    }, [categoryName]);
    if(loading) return <div className='min-h-screen bg-black text-white p-10'>Loading {categoryName}</div>;

    return(
        <div className='min-h-screen bg-black text-white p-8'>
            <h1 className='text-4xl font-bold capitalize mb-8 border-b border-gray-700 pb-4'>
                {categoryName}
            </h1>
            {products.length === 0? (
                <p className='text-gray-400'>No products found in this category.</p>
            ):(
                <div className='flex flex-col-1 sm:flex-col-2 lg:flex-col-4 gap-8'>
                    {products.map((product)=>(
                        <div key={product._id} className='bg-gray-900 rounded-2xl p-4 hover:shadow-cyan-500/20 shadow-lg transition'>
                       <img src={product.image}
                       alt={product.name}
                       className='w-full h-48 object-cover rounded-xl mb-4'/>
                       <h2 className='text-xl font-semibold'>{product.name}</h2>
                       <p className='text-gray-400 text-sm mb-4'>{product.description}</p>
                       <div className='flex justify-between items-center'>
                        <span className='text-cyan-400 font-bold text-lg'>{product.price}</span>
                        <button className='bg-cyan-600 hover:g-cyan-500 px-4 py-2 rounded-lg text-sm transition'>Add to Cart
                        </button>
                        </div>
                        </div>
                        ))}
                        </div>
            )}
        </div>
    );
};

export default CategoryPage;