import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchVendorsThunk,
  createVendorThunk,
  editVendorByIdThunk,
  deleteVendorByIdThunk,
} from "./vendors.thunk";

const initialState = {
  isLoading: false,
  vendors: [],
};

export const fetchVendors = createAsyncThunk(
  "api/fetchvendors",
  fetchVendorsThunk
);

export const createVendor = createAsyncThunk(
  "api/createVendor",
  createVendorThunk
);

export const editVendorById = createAsyncThunk(
  "api/editVendor",
  editVendorByIdThunk
);

export const deleteVendorById = createAsyncThunk(
  "api/deleteVendor",
  deleteVendorByIdThunk
);

const vendorSlice = createSlice({
  name: "vendorSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVendors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVendors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vendors =
          action.payload &&
          action.payload.data.length > 0 &&
          Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchVendors.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createVendor.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createVendor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createVendor.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteVendorById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVendorById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vendors = action.payload;
      });
  },
});

export default vendorSlice.reducer;
