import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAssetsThunk,
  createAssetsThunk,
  fetchAssetByIdThunk,
  editAssetByIdThunk,
  deleteAssetByIdThunk,
  createBulkAssetsThunk,
  createCheckOutAssetThunk,
  fetchCheckOutAssetThunk,
} from "./assets.thunk";

const initialState = {
  isLoading: false,
  assetCheckout: [],
  assets: [],
  asset: null,
};

export const fetchAssets = createAsyncThunk("api/fetchthunk", fetchAssetsThunk);
export const createBulkAssets = createAsyncThunk(
  "api/createBulkAssets",
  createBulkAssetsThunk
);

export const createAssets = createAsyncThunk(
  "api/createthunk",
  createAssetsThunk
);
export const fetchAssetById = createAsyncThunk(
  "api/fetchthunkById",
  fetchAssetByIdThunk
);

export const editAssetById = createAsyncThunk(
  "api/edithunkById",
  editAssetByIdThunk
);

export const deleteAssetById = createAsyncThunk(
  "api/deletethunkById",
  deleteAssetByIdThunk
);

export const createCheckout = createAsyncThunk(
  "api/createcheckoutAsset",
  createCheckOutAssetThunk
);
export const fetchCheckout = createAsyncThunk(
  "api/fetch checkoutAsset",
  fetchCheckOutAssetThunk
);

const assetsSlice = createSlice({
  name: "assetSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAssets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assets =
          action.payload &&
          action.payload?.data?.length > 0 &&
          Array.isArray(action.payload?.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchAssets.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchAssetById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAssetById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.asset = action.payload;
      })
      .addCase(createAssets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAssets.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.asset = action.payload;
      })
      .addCase(createAssets.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editAssetById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.asset = action.payload;
      })
      .addCase(deleteAssetById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAssetById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assets = action.payload;
      })
      .addCase(deleteAssetById.rejected, (state) => {
        state.isLoading = true;
      })
      // checkout asset
      .addCase(createCheckout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCheckout.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.asset = action.payload;
      })
      .addCase(createCheckout.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchCheckout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assetCheckout =
          action.payload &&
          action.payload?.data?.length > 0 &&
          Array.isArray(action.payload?.data)
            ? action.payload.data
            : [];
        // state.asset = action.payload
      })
      .addCase(fetchCheckout.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default assetsSlice.reducer;
