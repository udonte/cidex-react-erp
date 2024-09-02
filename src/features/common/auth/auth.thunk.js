import axios from "axios";
import { toast } from "react-toastify";
import {
  CognitoUserAttribute,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";

///Login User
export const fetchUserThunk = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (err) {
    return toast.error(err.response.data.message);
  }
};
///Login User
export const loginUserThunk = async (
  loginData = { email: "", password: "" }
) => {
  try {
    const response = await axios.post("http://localhost:8000/login", loginData);
    // ;
    toast.success(response.data.message);
    return response.data;
  } catch (err) {
    return toast.error(err.response.data.message);
  }
};

//sign up
export const signUpUserThunk = (
  signUpData = { email: "", companyName: "", password: "" }
) => {
  const poolData = {
    UserPoolId: process.env.COGNITO_USER_POOL_ID,
    ClientId: process.env.COGNITO_APP_CLIENT_ID,
  };

  const userPool = new CognitoUserPool(poolData);

  const attributeList = [
    new CognitoUserAttribute({ Name: "email", Value: signUpData.email }),
    // new CognitoUserAttribute({
    //   Name: "company_name",
    //   Value: signUpData.companyName,
    // }),
    // Add more attributes as needed
  ];

  const response = userPool.signUp(
    signUpData.email,
    signUpData.password,
    attributeList,
    null,
    (err, result) => {
      if (err) {
        return err;
      } else {
        return result;
      }
    }
  );

  // ;
  return response;
};

//first time login
export const firstTimeLoginThunk = async (
  fistTimeLoginData = { email: "", password: "", newPassword: "" }
) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/first-time-login",
      fistTimeLoginData
    );
    toast.success(response.data.message);
    return response.data;
  } catch (err) {}
};
