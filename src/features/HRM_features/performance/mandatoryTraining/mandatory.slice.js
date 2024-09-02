import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchMandatoryTrainingThunk,
  postMandatoryTrainingThunk,
} from "./mandatory.thunk";

const initialState = {
  isLoading: false,
  courses: [],
};
export const fetchMandatoryTraining = createAsyncThunk(
  "api/fetchmandatorytrainig",
  fetchMandatoryTrainingThunk
);
export const postMandatoryTraining = createAsyncThunk(
  "api/postmandatorytrainig",
  postMandatoryTrainingThunk
);

const mandatoryTrainingSlice = createSlice({
  name: "madatory training",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMandatoryTraining.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMandatoryTraining.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses =
          action.payload.data.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : state.employees.data;
      })
      .addCase(fetchMandatoryTraining.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postMandatoryTraining.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postMandatoryTraining.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postMandatoryTraining.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default mandatoryTrainingSlice.reducer;
