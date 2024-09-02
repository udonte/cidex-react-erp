import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createEmployeeThunk,
  deleteEmployeeDetailsByIdThunk,
  fetchEmployeeThunk,
  fetchTotalEmployeeThunk,
  postBankDetailsThunk,
  postDocumentThunk,
  postEmergencyContactThunk,
} from "./employee.thunk";
import { useDispatch } from "react-redux";

const initialState = {
  isLoading: false,
  error: null,
  employees: [],
  employeeDetails: [],
  totalEmployee: 0,
  employeeId: "",
};

export const fetchEmployees = createAsyncThunk(
  "fetchEmployees",
  fetchEmployeeThunk
);
export const fetchTotalEmployees = createAsyncThunk(
  "fetch totalEmployees",
  fetchTotalEmployeeThunk
);
export const createEmployee = createAsyncThunk(
  "post jobs",
  createEmployeeThunk
);
export const postBankDetails = createAsyncThunk(
  "postBankDetails",
  postBankDetailsThunk
);
export const postDocument = createAsyncThunk("postDocument", postDocumentThunk);
export const postEmergencyContact = createAsyncThunk(
  "postEmergencyContact",
  postEmergencyContactThunk
);
export const deleteEmployeeDetails = createAsyncThunk(
  "api/deleteEmployeeById",
  deleteEmployeeDetailsByIdThunk
);

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    setTabIndex: (state, { payload }) => {
      state.tabIndex = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.employees =
          action.payload?.data?.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
        state.totalEmployee = action.payload.total_count;
        console.log(action.payload.data);
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchTotalEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTotalEmployees.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.totalEmployee = payload;
      })
      .addCase(fetchTotalEmployees.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createEmployee.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postBankDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBankDetails.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(postBankDetails.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postDocument.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(postDocument.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postDocument.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(postEmergencyContact.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(postEmergencyContact.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postEmergencyContact.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteEmployeeDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEmployeeDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeDetails = action.payload;
      })
      .addCase(deleteEmployeeDetails.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const { setTabIndex } = employeeSlice.actions;
export default employeeSlice.reducer;
