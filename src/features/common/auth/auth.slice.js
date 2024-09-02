import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchUserThunk,
  firstTimeLoginThunk,
  loginUserThunk,
  signUpUserThunk,
} from "./auth.thunk";
import { toast } from "react-toastify";
// import { CognitoUserPool } from "amazon-cognito-identity-js";

// const userPool = new CognitoUserPool({
//   UserPoolId: process.env.COGNITO_USER_POOL_ID,
//   ClintId: process.env.COGNITO_USER_POOL_ID,
// });

// initialize userToken from local storage
// const userToken = localStorage.getItem("accessToken")
//   ? localStorage.getItem("accessToken")
//   : null;

const initialState = {
  loading: false,
  email: null,
  user: null, //for user object
  userToken: localStorage.getItem("accessToken"),
  userType: localStorage.getItem("user_type"),
  error: null,
};

//Thunk starts here
export const fetchUser = createAsyncThunk("auth user", fetchUserThunk);
export const loginUser = createAsyncThunk("auth/login", loginUserThunk);
export const signUpUser = createAsyncThunk("auth/signUp", signUpUserThunk);
export const firstTimeLogin = createAsyncThunk(
  "auth/firstTime",
  firstTimeLoginThunk
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.clear();
      action.payload
        ? toast.error(`${action.payload}`)
        : toast.success("Successfully logged out");
    },

    setVericationData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
  extraReducers: (builder) => {
    builder
      //to login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        localStorage.setItem("accessToken", action.payload.accessToken);
        // addToLocalStorage(action.payload.accessToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
      })

      //to sign up
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.email = action.payload.email
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
      })

      //first time login
      .addCase(firstTimeLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(firstTimeLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        localStorage.setItem("accessToken", action.payload.accessToken);
        // state.userInfo = action.payload.user;
        // localStorage.setItem("accessToken", action.payload.accessToken);
      })
      .addCase(firstTimeLogin.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout, setVericationData } = authSlice.actions;
export default authSlice.reducer;
