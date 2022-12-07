import { createAction } from "@reduxjs/toolkit";

export const addCartItem = createAction("ADD_GROCERY_CART");

export const deleteCartItem = createAction("DELETE_GROCERY_ITEM");
