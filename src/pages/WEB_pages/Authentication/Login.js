import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";
import React from "react";
import loginForm from "./login/";
import { saveAuthenticationToken } from "../../../utils/helperFunctions/authManager";


const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("user");
  const handleRoleChange = (event) => setRole(event.target.value)


  const handleSubmit = async (data) => {
    try {
      setIsLoading(true);
      let loginData = {}
      if (role === "user") {
        loginData = {
          username: data.username,
          password: data.password,
          client_id: data.client_id,
        }
      } else {
        loginData = {
          username: data.username,
          password: data.password,
        }
      }

      const authUrl = role === "user" ? "employee/auths/token" : "tenant/auths/token"
      const refresh_token_url = role === "admin" ? "tenant/auths/token_refresh" : "employee/auths/token_refresh"


      const response = await axiosInstance.post(
        authUrl,
        loginData,
        { headers: { "Content-Type": "application/x-www-form-urlencoded", } }
      );
      if (response.status === 200 && response.data.access_token) {
        setIsLoading(false);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        localStorage.setItem("user_type", role);
        saveAuthenticationToken(response.data.access_token, response.data.refresh_token, role, "/web/login", refresh_token_url)
        toast.success("Login Successful");
        navigate("/HRM");
      } else {
        setIsLoading(false);
        toast.error(response.data.detail.message || "An Error Occurred");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.data.detail.message || "An Error Occurred");
    }
  };



  return (
    <div className="grid px-6 md:px-2 grid-cols-1  md:grid-cols-2 h-screen ">
      <loginForm.LoginBanner />
      <div className=" col-span-1 w-full p-[90px]  bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[500px]">
            <loginForm.LoginDescription />
            <loginForm.FormSwitcher role={role}
              handleRoleChange={handleRoleChange}
            />
            {role === "user" ?
              <loginForm.EmployeeLoginForm
                onSubmit={handleSubmit}
                isLoading={isLoading} /> :
              <loginForm.AdminLoginForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
