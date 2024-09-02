import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addHelpdeskTicketThunk,
  addTicketCommentsThunk,
  deleteHelpdeskTicketThunk,
  editHelpdeskTicketThunk,
  fetchHelpDeskTicketByIdThunk,
  fetchHelpdeskThunk,
  fetchTicketCommentsThunk,
} from "./helpdesk.thunk";

const initialState = {
  ticketComment: [],
  tickets: [],
  ticket: null,
  isLoading: true,
};

// tickets
export const addHelpdeskTicket = createAsyncThunk(
  "api/helpdesksettings",
  addHelpdeskTicketThunk
);
export const editHelpdeskTicket = createAsyncThunk(
  "api/helpdesk edit",
  editHelpdeskTicketThunk
);
export const deleteHelpdeskTicket = createAsyncThunk(
  "api/helpdesk delete",
  deleteHelpdeskTicketThunk
);
export const fetchHelpDesk = createAsyncThunk(
  "api/fetch helpdesk",
  fetchHelpdeskThunk
);
export const fetchHelpDeskTicketById = createAsyncThunk(
  "api/fetch helpdesk by Id",
  fetchHelpDeskTicketByIdThunk
);

export const addHelpdeskComment = createAsyncThunk(
  "api/ticketComments",
  addTicketCommentsThunk
);

export const fetchCommentsByTicketId = createAsyncThunk(
  "api/fetch comments by TicketId",
  fetchTicketCommentsThunk
);

const helpdeskSlice = createSlice({
  name: "settings",
  initialState,
  extraReducers: (builder) => {
    builder
      // fetch tickets
      .addCase(fetchHelpDesk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHelpDesk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets =
          action.payload.data.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchHelpDesk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchHelpDeskTicketById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHelpDeskTicketById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ticket = action.payload.data;
      })
      .addCase(fetchHelpDeskTicketById.rejected, (state) => {
        state.isLoading = false;
      })
      // add tickets
      .addCase(addHelpdeskTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addHelpdeskTicket.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addHelpdeskTicket.rejected, (state) => {
        state.isLoading = false;
      })
      //edit ticket
      .addCase(editHelpdeskTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editHelpdeskTicket.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editHelpdeskTicket.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteHelpdeskTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteHelpdeskTicket.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteHelpdeskTicket.rejected, (state) => {
        state.isLoading = false;
      })
      //fetch comments
      .addCase(fetchCommentsByTicketId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsByTicketId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ticketComment =
          action.payload.data.length > 0 && Array.isArray(action.payload.data)
            ? action.payload.data
            : [];
      })
      .addCase(fetchCommentsByTicketId.rejected, (state) => {
        state.isLoading = false;
      })
      // add comments
      .addCase(addHelpdeskComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addHelpdeskComment.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addHelpdeskComment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default helpdeskSlice.reducer;
