import React, { useState } from "react";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import CustomInput from "../../../_common/CustomInput";
import Button from "../../../_common/Button/Button";
import { useDispatch } from "react-redux";

const AddNewStageLeave = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    name: "",
  });

  const handleCreateStage = () => {
    // dispatch(addHelpdeskCategory(category));
  };
  return (
    <div>
      <MiddleModalContainer title="Leave Status">
        <div className="m-7">
          <CustomInput
            value={category.name}
            name={"name"}
            label={"Status Name"}
            handleInputChange={(e) => {
              const { name, value } = e.target;
              setCategory((prev) => ({ prev, [name]: value }));
            }}
          />
          <div className="flex gap-x-3 mt-3 justify-end">
            <Button color={"secondary"}>Cancel</Button>
            <Button
              onClick={() => {
                handleCreateStage();
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

export default AddNewStageLeave;
