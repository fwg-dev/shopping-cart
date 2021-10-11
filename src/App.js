import './App.css';
import React, { useState } from 'react';
//import components 
import Navbar from './components/Navbar';
import Products from './components/Products';

//Router
import {Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';


function App() {
  const [products, setProducts] = useState(["shoes", "teabags", "laptops"])


  return (
    <div className="App">
    <Navbar />
    <Switch >
     <Route exact path ="/cart" >
       <Cart/>
     </Route>

    </Switch>
      
      {/* <h1>Welcome to the shopping cart</h1> */}
      {/* <Products products={products} /> */}
    </div>
  );
}

export default App;
