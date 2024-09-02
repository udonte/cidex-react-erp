import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProductThunk,
  fetchProductsThunk,
  fetchProductByIdThunk,
  editProductByIdThunk,
  deleteProductByIdThunk,
} from "./product.thunk";

const initialState = {
  isLoading: false,
  products: [],
  product: null,
  error: false,
};

// THUNK STARTS HERE
export const postProduct = createAsyncThunk(
  "api/create-product",
  createProductThunk
);
export const fetchProduct = createAsyncThunk(
  "api/fetch-products",
  fetchProductsThunk
);
export const fetchProductById = createAsyncThunk(
  "api/fetch-product-ById",
  fetchProductByIdThunk
);
export const editProduct = createAsyncThunk(
  "api/edit-product",
  editProductByIdThunk
);
export const deleteProduct = createAsyncThunk(
  "api/delete-product",
  deleteProductByIdThunk
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products =
          action.payload.length > 0 && Array.isArray(action.payload)
            ? action.payload
            : [];
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default productSlice.reducer;
