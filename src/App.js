import './App.css';
import React, { useState } from 'react';
//import components 
import Navbar from './components/Navbar';
import Products from './components/Products';

//Router
import {Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';


function App() {
  const [products, setProducts] = useState([
    {
      "id": 1, 
      "name": "Dress", 
      "image": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=780&q=80", 
      "price": "$340"
    },

    {
      "id": 2, 
      "name": "Shoes", 
      "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80", 
      "price": "$450"
    },

    {
      "id": 3, 
      "name": "Shirt", 
      "image": "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", 
      "price": "$320"
    }
  ])

 


  return (
    <div className="App">
      <Navbar />
      <Switch >
      <Route exact path ="/cart" >
        <Cart/>
      </Route>

      </Switch>
        
        {/* <h1>Welcome to the shopping cart</h1> */}
        <Products products={products} />
    </div>
  );
}

export default App;
