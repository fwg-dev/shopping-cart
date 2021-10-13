import React, {useState} from 'react'
import {Typography, Card, CardContent, CardActions, Button, }from '@mui/material';
// import Product from './Product';
import './styles/Products.css';
import { connect } from 'react-redux'; 
import {addCart} from '../actions/addAction'; 

function Products(props) {

  console.log(props); 


  const [cartItems, setCartItems] = useState(0);

  // const addToCart = () => {
  //   console.log("Button Clicked");
  //   setCartItems(cartItems +1); 

  // };


  const products = [
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
  ]

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
                  onClick={props.addCart}
                  >Add to Cart</Button>
                </CardActions>
                {/* <h1> Current number in cart {cartItems}</h1> */}
              </>
               

            </Card>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default connect(null, {addCart}) (Products); 
