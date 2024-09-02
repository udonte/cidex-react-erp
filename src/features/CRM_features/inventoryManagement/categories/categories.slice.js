import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCategoriesThunk,
  createCategoriesThunk,
  editCategoryByIdThunk,
  deleteCategoryByIdThunk,
  fetchCategoryByIdThunk,
} from "./categories.thunk";

const initialState = {
  isLoading: false,
  categories: [],
  category: null,
  error: false,
};

// THUNK STARTS HERE
export const postCategory = createAsyncThunk(
  "api/create-category",
  createCategoriesThunk
);
export const fetchCategories = createAsyncThunk(
  "api/fetch-categories",
  fetchCategoriesThunk
);
export const fetchCategoryById = createAsyncThunk(
  "api/fetch-categoryById",
  fetchCategoryByIdThunk
);
export const editCategory = createAsyncThunk(
  "api/edit-category",
  editCategoryByIdThunk
);
export const deleteCategory = createAsyncThunk(
  "api/delete-category",
  deleteCategoryByIdThunk
);

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postCategory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories =
          payload.data.length > 0 && Array.isArray(payload.data)
            ? payload.data
            : [];
        console.log(payload);
      })
      .addCase(fetchCategoryById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(editCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default categorySlice.reducer;
