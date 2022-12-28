import { productInfo } from "../constants/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface productsState {
  products: productInfo[];
  showedProducts: productInfo[];
  perPage: number;
  currentPage: number;
}

export const initialState: productsState = {
  products: [],
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
    setShowedProducts(state) {
      state.showedProducts = state.products.slice(
        state.perPage * (state.currentPage - 1),
        state.perPage * state.currentPage
      );
    },
  },
});

export const { setProducts, setPerPage, setCurrentPage, setShowedProducts } =
  productSlice.actions;
export default productSlice.reducer;
