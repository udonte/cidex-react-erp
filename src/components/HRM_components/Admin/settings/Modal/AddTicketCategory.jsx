import React, { useState } from "react";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import CustomInput from "../../../_common/CustomInput";
import Button from "../../../_common/Button/Button";
import { useDispatch } from "react-redux";
import {
  addHelpdeskCategory,
  fetchHelpdeskCategory,
} from "../../../../../features/HRM_features/settings/settings.slice";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";

const AddTicketCategory = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    name: "",
  });

  const handleCreateCategory = () => {
    dispatch(addHelpdeskCategory(category))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchHelpdeskCategory());
          dispatch(closeAllModals());
        }
      });
  };
  return (
    <div>
      <MiddleModalContainer title="Ticket Category">
        <div className="m-7">
          <CustomInput
            value={category.name}
            name={"name"}
            label={"Category Name"}
            handleInputChange={(e) => {
              const { name, value } = e.target;
              setCategory((prev) => ({ prev, [name]: value }));
            }}
          />
          <div className="flex gap-x-3 mt-3 justify-end">
            <Button color={"secondary"}>Cancel</Button>
            <Button
              onClick={() => {
                handleCreateCategory();
              }}
            >
              Create
            </Button>
          </div>
        </div>
      </MiddleModalContainer>
    </div>
  );
};

export default AddTicketCategory;
