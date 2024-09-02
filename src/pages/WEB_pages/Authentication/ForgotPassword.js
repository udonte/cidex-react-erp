import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/WEB_components/Button";
import CustomInput from "../../../components/_common/CustomInput";
import Spinner from "../../../components/_common/Spinner";
import { MdLockOutline } from "react-icons/md";
import { ROUTE_PATHS } from "../../../constants/routes.constants";
import React from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { forgotPassword } from "./validators/forgotPasword.validator";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";
import { setItemToLocalStorage } from "../../../utils/helperFunctions/localStorage"
import InputErrorMessage from "../../../components/_common/InputErrorMessage";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(forgotPassword) })

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {

      const response = await axiosInstance.post(
        "tenants/forgot/password",
        data
      );

      if (response.status === 200 ?? response.data?.status_code === 200) {
        setIsLoading(false);
        setItemToLocalStorage("email", data.email);
        navigate(ROUTE_PATHS.PUBLIC.CODE_VERIFY);
      }
    } catch (error) {
      setIsLoading(false);
      const { status } = error.response
      if (status === 404) {
        navigate(ROUTE_PATHS.PUBLIC.CODE_VERIFY);
      } else {
        toast.error("Could not send instructions to your email address, please try again");
      }
    }

  }



  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" col-span-1 bg-[#EBEBEB] text-center">
        <div className="flex items-center justify-center w-full h-full bg-no-repeat bg-center bg-cover">
          <div className="text-white text-left space-y-3">
            <img
              src={process.env.PUBLIC_URL + "/images/authentication.png"}
              alt="auth"
            />
          </div>
        </div>
      </div>
      <div className=" col-span-1 w-full p-[90px]  bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[500px]">
            <div className="flex flex-col justify-center items-center mb-10">
              <div className="rounded-full p-4 bg-orange-100">
                {" "}
                <MdLockOutline color="#C55514" size={35} />{" "}
              </div>
              <div className="flex flex-col justify-center items-center space-y-3 h-full">
                <h1 className="text-[24px] font-bold">Forgot Password?</h1>
                <h2 className="text-gurugeeks-dark-500">
                  Enter your the email address associated with your account{" "}
                </h2>
              </div>
            </div>
            <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <CustomInput
                  register={register}
                  name="email"
                  placeholder="example@examaple.com"

                />
                <InputErrorMessage message={errors.email?.message} />
              </div>
              <Button
                className="my-[50px] w-full h-[56px] flex justify-center items-center bg-gurugeeks-orange-500 hover:bg-gurugeeks-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"

              >
                {isLoading ? <Spinner /> : "Submit"}
              </Button>
              <p className=" text-gurugeeks-dark-600 text-center">
                Go back to
                <span
                  onClick={() => navigate("/web/login")}
                  className="font-bold cursor-pointer text-gurugeeks-orangeLight hover:text-gurugeeks-orange-700"
                >
                  {" "}
                  Login page
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
