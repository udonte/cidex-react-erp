import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCompanyGoalsThunk,
  createDepartmentalGoalsThunk,
  createEmployeeTaskThunk,
  createGoalCycleThunk,
  createKPIThunk,
  fetchCompanyGoalsThunk,
  fetchDepartmentalGoalByIDThunk,
  fetchDepartmentalGoalsThunk,
  fetchEmployeeTaskThunk,
  fetchGoalCycleThunk,
  fetchKPIThunk,
} from "./goals.thunk";

const initialState = {
  isLoading: false,
  goalCycle: [],
  companyGoals: [],
  KPI: [],
  tasks: [],
  departmentalTarget: [],
  departmentalGoal: null,
};
export const fetchCompanyGoals = createAsyncThunk(
  "api/fetchGoals",
  fetchCompanyGoalsThunk
);
export const createCompanyGoals = createAsyncThunk(
  "api/create Goals",
  createCompanyGoalsThunk
);
export const fetchKPI = createAsyncThunk("api/fetchKPI", fetchKPIThunk);
export const createKPI = createAsyncThunk("api/KPI", createKPIThunk);
export const createDepartmentalGoals = createAsyncThunk(
  "api/create departmental Goals",
  createDepartmentalGoalsThunk
);
export const fetchDepartmentalGoals = createAsyncThunk(
  "api/fetch departmental Goals",
  fetchDepartmentalGoalsThunk
);
export const createEmployeeTask = createAsyncThunk(
  "api/create task",
  createEmployeeTaskThunk
);
export const fetchEmployeeTask = createAsyncThunk(
  "api/fetch  task",
  fetchEmployeeTaskThunk
);
export const fetchDepartmentalGoalByID = createAsyncThunk(
  "api/fetch departmental Goals by ID",
  fetchDepartmentalGoalByIDThunk
);
export const createGoalCycle = createAsyncThunk(
  "api/create cycle",
  createGoalCycleThunk
);
export const fetchGoalCycle = createAsyncThunk(
  "api/fetch cycle",
  fetchGoalCycleThunk
);

const goalsSlice = createSlice({
  name: "organisation goals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCompanyGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companyGoals =
          action.payload?.data?.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchCompanyGoals.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchGoalCycle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGoalCycle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.goalCycle =
          action.payload?.data?.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchGoalCycle.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createCompanyGoals.pending, () => {})
      .addCase(createCompanyGoals.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createCompanyGoals.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createKPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createKPI.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createKPI.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchKPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchKPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.KPI =
          action.payload?.data?.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchKPI.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createEmployeeTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEmployeeTask.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createEmployeeTask.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchEmployeeTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEmployeeTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks =
          action.payload?.data?.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchEmployeeTask.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createDepartmentalGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDepartmentalGoals.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createDepartmentalGoals.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchDepartmentalGoals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDepartmentalGoals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoading = false;
        state.departmentalTarget =
          action.payload?.data?.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchDepartmentalGoals.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchDepartmentalGoalByID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDepartmentalGoalByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.departmentalGoal = action.payload?.data;
      })
      .addCase(fetchDepartmentalGoalByID.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default goalsSlice.reducer;
