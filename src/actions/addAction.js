import { ADD_ITEM_CART } from "./types";

export const addCart = () => {
  return (dispatch) => {
    console.log("Adding to Cart");
    
    dispatch({
      type: ADD_ITEM_CART
    })
  }
}