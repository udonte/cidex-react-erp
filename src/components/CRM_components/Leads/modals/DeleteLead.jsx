import React from "react";

import { useDispatch } from "react-redux";
import MiddleModalContainer from "../../../MiddleModalContainer";
import Button from "../../common/Button/Button";

const DeleteLead = () => {
  const dispatch = useDispatch();
  return (
    <MiddleModalContainer title="Delete Lead">
      <div className="w-[400px] px-8 py-12">
        <div className="text-center text-gray-500">
          <p className="text-sm">Are you sure you want to delete this Lead </p>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4">
          <Button
            color={"secondary"}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default DeleteLead;
