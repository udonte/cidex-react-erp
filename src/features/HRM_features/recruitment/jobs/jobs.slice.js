// src/features/apiSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchJobByIdThunk,
  fetchJobsThunk,
  postHiringTeamThunk,
  postJobsThunk,
  postScoreCardThunk,
  editJobByIdThunk,
} from "./jobs.thunk";
import { toast } from "react-toastify";

const initialState = {
  jobData: [],
  job: null,
  scoreCardId: false,
  hiringTeam: "",
  isLoading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk("api/fetchJobs", fetchJobsThunk);
export const fetchJobById = createAsyncThunk(
  "api/fetchData",
  fetchJobByIdThunk
);

export const postJobs = createAsyncThunk("api/postJobs", postJobsThunk);
export const postHiringTeam = createAsyncThunk(
  "api/postHiringteam",
  postHiringTeamThunk
);
export const postScoreCard = createAsyncThunk(
  "api/postScoreCard",
  postScoreCardThunk
);

export const editJobById = createAsyncThunk(
  "api/editJobData",
  editJobByIdThunk
);

// ab73dd80-26a2-4303-814b-b126c73b11c9
const jobsSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobData =
          action?.payload?.data?.length > 0 &&
          Array.isArray(action?.payload?.data)
            ? action?.payload?.data
            : [];
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchJobById.pending, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload.data;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postJobs.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postJobs.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("Error posting jobs..");
      })
      .addCase(postScoreCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postScoreCard.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("score_card_id", true);
        toast.success(action.payload.message);
      })
      .addCase(postScoreCard.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postHiringTeam.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postHiringTeam.fulfilled, (state, action) => {
        state.hiringTeam = action.payload;
        localStorage.setItem("hiring_team", true);
        state.isLoading = false;
      })
      .addCase(postHiringTeam.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editJobById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJobById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
      })
      .addCase(editJobById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default jobsSlice.reducer;
