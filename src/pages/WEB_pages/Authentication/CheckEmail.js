import React from "react";
import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center w-full h-full">
      <div className="flex justify-center items-center"></div>
      <h1 className="text-4xl font-bold">Check your email</h1>
      <p className="my-7 font-semibold">
        We sent a password reset link to your email
        bellingham@gurugeeksroyalty.biz
      </p>
      <p className="my-7 font-semibold">
        Didn't get the mail?
        <Link to="/web/login">
          <span className="text-gurugeeks-orange-500"> Resend mail</span>
        </Link>
      </p>
    </div>
  );
};

export default CheckEmail;
