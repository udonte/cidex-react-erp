import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addHelpdeskCategoryThunk,
  addRecruitmentStageThunk,
  addScoreMetricsThunk,
  fetchHelpdeskCategoryThunk,
  fetchRecruitmentStageThunk,
  fetchScoreMetricsThunk,
} from "./settings.thunk";

const initialState = {
  heldeskCategory: [],
  recruitmentStages: [],
  scoreMetrics: [],
  isLoading: true,
};

export const addHelpdeskCategory = createAsyncThunk(
  "api/helpdesksettings",
  addHelpdeskCategoryThunk
);
export const fetchHelpdeskCategory = createAsyncThunk(
  "api/fetch heldeskcategory",
  fetchHelpdeskCategoryThunk
);
export const addRecruitmentStage = createAsyncThunk(
  "api/recruitmentSettin",
  addRecruitmentStageThunk
);
export const fetchRecruitmentStage = createAsyncThunk(
  "api/fetch redruitment stage",
  fetchRecruitmentStageThunk
);
export const addScoreMetrics = createAsyncThunk(
  "api/score metrics",
  addScoreMetricsThunk
);
export const fetchScoreMetrics = createAsyncThunk(
  "api/fetch Score Metrics",
  fetchScoreMetricsThunk
);

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addHelpdeskCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addHelpdeskCategory.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchHelpdeskCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHelpdeskCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.heldeskCategory = action.payload;
      })
      .addCase(addRecruitmentStage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRecruitmentStage.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchRecruitmentStage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecruitmentStage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recruitmentStages = action.payload.data;
      })
      .addCase(addScoreMetrics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addScoreMetrics.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchScoreMetrics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchScoreMetrics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.scoreMetrics = action.payload.data;
      });
  },
});

export default settingsSlice.reducer;
