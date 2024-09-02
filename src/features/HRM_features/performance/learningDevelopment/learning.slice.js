import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCoursesThunk } from "./learning.thunk";

const initialState = {
  isLoading: false,
};
export const fetchCourses = createAsyncThunk("api/fetchCourses");
export const createCourses = createAsyncThunk(
  "api/createCourses",
  createCoursesThunk
);

const learningandDevlopmentSlice = createSlice({
  name: "learning and dvelopment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, () => {})
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchCourses.rejected, () => {});
  },
});

export default learningandDevlopmentSlice.reducer;
