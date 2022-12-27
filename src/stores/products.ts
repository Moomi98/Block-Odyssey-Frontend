import { productInfo } from "../constants/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface productsState {
  products: productInfo[];
  perPage: number;
}

export const initialState: productsState = {
  products: [],
  perPage: 10,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<productInfo[]>) {
      state.products = [...action.payload];
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
