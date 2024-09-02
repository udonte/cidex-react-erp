import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addLeaveThunk,
  addLeaveTypeThunk,
  approveLeaveThunk,
  fetchLeaveThunk,
  fetchLeaveTypeThunk,
} from "./leave.thunk";

const initialState = {
  isLoading: true,
  allLeaves: [],
  leaveTypes: [],
  leave: null,
  error: false,
};
export const fetchLeave = createAsyncThunk("fetchLeaveApi", fetchLeaveThunk);
export const addLeave = createAsyncThunk("addLeaveApi", addLeaveThunk);
export const fetchLeaveType = createAsyncThunk(
  "fetchLeaveTypeApi",
  fetchLeaveTypeThunk
);
export const addLeaveType = createAsyncThunk(
  "addLeaveTypeApi",
  addLeaveTypeThunk
);
export const approveLeave = createAsyncThunk(
  "approveLeaveApi",
  approveLeaveThunk
);

const leaveSlice = createSlice({
  name: "leaveSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeave.pending, (state) => {
        state.isLoading = true;
        state.error = true;
      })
      .addCase(fetchLeave.fulfilled, (state, action) => {
        state.allLeaves =
          action.payload.length > 0 && Array.isArray(action.payload)
            ? action.payload
            : [];
        state.isLoading = false;
      })
      .addCase(fetchLeave.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addLeave.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLeave.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allLeaves.push(action.payload);
      })
      .addCase(addLeave.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(approveLeave.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(approveLeave.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(approveLeave.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addLeaveType.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addLeaveType.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addLeaveType.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchLeaveType.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchLeaveType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leaveTypes =
          action.payload.length > 0 && Array.isArray(action.payload)
            ? action.payload
            : [];
      })
      .addCase(fetchLeaveType.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default leaveSlice.reducer;
