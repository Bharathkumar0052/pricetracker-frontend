// src/App.js
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleProductAdded = () => {
    setRefresh(!refresh); // Toggle to trigger refresh
  };

  return (
    <div className="App">
      <h1>🛒 My Price Tracker</h1>
      <p>Track prices and save money! 💰</p>
      
      <AddProduct onProductAdded={handleProductAdded} />
      <ProductList key={refresh} /> {/* Key change forces re-render */}
    </div>
  );
}

export default App;