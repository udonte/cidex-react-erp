import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BiHide, BiShow } from "react-icons/bi";
import Button from "../../../components/WEB_components/Button";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";
import Spinner from "../../../components/_common/Spinner";
import { MdLock } from "react-icons/md";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [resetToken, setResetToken] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("reset_token");
    if (token) {
      setResetToken(token);
    }
  }, [resetToken]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !passwordConfirm) {
      return toast.error("Please fill all fields");
    } else if (!passwordsMatch) {
      return toast.error("Passwords do not match");
    } else {
      try {
        setIsLoading(true);
        const response = await axiosInstance.put(
          "tenants/reset/password",
          { token: resetToken, password: passwordConfirm },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setIsLoading(false);
          toast.success("Password changed successfully. Now login");
          navigate("/web/login");
        }
      } catch (error) {
        setIsLoading(false);
        if (error.message) {
          toast.error("Your token is invalid or expired");
        } else if (error.data.detail[1]?.msg) {
          toast.error(
            "Password must contain at least one special char, one number and minimum length 8 character "
          );
        } else {
          console.log(error);
          toast.error("An error occurred");
        }
      }
    }
  };

  useEffect(() => {
    const validatePassword = () => {
      // Regular expressions to check for each requirement
      const minLengthRegex = /.{8,}/;
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
      const uppercaseRegex = /[A-Z]/;

      // Check if all requirements are met
      const isMinLength = minLengthRegex.test(password);
      const hasSpecialChar = specialCharRegex.test(password);
      const hasUppercase = uppercaseRegex.test(password);

      // Set passwordsMatch based on the combined result of all checks
      setPasswordsMatch(
        isMinLength &&
          hasSpecialChar &&
          hasUppercase &&
          password === passwordConfirm
      );
    };

    validatePassword();
  }, [password, passwordConfirm]);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" col-span-1 bg-[#EBEBEB] text-center">
        <div className="flex items-center justify-center w-full h-full  bg-no-repeat bg-center bg-cover">
          <img
            className=""
            src={process.env.PUBLIC_URL + "/images/reset.png"}
            alt="reset  "
          />
        </div>
      </div>
      <div className=" col-span-1 w-full p-[90px]  bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[500px]">
            <div className="flex justify-between items-start mb-10">
              <div className="flex flex-col space-y-3 h-full items-center justify-center text-center">
                <h1 className="text-[24px] font-bold">
                  <div className="flex justify-center items-center rounded-full p-4 ">
                    {" "}
                    <MdLock color="#C55514" size={35} />{" "}
                  </div>
                  Reset Password?
                </h1>
                <h2 className="text-gurugeeks-dark-500">
                  Set a new password to enable you continue with your login
                  process{" "}
                </h2>
              </div>
            </div>
            <form className="bg-white" onSubmit={handleSubmit}>
              <div className="mb-8">
                <label className="font-medium">New Password</label>
                <div className="relative h-[56px] w-full">
                  <input
                    className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              <div>
                <label className="font-medium">Confirm New Password</label>
                <div className="relative h-[56px] w-full">
                  <input
                    className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2"
                    id="passwordConfirm"
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
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
              <p className="mt-5">
                {" "}
                Password must contain at least one special char, one number and
                minimum length 8 character
              </p>
              {!passwordsMatch && (
                <p className="mt-3 text-red-700">
                  Passwords do not match or do not meet the requirements
                </p>
              )}
              <Button
                className="my-[50px] w-full h-[56px] flex justify-center items-center bg-gurugeeks-orange-500 hover:bg-gurugeeks-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? <Spinner /> : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
