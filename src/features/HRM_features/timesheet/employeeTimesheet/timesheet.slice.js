import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTimesheetThunk,
  fetchEmployeeTimesheetThunk,
} from "./timesheet.thunk";

const initialState = {
  isLoading: false,
  allEmployeeTimesheet: [],
  timesheet: null,
};

const fetchEmployeeTimesheet = createAsyncThunk(
  "api/fetchtimesheet",
  fetchEmployeeTimesheetThunk
);
const createTimesheet = createAsyncThunk(
  "api/createtimesheet",
  createTimesheetThunk
);

const timesheetSclice = createSlice({
  name: "timesheet",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTimesheet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTimesheet.fulfilled, () => {})
      .addCase(createTimesheet.rejected, () => {});
  },
});

export default timesheetSclice.reducer;
