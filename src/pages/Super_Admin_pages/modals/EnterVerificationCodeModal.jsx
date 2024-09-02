import React, { useState } from "react";
import SideModalContainer from "../../../components/SuperAdmin_components/SideModalcontainer/SideModalContainer";
// CodeVerification.js
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/_common/Spinner";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";
import { useSelector } from "react-redux";
import { MODALS } from "../../../constants/modals.constant";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import { openModalByName } from "../../../features/common/modals/modals.slice";
import { useDispatch } from "react-redux";
import {
  Button,
  MiddleModalContainer,
} from "../../../components/SuperAdmin_components";
import AccountVerifiedModal from "./AccountVerifiedModal";

// import Button from "../../../components/common/Button/Button";

const EnterVerificationCodeModal = ({ isOpen }) => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModalsSlice);
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [verificationdetails, setVerificationDetails] = useState({
    email: email,
    confirmation_code: verificationCode,
  });

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newDigits = [...verificationCode];
      newDigits[index] = value;
      setVerificationCode(newDigits);
      setVerificationDetails((prevDetails) => ({
        ...prevDetails,
        confirmation_code: newDigits.join(""),
      }));

      // Shift focus to the next input
      if (value !== "" && index < 5) {
        document.getElementById(`input-${index + 1}`).focus();
      }
    }
  };

  const handleInputKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && verificationCode[index] === "") {
      // Move focus to the previous input and clear its value
      document.getElementById(`input-${index - 1}`).focus();
      const newDigits = [...verificationCode];
      newDigits[index - 1] = "";
      setVerificationCode(newDigits);
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    // if (!verificationdetails.confirmation_code) {
    //   return toast.error("Enter Code");
    // } else {
    //   setIsLoading(true);
    //   try {
    //     const response = await axiosInstance.post(
    //       "/accounts/verify",
    //       verificationdetails
    //     );
    //     if (response.status === 200 && response.data.status_code === 200) {
    //       setIsLoading(false);
    //       localStorage.removeItem("email");
    dispatch(openModalByName(MODALS.SUPER_ADMIN.TENANTS.ACCOUNT_VERIFIED));
    //     }
    //     ;
    //   } catch (error) {
    //     setIsLoading(false);
    //     ;
    //     return error;
    //   }
    // }
  };

  const handleResendCode = async () => {
    // try {
    //   const response = await axiosInstance.post(
    //     "accounts/resend/verification_code",
    //     { email: email }
    //   );
    //   ;
    // } catch (error) {
    //   setIsLoading(false);
    //   ;
    // }
  };

  return (
    <MiddleModalContainer title="Enter Code">
      <div className="bg-[] flex items-center justify-center w-full">
        <div className="flex items-center justify-center">
          <div className="bg-white h-[456px] px-[100px] rounded-xl">
            <h1 className="text-[24px] text-center mb-1 font-semibold">
              Verify Your Account
            </h1>
            <h2 className="text-center pb-2">
              Enter the verification code sent to{" "}
              <span className="text-lg text-gurugeeks-orange-700 font-bold">
                {email}
              </span>
            </h2>
            <form className="my-6" onSubmit={handleVerification}>
              <div className="flex items-center justify-center gap-x-4">
                {verificationCode.map((digit, index) => {
                  return (
                    <input
                      id={`input-${index}`}
                      onKeyDown={(e) => {
                        // Prevent default behavior for non-digit keys
                        if (!/^\d$/.test(e.key)) {
                          e.preventDefault();
                        }

                        // Handle backspace key
                        if (e.key === "Backspace") {
                          handleInputKeyDown(e, index);
                        }
                      }}
                      key={index}
                      className="h-[80px] w-[80px] border-2 rounded-lg text-center flex items-center justify-center text-[16px] font-bold focus:outline-2 focus:outline-gurugeeks-orange-700"
                      type="text"
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleChange(e, index)}
                    />
                  );
                })}
              </div>
              <div className="flex flex-col items-center justify-center my-4 text-center">
                <Button
                  className="mt-[50px] flex justify-center items-center bg-gurugeeks-orange-500 hover:bg-gurugeeks-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
                  color={"primary"}
                  type="submit"
                  onClick={handleVerification}
                >
                  {isLoading ? <Spinner /> : "Verify Account"}
                </Button>
                <p
                  onClick={() => {
                    handleResendCode();
                  }}
                  className="mt-5"
                >
                  Didn't receive code?{" "}
                  <span className=" font-bold text-gurugeeks-orange-700 cursor-pointer">
                    Resend Code{" "}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default EnterVerificationCodeModal;
