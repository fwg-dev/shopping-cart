import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart.js';
import Products from './Products.js';
import {connect} from 'react-redux';


import { getNumbers } from '../actions/getAction';

//imports from material ui 
import {AppBar, Toolbar, IconButton,  Typography,Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Navbar(props) {
console.log(props)
useEffect(() => {
   getNumbers();

}, [])



  return (
    <div className="navigation"> 
         <AppBar position="static"
         style={{ background: '#EE6E73' }}
         >
        <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link 
                to="/products"> Products
              </Link>
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
            <span> {props.cartProps.cartNumbers} </span>
            </Link>
        </Toolbar>
      </AppBar>

  </div>
  )
}

const mapStateToProps = state => ({
  cartProps: state.cartState
})
export default connect( mapStateToProps, { getNumbers }) (Navbar)


