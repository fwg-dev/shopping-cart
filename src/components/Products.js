import React from 'react'
import Product from './Product';

function Products({products}) {
  return (
    <div>
      <p>Hello from Products</p>
      <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}

      </ul>
    </div>
  )
}

export default Products
