// src/components/ProductList.js
import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // This runs when component loads
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:9090/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  if (loading) return <div>🔄 Loading products...</div>;

  return (
    <div className="product-list">
      <h2>📦 Your Tracked Products ({products.length})</h2>
      {products.length === 0 ? (
        <p>No products yet. Add some to track!</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>💰 Price: ${product.currentPrice || 'Not tracked yet'}</p>
            <p>🛒 Store: {product.website}</p>
            <p>🔗 <a href={product.url} target="_blank" rel="noopener noreferrer">Product Link</a></p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;