import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchPermissionByDesignationThunk,
  fetchPermissionThunk,
  savePermissionThunk,
} from "./permission.thunk";

const initialState = {
  permissions: [],
  permission: [],
  isLoading: true,
};

export const getPermission = createAsyncThunk(
  "api/get permission",
  fetchPermissionThunk
);

export const getPermissionByDesignation = createAsyncThunk(
  "api/get permission by designation",
  fetchPermissionByDesignationThunk
);
export const savePermission = createAsyncThunk(
  "api/getmodules",
  savePermissionThunk
);

const permissionSlice = createSlice({
  name: "Permissions",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getPermission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPermission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.permissions =
          action.payload?.data?.length > 0 &&
          Array.isArray(action.payload?.data)
            ? action?.payload?.data
            : [];
      })
      .addCase(getPermission.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getPermissionByDesignation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPermissionByDesignation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.permission =
          action.payload?.data?.length > 0 &&
          Array.isArray(action.payload?.data)
            ? action?.payload?.data
            : [];
      })
      .addCase(getPermissionByDesignation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(savePermission.pending, (state) => {
        state.isLoading = true;
        state.smallLoader = true;
      })
      .addCase(savePermission.fulfilled, (state, action) => {
        state.permissions = action.payload;
      })
      .addCase(savePermission.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.smallLoader = false;
      });
  },
});

export default permissionSlice.reducer;
