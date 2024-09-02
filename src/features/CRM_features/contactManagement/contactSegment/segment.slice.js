import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchSegmentsThunk,
  createSegmentThunk,
  editSegmentThunk,
  deleteSegmentThunk,
} from "./segment.thunk";

const initialState = {
  isLoading: false,
  segments: [],
  error: false,
};

// THUNK STARTS HERE
export const postSegment = createAsyncThunk(
  "api/create-contact-segment",
  createSegmentThunk
);
export const fetchSegment = createAsyncThunk(
  "api/fetch-contact-segment",
  fetchSegmentsThunk
);
export const editSegment = createAsyncThunk(
  "api/edit-contact-segment",
  editSegmentThunk
);
export const deleteSegment = createAsyncThunk(
  "api/delete-contact-segment",
  deleteSegmentThunk
);

const contactSegmentSlice = createSlice({
  name: "contactSegmentSlice",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postSegment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSegment.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.contacts.push(action.payload);
        console.log(action.payload);
      })
      .addCase(postSegment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchSegment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSegment.fulfilled, (state, { payload }) => {
        console.log(payload?.data);
        state.isLoading = false;
        state.segments =
          payload?.data?.length > 0 && Array.isArray(payload?.data)
            ? payload?.data
            : [];
      })
      .addCase(fetchSegment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editSegment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editSegment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editSegment.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSegment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSegment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteSegment.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default contactSegmentSlice.reducer;
