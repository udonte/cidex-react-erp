import React, { useState } from "react";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import CustomInput from "../../../_common/CustomInput";
import Button from "../../../_common/Button/Button";
import { useDispatch } from "react-redux";
import {
  addRecruitmentStage,
  fetchRecruitmentStage,
} from "../../../../../features/HRM_features/settings/settings.slice";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";

const AddNewStageRecruitment = () => {
  const dispatch = useDispatch();
  const [stage, setStage] = useState({
    name: "",
  });

  const handleCreateStage = () => {
    dispatch(addRecruitmentStage(stage))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchRecruitmentStage());
          dispatch(closeAllModals());
        }
      });
  };

  return (
    <div>
      <MiddleModalContainer title="New Stage">
        <div className="m-7">
          <CustomInput
            value={stage.name}
            name={"name"}
            label={"Stage Name"}
            handleInputChange={(e) => {
              const { name, value } = e.target;
              setStage((prev) => ({ prev, [name]: value }));
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

export default AddNewStageRecruitment;
