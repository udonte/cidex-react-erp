import React from "react";
import {
  Button,
  MiddleModalContainer,
} from "../../../components/SuperAdmin_components";
import OrangeStrip from "../../../assets/orange rectangle with a password.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import {
  closeAllModals,
  openModalByName,
} from "../../../features/common/modals/modals.slice";
import { MODALS } from "../../../constants/modals.constant";
import EnterVerificationCodeModal from "./EnterVerificationCodeModal";

const VerifyAccountModal = () => {
  const dispatch = useDispatch();

  const handleOnClickVerification = (e) => {
    e.preventDefault();
    closeAllModals();
    dispatch(
      openModalByName(MODALS.SUPER_ADMIN.TENANTS.ENTER_VERIFICATION_CODE)
    );
  };
  return (
    <MiddleModalContainer title="">
      <div className="w-[400px] p-8 ">
        <div className="flex items-center justify-center">
          <img src={OrangeStrip} alt="orange strip" />
        </div>
        <div className="text-center mt-8">
          <p className="text-2xl font-bold">Verify your Account</p>
          <span className="text-sm">
            A verification code will be sent to your email address
          </span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                openModalByName(
                  MODALS.SUPER_ADMIN.TENANTS.ENTER_VERIFICATION_CODE
                )
              );
            }}
            size={"lg"}
          >
            Enter Verification Code
          </Button>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default VerifyAccountModal;
