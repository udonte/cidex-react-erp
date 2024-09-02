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
import { MdCloudDone } from "react-icons/md";

const AccountVerifiedModal = () => {
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
      <div className=" p-8">
        <div className="flex items-center justify-center">
          <MdCloudDone size={150} color="#C55514" />
        </div>
        <div className="text-center mt-4">
          <p className="text-2xl font-bold">Account Verified</p>
          <span className="text-sm">
            Your account has successfully been verified. You can proceed to make
            your payment now.
          </span>
        </div>
        <div className="flex items-center justify-center mt-12">
          <Button
            onClick={(e) => {
              e.preventDefault();
              // dispatch(
              //   openModalByName(
              //     MODALS.SUPER_ADMIN.TENANTS.ENTER_VERIFICATION_CODE
              //   )
              // );
            }}
            size={"lg"}
          >
            Proceed to make payment
          </Button>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default AccountVerifiedModal;
