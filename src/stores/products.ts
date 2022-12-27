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
  },
  extraReducers: {
    ["productSlice/setPerPage"]: (state) => {
      state.showedProducts = state.products.slice(
        state.perPage * state.currentPage,
        state.perPage + 1
      );
    },
    ["productSlice/setCurrentPage"]: (state) => {
      state.showedProducts = state.products.slice(
        state.perPage * state.currentPage,
        state.perPage + 1
      );
    },
  },
});

export const { setProducts, setPerPage, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;
