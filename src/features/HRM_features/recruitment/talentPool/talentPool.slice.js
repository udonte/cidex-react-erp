import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTalentThunk, fetchTalentThunk } from "./talentPool.thunk";

const initialState = {
  isLoading: false,
  talents: [],
};

export const fetchTalent = createAsyncThunk(
  "api/fetchtalent",
  fetchTalentThunk
);
export const addTalent = createAsyncThunk("api/addtalent", addTalentThunk);

export const talentPoolSlice = createSlice({
  name: "talentPool slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTalent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTalent.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchTalent.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addTalent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTalent.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addTalent.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default talentPoolSlice.reducer;
