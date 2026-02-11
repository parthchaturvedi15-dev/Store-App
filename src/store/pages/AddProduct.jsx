import {useState}from 'react';

const AddProduct = ()=>{
    const [formData, setFormData]=useState({
        name: '',
        category: '',
        brand: '',
        price: '',
        description: '',
        stock: '',
        image: ''
    });

    const handleChange =(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend =()=>{
            setFormData({...formData, image: reader.result});
        };
        if(file)reader.readAsDataURL(file);
    };
    const handleSubmit = async (e)=>{
        e.prevenetDefault();
        try{
            const response = await fetch('http://localhost:5000/api/products/add', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            if(response.ok){
                alert('Product added successfully!');
                setFormData({name: '', category: '', brand: '', price: '', description: '', stock: '', image: ''});
            }
        } catch(error){
            console.error('Error adding product:', error);
        }
    };
 return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 text-white rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6">Add New Product to Inventory</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input name="name" placeholder="Product Name" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-700" required />
        
        <div className="grid grid-cols-2 gap-4">
          <input name="category" placeholder="Category (e.g., phone, laptop)" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-700" required />
          <input name="brand" placeholder="Brand" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-700" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input name="price" type="number" placeholder="Price" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-700" required />
          <input name="stock" type="number" placeholder="Stock Quantity" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-700" required />
        </div>

        <textarea name="description" placeholder="Description" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-700 h-32" required />
        
        <label className="block text-sm text-gray-400">Upload Product Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="text-sm" required />

        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition">
          Save Product to Atlas
        </button>
      </form>
    </div>
  );
};
export default AddProduct;