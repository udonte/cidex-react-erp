import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteDepartmentsByIdThunk,
  getDepartmentsByIdThunk,
  getDepartmentsThunk,
  postDepartmentsThunk,
} from "./department.thunk";

const initialState = {
  departments: [],
  department: [],
  dep: [],
  isLoading: null,
  smallLoader: null,
  success: null,
  error: null,
  message: null,
};

export const getDepartments = createAsyncThunk(
  "api/getdepartment",
  getDepartmentsThunk
);

export const getDepartmentsById = createAsyncThunk(
  "api/getdepartmentById",
  getDepartmentsByIdThunk
);

export const postDepartments = createAsyncThunk(
  "api/postdepartment",
  postDepartmentsThunk
);

export const deleteDepartment = createAsyncThunk(
  "api/deleteDepartment",
  deleteDepartmentsByIdThunk
);

const DepartmentSlice = createSlice({
  name: "Department",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getDepartments.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getDepartments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        // console.log(action.payload.data, "the action");
        state.departments =
          action.payload?.data?.length > 0 &&
          Array.isArray(action.payload?.data)
            ? action.payload?.data
            : [];
      })
      .addCase(getDepartments.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message = payload;
      })
      .addCase(getDepartmentsById.pending, (state) => {
        state.isLoading = true;
        state.smallLoader = true;
      })
      .addCase(getDepartmentsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.smallLoader = false;
        state.department = action.payload.data;
        state.success = true;
      })
      .addCase(getDepartmentsById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.smallLoader = false;
      })
      .addCase(postDepartments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postDepartments.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteDepartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDepartment.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.departments = action.payload;
      })
      .addCase(deleteDepartment.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default DepartmentSlice.reducer;
