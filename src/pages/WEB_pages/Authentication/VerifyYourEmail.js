import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { getItemFromLocalStorage } from "../../../utils/helperFunctions/localStorage"

const VerifyYourEmail = () => {
  const email = getItemFromLocalStorage("email");
  return (
    <div className="px-10 py-10 flex flex-col items-center justify-center h-screen">
      <div className="w-[500px] flex items-center justify-center flex-col text-center my-8">
        <FaThumbsUp className="text-[#4CB10E] text-[100px]" />

        <h1 className=" font-semibold text-2xl my-5">Verify Your Email</h1>
        <p>
          Password reset instructions have been sent to your email address
          <br />
          If an account with {<span className="text-lg text-gurugeeks-orange-700 font-bold">
            {String(email)}.
          </span>} exists we will send an email with a reset password link.
        </p>
      </div>
    </div>
  );
};

export default VerifyYourEmail;
