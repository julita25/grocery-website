import { combineReducers } from "@reduxjs/toolkit";
import storeItemsReducer from "./reducer";

const rootReducer = combineReducers({
  storeItems: storeItemsReducer
});

export default rootReducer;
