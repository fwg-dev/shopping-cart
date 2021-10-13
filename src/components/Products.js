import React, {useState} from 'react'
import {Typography, Card, CardContent, CardActions, Button, CardMedia,    }from '@mui/material';
import Product from './Product';
import './styles/Products.css';

function Products({products}) {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    console.log("Button Clicked");

  };


  return (
    <div>
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
                  <Button 
                  variant="outlined" 
                  color="success" 
                  size="small"
                  onClick={addToCart}
                  >Add to Cart</Button>
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
