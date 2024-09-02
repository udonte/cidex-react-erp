import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createContactThunk,
  fetchContactsThunk,
  fetchContactByIdThunk,
  deleteContactThunk,
  fetchSegmentListThunk,
  postSegmentListThunk,
} from "./contact.thunk";

const initialState = {
  isLoading: false,
  contacts: [],
  contact: null,
  segment: [],
  error: false,
};

// THUNK STARTS HERE
export const postContact = createAsyncThunk(
  "api/create-contact",
  createContactThunk
);
export const fetchContact = createAsyncThunk(
  "api/fetch-contacts",
  fetchContactsThunk
);
export const fetchContactById = createAsyncThunk(
  "api/fetch-contact-ById",
  fetchContactByIdThunk
);
export const postSegmentList = createAsyncThunk(
  "api/create-contact segment",
  postSegmentListThunk
);
export const fetchSegmentlist = createAsyncThunk(
  "api/fetch-contacts segmwnt",
  fetchSegmentListThunk
);
export const deleteContact = createAsyncThunk(
  "api/delete-contacts",
  deleteContactThunk
);

const contactSlice = createSlice({
  name: "contactSlice",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.contacts.push(action.payload);
      })
      .addCase(postContact.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts =
          payload?.data?.length > 0 && Array.isArray(payload?.data)
            ? payload?.data
            : [];
      })
      .addCase(fetchContact.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact = action.payload;
      })
      .addCase(fetchContactById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContactById.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(postSegmentList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSegmentList.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.contacts.push(action.payload);
      })
      .addCase(postSegmentList.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchSegmentlist.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSegmentlist.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.segment =
          payload?.data?.length > 0 && Array.isArray(payload?.data)
            ? payload?.data
            : [];
      })
      .addCase(fetchSegmentlist.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default contactSlice.reducer;
