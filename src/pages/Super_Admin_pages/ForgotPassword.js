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

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [forgotData, setForgotData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForgotData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!forgotData.email) {
      return toast.error("Please fill all fields correctly");
    } else {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://exceed-backend.55k1k72t6e80c.eu-west-3.cs.amazonlightsail.com/api/v1/accounts/forgot_password",
          forgotData
        );
        if (response.status === 200 && response.data.status_code === 200) {
          setIsLoading(false);
          localStorage.setItem("email", forgotData.email);
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
                        Forgot your password
                      </h1>
                      <h2 className="text-gurugeeks-dark-500">
                        Please enter your email address to receive verification
                        code
                      </h2>
                    </div>
                  </div>
                  <form class="bg-transparent" onSubmit={handleSubmit}>
                    <div>
                      <label className="font-medium">Email address</label>
                      <div className="relative h-[56px] w-full">
                        <input
                          className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2 bg-transparent"
                          id="password"
                          type="email"
                          value={forgotData.email}
                          name="email"
                          placeholder="example@examaple.com"
                          onChange={handleChange}
                        />
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

export default ForgotPassword;
