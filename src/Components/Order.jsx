'use client';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useCart} from '../context/CartContext';

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, removeFromCart, loading: loadingCart } = useCart();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((total, item) => 
    total + (item.productId?.price || 0) * item.quantity, 0
  );

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/orders/my-orders`);
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Error loading orders", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div className="max-w-5xl mx-auto p-6 font-medium">Loading your orders...</div>;

  return (
    <div className="max-w-5xl min-h-screen mx-auto p-4 md:p-8 text-white bg-black">
      
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Cart</h1>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {cartItemCount} Items
          </span>
        </div>

        {cart.length === 0 ? (
          <div className="p-8 border border-neutral-800 rounded-2xl bg-neutral-900/50 text-center">
            <p className="text-gray-500">Your Cart is empty.</p>
          </div>
        ) : (
          <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-900/30">
            {cart.map((item) => (
              <div key={item._id} className="flex gap-4 p-4 border-b border-neutral-800 last:border-0 items-center">
                <img 
                  src={`http://localhost:5000/${item.productId?.image}`} 
                  alt={item.productId?.name}
                  className="w-16 h-16 object-contain rounded bg-white p-1"
                />
                <div className="text-right">
                  <p className="text-sm font-bold text-white">₹{(item.productId?.price * item.quantity).toLocaleString("en-IN")}</p>
                  <button 
                    onClick={() => removeFromCart(item.productId?._id)}
                    className="text-xs text-red-500 hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <hr className="border-neutral-800 mb-12" />
      <section>

        {orders.length === 0 ? (
          <div className="border border-dashed border-neutral-700 rounded-2xl p-16 text-center">
            <p className="text-xl text-gray-500 mb-6">Past Orders.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="border border-neutral-800 rounded-xl overflow-hidden">
                <div className="p-4">
                  {order.items.map((item) => (
                    <div key={item._id} className="flex gap-4 py-3 border-t first:border-t-0 border-neutral-800 items-center">
                      <img 
                        src={`http://localhost:5000/${item.product?.image}`} 
                        alt={item.product?.name} 
                        className="w-12 h-12 object-contain bg-white rounded p-1"
                      />
                      <div className="flex-1">
                        <p className="text-xs font-medium">{item.product?.name}</p>
                        <p className="text-[10px] text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}