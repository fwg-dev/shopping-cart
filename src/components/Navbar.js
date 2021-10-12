import React from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart.js';
import Products from './Products.js';

//imports from material ui 
import {AppBar, Toolbar, IconButton,  Typography,Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Navbar() {
  return (
    <div className="navigation"> 
         <AppBar position="static"
         style={{ background: '#EE6E73' }}
         >
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link 
          to="/products"> Products</Link>
          </Typography>
          <Link to="/Cart"> 
          <Button color="inherit" 
          style={{ background: '#FFFAFA' }}
          
          >
          {/* <ShoppingCartIcon 
          style={{ background: '#FFFAFA' }}


          /> */}
           Cart
        </Button>
        </Link>
        </Toolbar>
      </AppBar>

  </div>
  )
}

export default Navbar
