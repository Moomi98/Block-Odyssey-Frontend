import { productInfo } from "../constants/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface productsState {
  products: productInfo[];
  targetedProducts: productInfo[];
  showedProducts: productInfo[];
  perPage: number;
  currentPage: number;
}

export const initialState: productsState = {
  products: [],
  targetedProducts: [],
  showedProducts: [],
  perPage: 10,
  currentPage: 1,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<productInfo[]>) {
      state.products = [...action.payload];
    },
    setPerPage(state, action: PayloadAction<number>) {
      state.perPage = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTargetedProducts(state, action: PayloadAction<productInfo[]>) {
      state.targetedProducts = action.payload;
    },
    setShowedProducts(state) {
      state.showedProducts = state.targetedProducts.slice(
        state.perPage * (state.currentPage - 1),
        state.perPage * state.currentPage
      );
    },
  },
});

export const {
  setProducts,
  setPerPage,
  setCurrentPage,
  setShowedProducts,
  setTargetedProducts,
} = productSlice.actions;
export default productSlice.reducer;
