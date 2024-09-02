import React from "react";
import { useNavigate } from "react-router-dom";
import AdminBackground from "../../assets/adminLoginBg.png";
import ExceedLogo from "../../assets/exceed.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { BiHide, BiShow } from "react-icons/bi";
import Button from "../../components/WEB_components/Button";
import CustomInput from "../../components/_common/CustomInput";
import axiosInstance from "../../utils/helperFunctions/axios.utils";
import { Checkbox, Spinner } from "../../components/HRM_components";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMeIsChecked, setrememberMeIsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxChange = () => {
    setrememberMeIsChecked(!rememberMeIsChecked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      return toast.error("Please fill all fields");
    } else {
      try {
        setIsLoading(true);
        const response = await axiosInstance.post("auths/token", loginData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        if (response.status === 200) {
          setIsLoading(false);
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("refresh_token", response.data.refresh_token);
          toast.success("Login Successful");
          navigate("/HRM");
        }
      } catch (error) {
        setIsLoading(false);
        if (error.data.detail.includes("Incorrect username or password")) {
          toast.error("Incorrect username or password");
        }
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <div className="">
        <div className="flex relative">
          <div
            className="w-full h-screen bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${AdminBackground})` }}
          ></div>
          {/* inner div */}
          <div className="z-5 absolute text-white flex items-center justify-between w-full h-screen">
            {/* left side */}
            <div className="flex justify-center items-center text-center  w-1/2 h-screen">
              <img src={ExceedLogo} alt="Exceed" />
            </div>
            {/* right side */}
            <div className="w-1/2 h-screen p-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-16 h-screen">
                <div class="">
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex flex-col space-y-3 h-full">
                      <h1 className="text-[24px] font-bold">
                        Welcome back to EXCEED!
                      </h1>
                      <h2 className="text-gurugeeks-dark-500">
                        Enter your details to Sign in!{" "}
                      </h2>
                    </div>
                  </div>
                  <form class="bg-transparent" onSubmit={handleSubmit}>
                    <div class="mb-4 h-[56px] w-full">
                      <input
                        className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2 bg-transparent"
                        value={loginData.username}
                        name="username"
                        label="Username"
                        placeholder="mac0009"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-medium">Password</label>
                      <div className="relative h-[56px] w-full">
                        <input
                          className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2 bg-transparent"
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="**********"
                          name="password"
                          value={loginData.password}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute h-full flex items-center justify-center top-2 right-2 text-gray-500 focus:outline-none"
                        >
                          {showPassword ? (
                            <BiHide className="text-[26px] " />
                          ) : (
                            <BiShow className="text-[26px] " />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between my-4">
                      <div className="flex items-center">
                        <Checkbox
                          handleOnchange={handleCheckboxChange}
                          checked={rememberMeIsChecked}
                          name="rememberMeCheckbox"
                        />
                        Remember Me
                      </div>
                      <p
                        className="cursor-pointer text-orange-700 hover:text-orange-900"
                        onClick={() => navigate("/admin/forgot-password")}
                      >
                        Forgot Password
                      </p>
                    </div>
                    <Button
                      className="my-[50px] w-full h-[56px] flex justify-center items-center bg-gurugeeks-orange-500 hover:bg-gurugeeks-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      {isLoading ? <Spinner /> : "Log in"}
                    </Button>
                    <p class=" text-gurugeeks-dark-600 text-center">
                      Don’t have an account yet?{" "}
                      <span
                        onClick={() => navigate("/web/sign-up")}
                        className="font-bold cursor-pointer text-gurugeeks-orangeLight hover:text-gurugeeks-orange-700 pl-4"
                      >
                        Sign up
                      </span>
                      {/* <span
                  onClick={() => navigate("/web/forgot-password")}
                  className="font-bold cursor-pointer text-gurugeeks-orangeLight hover:text-gurugeeks-orange-700 pl-4"
                >
                  Forgot Password
                </span> */}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
