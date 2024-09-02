import React from "react";
import { MdCheckCircle } from "react-icons/md";

const ResetSuccessful = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center w-full h-full ">
      <div className="flex justify-center items-center rounded-full p-4 bg-orange-100">
        {" "}
        <MdCheckCircle color="#C55514" size={35} />{" "}
      </div>
      <h1 className="text-4xl font-bold">Reset Successful</h1>
      <p className="my-5 w-2/5 px-4">
        Congratulations!!! Your password reset was successful. Click on continue
        to login to your account
      </p>
      <div className="w-2/5">
        <button className="outline-none m-2 text-white w-4/5 bg-gurugeeks-orange-500 py-1 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResetSuccessful;
