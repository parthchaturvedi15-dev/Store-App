import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoutButton from "../Components/Logoutbutton";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black flex text-white">
      <div className="md:hidden fixed top-0 left-0 right-0 
                      bg-gray-900 border-b border-gray-800
                      flex items-center justify-start
                      px-4 py-3 shadow z-40 gap-4">
        <button onClick={() => setIsOpen(true)} className="text-white">
          <FaBars size={20} />
        </button>
        <h1 className="font-semibold text-lg text-white">Admin Panel</h1>
      </div>
      <aside
        className={`
          fixed md:static top-0 left-0
          h-full md:h-screen w-64
          bg-gray-900 text-white
          p-6 flex flex-col
          transition-transform duration-300
          z-50 border-r border-gray-800
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex flex-col grow">
          <div className="flex justify-start items-center md:hidden mb-10 gap-4">
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FaTimes size={20} />
            </button>
            <h1 className="text-lg font-semibold">Admin Panel</h1>
          </div>

          <h1 className="text-xl font-bold mb-8 hidden md:block text-blue-500">
            Admin Panel
          </h1>

          <nav className="flex flex-col gap-2">
            <Link
              to="/admin/add-product"
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
            >
              Add Products
            </Link>
            <Link 
              to='/admin/customers'
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
            >
              Customers
            </Link>
            <Link 
              to='/'
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
            >
              View Shop
            </Link>
          </nav>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-800">
          <LogoutButton />
        </div>
      </aside>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <main
        className="flex-1 min-h-screen p-4 sm:p-8 mt-14 md:mt-0 overflow-y-auto bg-black"
      >
        {children}
      </main>
    </div>
  );
}