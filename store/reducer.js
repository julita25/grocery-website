import { createReducer } from "@reduxjs/toolkit";
import { addCartItem, deleteCartItem } from "./actions";

const initialState = {
  cartItems: [],
  itemCount: 0
};

const storeItemsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCartItem, (state, action) => {
      state.cartItems = action.payload;
    })
    .addCase(deleteCartItem, (state, action) => {
      state.cartItems = action.payload;
    });
});

export default storeItemsReducer;
