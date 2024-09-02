import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProjectsThunk,
  addProjectsThunk,
  putActivityThunk,
} from "./projects.thunk";
import { toast } from "react-toastify";

const initialState = {
  projectData: [],
  isLoading: false,
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "api/fetchData/",
  fetchProjectsThunk
);
export const addProjects = createAsyncThunk(
  "api/postProjects",
  addProjectsThunk
);
export const putProjectActivty = createAsyncThunk(
  "api/postProjectsActivty",
  putActivityThunk
);

const projectSlice = createSlice({
  name: "projectslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ... (existing cases for fetchProjects and postProjects)
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectData =
          action.payload.length > 0 && Array.isArray(action.payload)
            ? action.payload
            : [];
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addProjects.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(addProjects.fulfilled, (state, action) => {
        state.projectData.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addProjects.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(putProjectActivty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putProjectActivty.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(putProjectActivty.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default projectSlice.reducer;
