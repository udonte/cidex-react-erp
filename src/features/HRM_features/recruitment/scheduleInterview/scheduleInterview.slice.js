import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  scheduleInterviewThunk,
  fetchScheduledInterviewThunk,
  fetchScheduleByApplicationThunk,
  deleteScheduledInterviewThunk,
} from "./scheduleInterview.thunk";

const initialState = {
  isLoading: false,
  schedules: [],
  schedule: null,
};

export const fetchScheduledInterview = createAsyncThunk(
  "api/fetchScheduledInterview",
  fetchScheduledInterviewThunk
);

export const fetchScheduledByApplication = createAsyncThunk(
  "api/fetchScheduledInterview-ByApplication",
  fetchScheduleByApplicationThunk
);

export const addScheduleInterview = createAsyncThunk(
  "api/addScheduleInterview",
  scheduleInterviewThunk
);
export const deleteScheduleInterview = createAsyncThunk(
  "api/deleteScheduledInterview",
  deleteScheduledInterviewThunk
);

export const scheduledInterviewSlice = createSlice({
  name: "schedules slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchScheduledByApplication.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchScheduledByApplication.fulfilled, (state, { payload }) => {
        state.schedules =
          payload?.data?.length > 0 && Array.isArray(payload?.data)
            ? payload?.data
            : [];
        state.isLoading = false;
      })
      .addCase(fetchScheduledByApplication.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addScheduleInterview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addScheduleInterview.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addScheduleInterview.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteScheduleInterview.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteScheduleInterview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.schedule = action.payload;
      })
      .addCase(deleteScheduleInterview.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default scheduledInterviewSlice.reducer;
