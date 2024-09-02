import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchInvoiceThunk,
  fetchInvoiceByIdThunk,
  createInvoiceThunk,
  editInvoiceByIdThunk,
  deleteInvoiceByIdThunk,
} from "./invoice.thunk";

const initialState = {
  isLoading: false,
  invoices: [],
  invoice: null,
};

export const fetchInvoices = createAsyncThunk(
  "api/fetchInvoice",
  fetchInvoiceThunk
);
export const createInvoice = createAsyncThunk(
  "api/createInvoice",
  createInvoiceThunk
);
export const fetchInvoiceById = createAsyncThunk(
  "api/fetchInvoiceById",
  fetchInvoiceByIdThunk
);

export const editInvoiceById = createAsyncThunk(
  "api/editInvoiceById",
  editInvoiceByIdThunk
);

export const deleteInvoiceById = createAsyncThunk(
  "api/deleteInvoiceById",
  deleteInvoiceByIdThunk
);

const invoicesSlice = createSlice({
  name: "invoiceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.invoices =
          action.payload.length > 0 && Array.isArray(action.payload)
            ? action.payload
            : [];
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchInvoiceById.pending, (state, action) => {
        state.isLoading = false;
        state.invoice = action.payload;
      })
      .addCase(fetchInvoiceById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.invoice = action.payload;
      })
      .addCase(fetchInvoiceById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createInvoice.pending, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createInvoice.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createInvoice.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editInvoiceById.pending, (state, action) => {
        state.isLoading = false;
        state.invoice = action.payload;
      })
      .addCase(editInvoiceById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.invoice = action.payload;
      })
      .addCase(editInvoiceById.rejected, (state, action) => {
        state.isLoading = false;
        state.invoice = action.payload;
      })
      .addCase(deleteInvoiceById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteInvoiceById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.invoices = action.payload;
      })
      .addCase(deleteInvoiceById.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default invoicesSlice.reducer;
