import React, { useEffect, useState } from "react";

export default function CustomerCountPage() {
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    const fetchCustomerCount = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/customers/count");
        if (!res.ok) throw new Error("Failed to fetch customer count");
        const data = await res.json();
        setCustomerCount(data.count);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCustomerCount();
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Customer Accounts</h1>
      <p className="text-lg">
        Total registered customers: <span className="font-bold">{customerCount}</span>
        <section>
            <div>
            </div>
        </section>
      </p>
    </div>
  );
}
