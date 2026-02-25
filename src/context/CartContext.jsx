import { createContext, useContext, useState, useEffect, Children } from "react";

const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([]);
    const [loading, setLoading]=useState(true);


    const fetchCart = async ()=>{
        try{
            const res = await fetch('http://localhost:5000/api/cart',{
                credentials: 'include',
            });
            const data = await res.json();
            setCart(data.items || []);
        } catch (error){
            console.error('Error fetching cart:', error);
        } finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchCart();
    }, []);

    const addToCart = async (product, quantity) => {
    try {
      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product._id, quantity }),
        credentials: "include",
      });
      if (res.ok) {
        await fetchCart();
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
    const removeFromCart = async (productId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/cart/remove/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        await fetchCart();
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    setCart(prev => prev.map(item => 
        item.productId._id === productId ? { ...item, quantity: newQuantity } : item
     ));
  };
    
return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);