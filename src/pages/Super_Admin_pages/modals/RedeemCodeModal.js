import React from "react";
import {
  Button,
  MiddleModalContainer,
} from "../../../components/SuperAdmin_components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import {
  closeAllModals,
  openModalByName,
} from "../../../features/common/modals/modals.slice";
import { MODALS } from "../../../constants/modals.constant";
import EnterVerificationCodeModal from "./EnterVerificationCodeModal";
import { ToastContainer } from "react-toastify";

const RedeemCodeModal = () => {
  const dispatch = useDispatch();
  return (
    <MiddleModalContainer title="Redeem Code">
      <div className="w-[400px] px-8 py-12">
        <div className="text-center text-gray-500">
          <p className="text-sm">
            Are you sure you want to redeem the code{" "}
            <span className="font-bold">SIA234</span>?
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4">
          <Button
            color={"secondary"}
            onClick={(e) => {
              e.preventDefault();
              closeAllModals();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              closeAllModals();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default RedeemCodeModal;
