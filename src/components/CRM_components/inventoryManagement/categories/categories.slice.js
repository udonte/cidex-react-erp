// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { createContactThunk } from "./categories.thunk";

// const initialState = {
//   isLoading: false,
//   categories: [],
//   error: false,
// };

// // THUNK STARTS HERE
// export const postCategory = createAsyncThunk(
//   "api/create-category",
//   createCategoryThunk
// );

// export const categorySlice = createSlice({
//   name: "categorySlice",
//   initialState,

//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(postCategory.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(postCategory.fulfilled, (state, action) => {
//         state.isLoading = false;
//         // state.contacts.push(action.payload);
//       })
//       .addCase(postCategory.rejected, (state) => {
//         state.isLoading = false;
//       });
//   },
// });
