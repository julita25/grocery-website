import { combineReducers } from "@reduxjs/toolkit";
import cartItemsReducer from "./reducer";

export default combineReducers({
  cartItems: cartItemsReducer
});
