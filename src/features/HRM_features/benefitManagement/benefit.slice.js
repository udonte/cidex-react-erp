import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSalaryComponentThunk } from "./benefit.thunk";
import { fetchHelpdeskThunk } from "../helpdesk/helpdesk.thunk";

const initialState = {
  salaryComponent: [],
  isLoading: true,
};

export const createSalaryComponent = createAsyncThunk(
  "api/helpdesksettings",
  createSalaryComponentThunk
);
export const fetchSalaryComponent = createAsyncThunk(
  "api/fetch helpdesk",
  fetchHelpdeskThunk
);

const helpdeskSlice = createSlice({
  name: "benefit",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalaryComponent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSalaryComponent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.salaryComponent =
          action.payload.length > 0 && Array.isArray(action.payload)
            ? action.payload
            : [];
      })
      .addCase(fetchSalaryComponent.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default helpdeskSlice.reducer;
