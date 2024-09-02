import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addActivityThunk, fetchActivityThunk } from "./activity.thunk";

const initialState = {
  activities: [],
  isLoading: false,
  error: null,
};

export const fetchActivity = createAsyncThunk(
  "api/fetchActivtyData/",
  fetchActivityThunk
);
export const addActivity = createAsyncThunk(
  "api/postActivity",
  addActivityThunk
);

const activitySlice = createSlice({
  name: "activityslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ... (existing cases for fetchProjects and postProjects)
    builder
      .addCase(fetchActivity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchActivity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activities =
          action.payload.length > 0 && Array.isArray(action.payload)
            ? action.payload
            : [];
      })
      .addCase(fetchActivity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(addActivity.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(addActivity.fulfilled, (state, action) => {
        // state.activities.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addActivity.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("Error adding a project..");
      });
  },
});

export default activitySlice.reducer;
