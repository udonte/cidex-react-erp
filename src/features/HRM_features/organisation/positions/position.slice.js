import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getPositionsThunk,
  postPositionsThunk,
  deletePositionByIdThunk,
} from "./position.thunk";
import { toast } from "react-toastify";

const initialState = {
  positions: [],
  isLoading: false,
  error: null,
  message: null,
};

export const getPositions = createAsyncThunk(
  "api/getpositions",
  getPositionsThunk
);

export const postPositions = createAsyncThunk(
  "api/postpositions",
  postPositionsThunk
);

export const deletePositionById = createAsyncThunk(
  "api/deletethunkById",
  deletePositionByIdThunk
);

const PositionSlice = createSlice({
  name: "Position",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPositions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPositions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.positions =
          payload.data.length > 0 && Array.isArray(payload.data)
            ? payload.data
            : [];
      })
      .addCase(getPositions.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(postPositions.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(postPositions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        toast.success("Successfull");
        // state.positions.push(payload);
      })
      .addCase(postPositions.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deletePositionById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePositionById.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deletePositionById.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default PositionSlice.reducer;
