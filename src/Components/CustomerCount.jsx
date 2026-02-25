import React, { useEffect, useState } from "react";

export default function CustomerCountPage() {
  const [customerCount, setCustomerCount] = useState(0);
  const [customers, setCustomers]=useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/customers");
        if (!res.ok) throw new Error("Failed to fetch customer count");
        const data = await res.json();
        setCustomerCount(data.count);
        setCustomers(data.customers)
      } catch (err) {
        console.error(err);
      }
    };
    fetchCustomers();
  }, []);

  return (
  <>
    <section className="bg-white dark:bg-black py-4">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white">
        Customer Details
      </h1>
    </section>

    <div className="bg-white dark:bg-black min-h-screen p-10">
      <div className="max-w-6xl mx-auto bg-white dark:bg-black border rounded-sm shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-black dark:text-white">
            
            <thead className=" bg-white dark:bg-black text-black dark:text-white uppercase text-xs tracking-widest">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">First Name</th>
                <th className="px-6 py-4">Last Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Created At</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-white border">
              {customers.map((customer) => (
                <tr
                  key={customer._id}
                  className="hover:bg-white dark:hover:bg-black transition duration-300"
                >
                  <td className="px-6 py-4 font-medium">
                    {customer._id.slice(-6)}
                  </td>
                  <td className="px-6 py-8">{customer.firstName}</td>
                  <td className="px-6 py-8">{customer.lastName}</td>
                  <td className="px-6 py-8">{customer.email}</td>
                  <td className="px-6 py-8">
                    {new Date(customer.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);
}