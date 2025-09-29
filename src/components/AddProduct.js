// src/components/AddProduct.js
import React, { useState } from 'react';

const AddProduct = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    website: 'Amazon'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:9090/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Product added successfully!');
        setFormData({ name: '', url: '', website: 'Amazon' });
        if (onProductAdded) onProductAdded(); // Refresh the list
      }
    } catch (error) {
      alert('❌ Error adding product: ' + error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-product">
      <h2>➕ Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Product Name (e.g., iPhone 15)"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="url"
            name="url"
            placeholder="Product URL"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <select name="website" value={formData.website} onChange={handleChange}>
            <option value="Amazon">Amazon</option>
            <option value="Flipkart">Flipkart</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;