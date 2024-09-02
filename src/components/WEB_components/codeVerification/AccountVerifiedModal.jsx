import React from "react";
import MiddleModalContainer from "../../MiddleModalContainer";
import { GoVerified } from "react-icons/go";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const AccountVerifiedModal = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MiddleModalContainer title=" ">
        <div className="px-10 py-10 flex flex-col items-center justify-center">
          <GoVerified className="text-[#4CB10E] text-[100px]" />
          <div className="w-[500px] flex items-center justify-center flex-col text-center my-8">
            <h1 className=" font-semibold text-2xl my-5">Account Verified</h1>
            <p>
              Your account has successfully been verified. You can proceed to
              sign in to your account.
            </p>
          </div>
          <Button
            onClick={() => {
              navigate("/web/login");
            }}
            size={"lg"}
          >
            Proceed to Sign In
          </Button>
        </div>
      </MiddleModalContainer>
    </div>
  );
};

export default AccountVerifiedModal;
