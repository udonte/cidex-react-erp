import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchApplicantsThunk,
  fetchSingleApplicantThunk,
  deleteSingleApplicantThunk,
} from "./applicants.thunk";

const initialState = {
  isLoading: false,
  applicants: [],
  applicant: null,
  error: null,
  message: null,
};

export const fetchApplicant = createAsyncThunk(
  "api/fetchApplicant",
  fetchApplicantsThunk
);
export const fetchApplicantById = createAsyncThunk(
  "api/fetchApplicantById",
  fetchSingleApplicantThunk
);
export const deleteApplicantById = createAsyncThunk(
  "api/deleteApplicantById",
  deleteSingleApplicantThunk
);

export const applicantsSlice = createSlice({
  name: "applicant slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplicant.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApplicant.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.applicants =
          payload?.data?.length > 0 && Array.isArray(payload?.data)
            ? payload?.data
            : [];
      })
      .addCase(fetchApplicant.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchApplicantById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApplicantById.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.applicant = payload.data;
      })
      .addCase(deleteApplicantById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteApplicantById.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteApplicantById.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default applicantsSlice.reducer;
