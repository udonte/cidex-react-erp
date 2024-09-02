import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubscriptionByIdThunk } from "./subscription.thunk";

const initialState = {
  subscription: [],
};

export const getSubscriptionById = createAsyncThunk(
  "api/ subscriptionbyid",
  getSubscriptionByIdThunk
);

const subscriptionSlice = createSlice({
  name: "Subscription",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getSubscriptionById.pending, (state) => {
        state.isLoading = true;
        state.smallLoader = true;
      })
      .addCase(getSubscriptionById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.smallLoader = false;
        state.subscription = action.payload.data;
        state.success = true;
      })
      .addCase(getSubscriptionById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.smallLoader = false;
      });
  },
});

export default subscriptionSlice.reducer;
