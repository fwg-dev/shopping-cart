import './App.css';
import React, { useState } from 'react';
//import components 
import Navbar from './components/Navbar';
import Products from './components/Products';


function App() {
  const [products, setProducts] = useState(["shoes", "teabags", "laptops"])


  return (
    <div className="App">
      <header >
        Welcome to the shopping cart
      </header>
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
