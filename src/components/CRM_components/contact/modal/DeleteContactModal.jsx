import React from "react";

import Button from "../../common/Button/Button";
import MiddleModalContainer from "../../common/MiddleModalContainer";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  fetchContact,
} from "../../../../features/CRM_features/contactManagement/contact.slice";
import { closeAllModals } from "../../../../features/common/modals/modals.slice";
import { useSelector } from "react-redux";
import { selectContactsSlice } from "../../../../features/CRM_features/contactManagement/contact.selector";
import { Spinner } from "../../../HRM_components";

const DeleteContactModal = ({ customerId }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectContactsSlice);
  return (
    <MiddleModalContainer title="Delete Contact">
      <div className="w-[400px] px-8 py-12">
        <div className="text-center text-gray-500">
          <p className="text-sm">Are you sure you want to delete this </p>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4">
          <Button
            color={"secondary"}
            size={"lg"}
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeAllModals());
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteContact(customerId))
                .unwrap()
                .then((payload) => {
                  console.log(payload);
                  if (payload?.status === 200) {
                    dispatch(closeAllModals());
                    dispatch(fetchContact());
                  }
                });
            }}
            className={"bg-red-600"}
            size={"lg"}
          >
            {isLoading ? (
              <div className="w-full text-center">
                <Spinner />
              </div>
            ) : (
              " Delete"
            )}
          </Button>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default DeleteContactModal;
