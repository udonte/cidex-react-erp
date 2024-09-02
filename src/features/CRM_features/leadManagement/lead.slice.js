import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   // leads
//   fetchLeadsThunk,
//   createLeadsThunk,
//   fetchLeadByIdThunk,
//   editLeadByIdThunk,
//   deleteLeadByIdThunk,
//   // lead status
//   fetchLeadStatusThunk,
//   createLeadStatusThunk,
//   fetchLeadStatusByIdThunk,
//   editLeadStatusByIdThunk,
//   deleteLeadStatusByIdThunk,
// } from "./lead.thunk";

// const initialState = {
//   isLoading: false,
//   leads: [],
//   lead: null,
//   lead_status: [],
// };

// // leads
// // export const fetchLeads = createAsyncThunk("api/fetchthunk", fetchLeadsThunk);

// export const createLeads = createAsyncThunk(
//   "api/createthunk",
//   createLeadsThunk
// );
// // export const fetchLeadById = createAsyncThunk(
// //   "api/fetchthunkById",
// //   fetchLeadByIdThunk
// // );

// // export const editLeadById = createAsyncThunk(
// //   "api/edithunkById",
// //   editLeadByIdThunk
// // );

// // export const deleteLeadById = createAsyncThunk(
// //   "api/deletethunkById",
// //   deleteLeadByIdThunk
// // );

// // // lead status
// // export const fetchLeadStatus = createAsyncThunk(
// //   "api/fetchthunk",
// //   fetchLeadStatusThunk
// // );

// // export const createLeadStatus = createAsyncThunk(
// //   "api/createthunk",
// //   createLeadStatusThunk
// // );
// // export const fetchLeadStatusById = createAsyncThunk(
// //   "api/fetchthunkById",
// //   fetchLeadStatusByIdThunk
// // );

// // export const editLeadStatusById = createAsyncThunk(
// //   "api/edithunkById",
// //   editLeadStatusByIdThunk
// // );

// // export const deleteLeadStatusById = createAsyncThunk(
// //   "api/deletethunkById",
// //   deleteLeadStatusByIdThunk
// );

// // const leadsSlice = createSlice({
// //   name: "leadSlice",
// //   initialState,
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       // fetchleads
// //       .addCase(fetchLeads.pending, (state) => {
// //         state.isLoading = true;
// //       })
// //       .addCase(fetchLeads.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.leads = action.payload?.data || [];
// //       })
// //       .addCase(fetchLeads.rejected, (state) => {
// //         state.isLoading = false;
// //       })
// //       // create leads
// //       .addCase(createLeads.pending, (state) => {
// //         state.isLoading = true;
// //       })
// //       .addCase(createLeads.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         console.log(action.payload);
// //       })
// //       .addCase(createLeads.rejected, (state) => {
// //         state.isLoading = false;
// //       })
// //       // fetchleads by ID
// //       // .addCase(fetchLeadById.pending, (state) => {
// //       //   state.isLoading = true;
// //       // })
// //       // .addCase(fetchLeadById.fulfilled, (state, action) => {
// //       //   state.isLoading = false;
// //       //   state.lead = action.payload;
// //       // })
// //       // .addCase(fetchLeadById.rejected, (state, action) => {
// //       //   state.isLoading = false;
// //       // })
// //       // Edit Leads by ID
// //       // .addCase(editLeadById.rejected, (state, action) => {
// //       //   state.isLoading = false;
// //       // })
// //       // .addCase(editLeadById.pending, (state, action) => {
// //       //   state.isLoading = true;
// //       // })
// //       // .addCase(editLeadById.fulfilled, (state, action) => {
// //       //   state.isLoading = false;
// //       //   state.lead = action.payload;
// //       //   console.log(action.payload);
// //       // })
// //       // // delete lead by ID
// //       // .addCase(deleteLeadById.pending, (state) => {
// //       //   state.isLoading = true;
// //       // })
// //       // .addCase(deleteLeadById.fulfilled, (state, action) => {
// //       //   state.isLoading = false;
// //       //   state.leads = action.payload;
// //       // })
// //       // .addCase(deleteLeadById.rejected, (state) => {
// //       //   state.isLoading = true;
// //       // })
// //       // Fetch lead status
// //       // .addCase(fetchLeadStatus.rejected, (state, action) => {
// //       //   state.isLoading = false;
// //       // })
// //       // .addCase(fetchLeadStatus.pending, (state) => {
// //       //   state.isLoading = true;
// //       // })
// //       // .addCase(fetchLeadStatus.fulfilled, (state, action) => {
// //       //   state.isLoading = false;
// //       //   state.lead_status =
// //       //     action.payload &&
// //       //     action.payload?.data?.length > 0 &&
// //       //     Array.isArray(action.payload?.data)
// //       //       ? action.payload.data
// //       //       : [];
// //       //   console.log(action.payload);
// //       // })
// //       // fetch status lead by ID
// //       // .addCase(fetchLeadStatusById.rejected, (state, action) => {
// //       //   state.isLoading = false;
// //       // })
// //       // .addCase(fetchLeadStatusById.pending, (state) => {
// //       //   state.isLoading = true;
// //       // })
// //       // .addCase(fetchLeadStatusById.fulfilled, (state, action) => {
// //       //   state.isLoading = false;
// //       //   state.lead_status = action.payload;
// //       // })
// //       // // create lead status
// //       // .addCase(createLeadStatus.rejected, (state, action) => {
// //       //   state.isLoading = false;
// //       // })
// //       // .addCase(createLeadStatus.pending, (state) => {
// //       //   state.isLoading = true;
// //       // })
// //       // .addCase(createLeadStatus.fulfilled, (state, action) => {
// //       //   state.isLoading = false;
// //       //   console.log(action.payload);
// //       //   // state.lead_status = action.payload;
// //       // })
// //       // delete lead status by ID
// //       // .addCase(deleteLeadStatusById.rejected, (state) => {
// //       //   state.isLoading = false;
// //       // })
// //       // .addCase(deleteLeadStatusById.pending, (state) => {
// //       //   state.isLoading = true;
// //       // })
// //       // .addCase(deleteLeadStatusById.fulfilled, (state, action) => {
// //       //   state.isLoading = false;
// //       //   state.lead_status = action.payload;
// //       // });
// //   },
// // });

// export default leadsSlice.reducer;

import { fetchLeadsThunk } from "./lead.thunk";

const initialState = {
  leads: [],
  isLoading: false,
  error: null,
};

export const fetchLeads = createAsyncThunk("api/fetchLeads", fetchLeadsThunk);

const leadsSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.leads =
          action?.payload?.data?.length > 0 &&
          Array.isArray(action?.payload?.data)
            ? action?.payload?.data
            : [];
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default leadsSlice.reducer;
