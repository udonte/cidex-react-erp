import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/helperFunctions/axios.utils";
import { useState } from "react";
import { toast } from "react-toastify";
import { BiHide, BiShow } from "react-icons/bi";
import Button from "../../components/WEB_components/Button";
import CustomInput from "../../components/_common/CustomInput";
import Spinner from "../../components/_common/Spinner";
import { FaLock } from "react-icons/fa6";
import { orange } from "@mui/material/colors";
import { MdLockOutline } from "react-icons/md";
import { ROUTE_PATHS } from "../../constants/routes.constants";
import axios from "axios";
import AdminBackground from "../../assets/adminLoginBg.png";
import ExceedLogo from "../../assets/exceed.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [ResetData, setResetData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ResetData.email) {
      return toast.error("Please fill all fields correctly");
    } else {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://exceed-backend.55k1k72t6e80c.eu-west-3.cs.amazonlightsail.com/api/v1/accounts/forgot_password",
          ResetData
        );
        if (response.status === 200 && response.data.status_code === 200) {
          setIsLoading(false);
          localStorage.setItem("email", ResetData.email);
          navigate("/web/code-forgot");
        }
        return response;
      } catch (error) {
        setIsLoading(false);
        if (error.response.status === 404) {
          toast.error("Pls Enter correct Email");
        }
      }
    }
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
            {/* right side */}
            <div className="w-full h-screen p-6 flex items-center justify-center ">
              <div className="bg-white bg-opacity-10 rounded-lg p-16">
                <div class="w-[600px]">
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex flex-col space-y-3 h-full">
                      <h1 className="text-[24px] font-bold">Reset password</h1>
                      <h2 className="text-gurugeeks-dark-500">
                        Please enter your new password
                      </h2>
                    </div>
                  </div>
                  <form class="bg-transparent" onSubmit={handleSubmit}>
                    <div className="my-2">
                      <label className="font-medium">Password</label>
                      <div className="relative h-[56px] w-full">
                        <input
                          className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2 bg-transparent"
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="**********"
                          name="password"
                          value={ResetData.password}
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
                    <div className="my-2">
                      <label className="font-medium">Confirm Password</label>
                      <div className="relative h-[56px] w-full ">
                        <input
                          className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2 bg-transparent"
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="**********"
                          name="password"
                          value={ResetData.confirmPassword}
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
                    <Button
                      className="my-[50px] w-full h-[56px] flex justify-center items-center bg-gurugeeks-orange-500 hover:bg-gurugeeks-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      {isLoading ? <Spinner /> : "Send Email"}
                    </Button>
                    <p class=" text-gurugeeks-dark-600 text-center">
                      Back to
                      <span
                        onClick={() => navigate("/admin/login")}
                        className="font-bold cursor-pointer text-gurugeeks-orangeLight hover:text-gurugeeks-orange-700 pl-4"
                      >
                        Login
                      </span>
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

export default ResetPassword;
