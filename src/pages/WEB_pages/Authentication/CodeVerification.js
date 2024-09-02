import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomInput from "../../../components/_common/CustomInput";
import { BiShow, BiHide } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { ROUTE_PATHS } from "../../../constants/routes.constants";
import Button from "../../../components/WEB_components/Button";
import Spinner from "../../../components/_common/Spinner";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";
import Modal from "../../../components/_common/Modal";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import React from "react";

const initialState = {
  referral_code: null,
  company_name: "",
  email: "",
  password: "",
};

function SignUp() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [signUpData, setSignUpData] = useState(initialState);
  const [lengthValid, setLengthValid] = useState(false);
  const [upperCaseValid, setUpperCaseValid] = useState(false);
  const [lowerCaseValid, setLowerCaseValid] = useState(false);
  const [specialCharValid, setSpecialCharValid] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const [isLoading, setIsLoading] = useState(true);

  const handleVerification = async () => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_EXCEED_BACKEND_BASE_URL}tenants/activate`,
        {
          token: token,
        }
      );
      if (res.data.status_code === 200) {
        setIsLoading(false);
        toast.success(res.data.data);
        return;
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error.data.detail.message
          ? error.data.detail.message
          : "An Error Occured"
      );
      return;
    }
  };
  useEffect(() => {
    handleVerification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({ ...prevState, [name]: value }));
    setLengthValid(value.length >= 8);
    setUpperCaseValid(/[A-Z]/.test(value));
    setLowerCaseValid(/[a-z]/.test(value));
    setSpecialCharValid(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signUpData.email || !signUpData.company_name || !signUpData.password) {
      return toast.error("Please fill all fields");
    } else {
      setIsLoading(true);
      try {
        const response = await axiosInstance.post("/tenants/", signUpData);
        if (response.status === 201 || response.status_code === 201) {
          setIsLoading(false);
          localStorage.setItem("email", signUpData.email);
          navigate(ROUTE_PATHS.PUBLIC.CODE_VERIFY);
        }
      } catch (error) {
        setIsLoading(false);
        toast.error(error.data.detail.message || "An Error Occured");
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" col-span-1 bg-[#EBEBEB] text-center">
        <div
          className="flex items-end w-full h-full p-[70px] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url('/images/signup_img.png')` }}
        >
          <div className="text-white text-left space-y-3">
            <p className=" font-bold text-xl">
              Empower your entire workforce with EXCEED
            </p>
            <p className=" font-light text-sm w-[90%]">
              Utilize the awesome features of Exceed into optimizing your
              businesses with seamless integration of CRM and HRM tools
              simultaneously.
            </p>
          </div>
        </div>
      </div>
      <div className=" col-span-1 w-full  p-[90px] bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[500px]">
            <div className="flex justify-between items-start mb-10">
              <div className="flex flex-col space-y-3 h-full">
                <h1 className="text-[24px] font-bold">Sign Up </h1>
                <h2 className="text-gurugeeks-dark-500">
                  Enter your details to Sign in!{" "}
                </h2>
              </div>
              <img
                className="mt-3"
                src={process.env.PUBLIC_URL + "/images/exceed_logo.png"}
                alt="companySvgLogo"
              />
            </div>
            <form className="bg-white" onSubmit={handleSubmit}>
              <div class="mb-4">
                <CustomInput
                  value={signUpData.company_name}
                  name={"company_name"}
                  label={"Company Name"}
                  placeholder={"Enter the name of your company"}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4">
                <CustomInput
                  value={signUpData.email}
                  name={"email"}
                  label={"Email"}
                  placeholder={"Your company's email address"}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4">
                <CustomInput
                  value={signUpData.referral_code}
                  name={"referral_code"}
                  label={"Referral Code (optional)"}
                  placeholder={"Enter your referral code"}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-4">
                <label>Password</label>{" "}
                <div className="relative h-[56px] w-full">
                  <input
                    id="confirm_password"
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    name="password"
                    value={signUpData.password}
                    onChange={handlePasswordChange}
                    className={`h-full w-full border-2 rounded-lg shadow-sm px-6 my-2 
                     ${lengthValid &&
                        !(upperCaseValid && lowerCaseValid && specialCharValid)
                        ? "border-red-500 outline-red-500  focus:border-red-500"
                        : lengthValid &&
                          upperCaseValid &&
                          lowerCaseValid &&
                          specialCharValid
                          ? "border-green-500 outline-green-500  focus:border-green-500"
                          : ""
                      }`}
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
                <ul className="mt-6">
                  <li className=" font-medium text-[#8F8F8F]">
                    Your password must contain
                  </li>
                  <li className="flex items-center gap-x-2">
                    At least 8 characters
                    {lengthValid && (
                      <FaCheckCircle className=" text-green-600" />
                    )}
                  </li>
                  <li className="flex items-center gap-x-2">
                    At least 1 uppercase letter
                    {upperCaseValid && (
                      <FaCheckCircle className="text text-green-600" />
                    )}
                    {!upperCaseValid && lengthValid && (
                      <MdCancel className=" text-red-600" />
                    )}
                  </li>
                  <li className="flex items-center gap-x-2">
                    At least 1 lowercase letter
                    {lowerCaseValid && (
                      <FaCheckCircle className=" text-green-600" />
                    )}
                    {!lowerCaseValid && lengthValid && (
                      <MdCancel className=" text-red-600" />
                    )}
                  </li>
                  <li className="flex items-center gap-x-2">
                    At least 1 special case character (.,/#’;[-)
                    {specialCharValid && (
                      <FaCheckCircle className=" text-green-600" />
                    )}
                    {!specialCharValid && lengthValid && (
                      <MdCancel className=" text-red-600" />
                    )}
                  </li>
                </ul>
              </div>
              <Button
                disabled={isLoading}
                className="my-[20px] w-full h-[56px] flex justify-center items-center bg-gurugeeks-orange-500 hover:bg-gurugeeks-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? <Spinner /> : "Sign Up"}
              </Button>
              <p class=" text-gurugeeks-dark-600 text-center">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    navigate("/web/login");
                  }}
                  className="text-gurugeeks-orange-700 font-bold cursor-pointer"
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="bg-white rounded-lg p-8 max-w-lg">
              <div className="flex items-start justify-end">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className=""
                >
                  <IoClose />
                </button>
              </div>
              <div className="flex items-start gap-x-6">
                <div className="h-[50px] w-[50px] flex items-center justify-center text-[#4CB10E] rounded-lg bg-[#4cb10e57]">
                  <FaCheckCircle className="text-[20px]" />
                </div>
                <div className="w-full">
                  <h2 className="text-lg text-[#54595E] font-semibold mb-4">
                    Account Verified!
                  </h2>
                  <p className="text-[#54595e85]">
                    Thank you for choosing Exceed!. Your account has now been
                    verified. You can proceed to sign in.
                  </p>
                </div>
              </div>
              <div className="my-4">
                <Button
                  onClick={() => {
                    navigate("/web/login");
                  }}
                  className={"w-full h-[44px] flex items-center justify-center"}
                >
                  Proceed to Sign in
                </Button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default SignUp;
