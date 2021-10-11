import React from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart.js';
import Products from './Products.js';


function Navbar() {
  return (
    <div>
      <p>Hello from Navbar</p>
      <ul>
        <li>
          <Link to="/"> Products</Link>
        </li>
        <li>
          <Link to="/Cart"> Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
