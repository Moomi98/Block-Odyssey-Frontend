import { combineReducers } from "@reduxjs/toolkit";
import products from "./products";

const reducer = combineReducers({
  products,
});

export default reducer;
