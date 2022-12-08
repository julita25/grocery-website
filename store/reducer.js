import { createReducer } from "@reduxjs/toolkit";
import { addCartItem, deleteCartItem } from "./actions";

const initialState = {
  items: [],
  itemCount: 0
};

const cartItemsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCartItem, (state, action) => {
      state.items = action.payload;
    })
    .addCase(deleteCartItem, (state, action) => {
      state.items = action.payload;
    });
});

export default cartItemsReducer;
