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

const CancelBillingModal = () => {
  const dispatch = useDispatch();
  return (
    <MiddleModalContainer title="Cancel Billing">
      <div className="w-[400px] p-4 ">
        <div className="text-center text-gray-500">
          <p className="text-sm">
            Tenant <span className="text-gray-900">Grand Fosters Inc</span>{" "}
            Billing for <span className="text-gray-900">Gold Plan</span>{" "}
            subscription will be canceled
          </p>
        </div>
        <div className="flex items-center justify-center mt-4 gap-4">
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

export default CancelBillingModal;
