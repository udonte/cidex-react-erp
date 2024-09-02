import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import {
  getPositions,
  postPositions,
} from "../../../../../features/HRM_features/organisation/positions/position.slice";
import CustomInput from "../../../_common/CustomInput";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import Button from "../../../_common/Button/Button";

const AddDesignation = () => {
  const dispatch = useDispatch();
  const closeModals = () => dispatch(closeAllModals());

  const [positionDetails, setPositionDetails] = useState({
    name: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPositionDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPositions(positionDetails))
      .unwrap()
      .then((payload) => {
        if (payload.created_at && payload.id) {
          dispatch(getPositions());
          dispatch(closeAllModals());
          toast.success("Designation has been created.");
        }
      });
  };

  return (
    <MiddleModalContainer title="Add Designation">
      <div className="px-8 py-4 w-[600px] h-full">
        <form onSubmit={handleSubmit}>
          <div className=" mt-5">
            <label> Designation </label>
            <CustomInput
              placeholder={"e.g. Manager"}
              name="name"
              value={positionDetails.name}
              type={"text"}
              handleInputChange={handleOnChange}
            />
          </div>

          <div className="flex items-center mt-10 w-full gap-5 justify-end">
            <Button onClick={closeModals}>Cancel</Button>
            <Button type={"submit"}>Save</Button>
          </div>
        </form>
      </div>
    </MiddleModalContainer>
  );
};

export default AddDesignation;
