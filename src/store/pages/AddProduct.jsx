import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e)=>{
    setFormData({...formData, image: e.target.files[0]});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = new FormData();
  form.append("name", formData.name);
  form.append("category", formData.category);
  form.append("brand", formData.brand);
  form.append("price", formData.price);
  form.append("description", formData.description);
  form.append("stock", formData.stock);
  form.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        body: form,
      });
      console.log('Form image:', formData.image);
      if (response.ok) {
        alert("Product added successfully!");
        setFormData({
          name: "",
          category: "",
          brand: "",
          price: "",
          description: "",
          stock: "",
          image: "",
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="w-full py-4 sm:py-6 bg-black h-full">
      <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-700 shadow-blue-900/20">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-400">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody className="text-left">
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-semibold text-sm sm:text-base whitespace-nowrap">
                    Product Name
                  </td>
                  <td className="py-3">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-semibold text-sm sm:text-base">
                    Category
                  </td>
                  <td className="py-3">
                    <input
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-semibold text-sm sm:text-base">
                    Brand
                  </td>
                  <td className="py-3">
                    <input
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-semibold text-sm sm:text-base">
                    Price
                  </td>
                  <td className="py-3">
                    <input
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-semibold text-sm sm:text-base">
                    Stock Qty
                  </td>
                  <td className="py-3">
                    <input
                      name="stock"
                      type="number"
                      value={formData.stock}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-semibold text-sm sm:text-base align-top pt-5">
                    Description
                  </td>
                  <td className="py-3">
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full p-2 rounded bg-gray-800 border border-gray-700 h-24 focus:border-blue-500 outline-none transition resize-none"
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td className="py-3 pr-4 font-semibold text-sm sm:text-base">
                    Image
                  </td>
                  <td className="py-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full text-xs sm:text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 transition cursor-pointer"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-12 rounded-lg transition-all active:scale-95 shadow-lg shadow-blue-900/30"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;