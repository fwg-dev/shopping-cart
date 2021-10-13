import './App.css';
import React, { useState } from 'react';
//import components 
import Navbar from './components/Navbar';
import Products from './components/Products';


//Router
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch >
      <Route exact path ="/cart" >
        <Cart/>
      </Route>

      </Switch>
        
        {/* <h1>Welcome to the shopping cart</h1> */}
        <Products  />
    </div>
  );
}

export default App;
