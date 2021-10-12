import React from 'react'
import {Typography, Card, CardContent, CardActions, Button, CardMedia,    }from '@mui/material';
import Product from './Product';
import './styles/Products.css';

function Products({products}) {
  return (
    <div>
      {/* <p>Hello from Products</p>
      <ul>
      {products.map((product) => (
        <li>
        {product.name}
        <img src={product.image} />
        <p> Price</p>
        </li>      
      ))}
      </ul> */}


      <ul className="product-container">
      {products.map((product) => (
        <li>
          <Card sx={{ maxWidth: 345 }}>
              <>        
                <div>
                <img 
                  height="340" 
                src={product.image} 
                  alt=""
                />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="success" size="small">{product.price}</Button>
                  <Button variant="outlined" color="success" size="small">Add to Cart</Button>
                </CardActions>
              </>
               

            </Card>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default Products
