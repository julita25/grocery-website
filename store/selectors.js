/* eslint-disable import/prefer-default-export */
import { createSelector } from "reselect";

const getCartItems = (state) => state.cartItems.items;

export const getCartItemsSelector = createSelector(
  getCartItems,
  (items) => items
);
