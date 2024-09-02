import { createSlice } from "@reduxjs/toolkit";

// initial state for this slice
const initialState = {
  sidebar: {
    isSidebarOpen: true,
    activeSidebarMenu: "dashboard",
  },
  navBarTitle: "Dashboard",
};

export const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.isSidebarOpen = !state.sidebar.isSidebarOpen;
    },
    setActiveSidebarMenu: (state, action) => {
      state.sidebar.activeSidebarMenu = action.payload.toLowerCase();
    },
    setNavBavTitle: (state, action) => {
      state.navBarTitle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, setActiveSidebarMenu, setNavBavTitle } =
  appSettingsSlice.actions;
// state reducer
export default appSettingsSlice.reducer;
