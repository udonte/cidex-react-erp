import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getApplicationsThunk,
  postApplicationsThunk,
} from "./application.thunk";

const initialState = {
  applications: [],
  isLoading: false,
  error: null,
  message: null,
};

export const getApplications = createAsyncThunk(
  "api/get Applications",
  getApplicationsThunk
);
export const postApplications = createAsyncThunk(
  "api/post Applications",
  postApplicationsThunk
);

const PositionSlice = createSlice({
  name: "Position",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getApplications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApplications.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.applications =
          payload?.data?.length > 0 && Array.isArray(payload?.data)
            ? payload?.data
            : [];
      })
      .addCase(getApplications.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(postApplications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postApplications.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(postApplications.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default PositionSlice.reducer;
