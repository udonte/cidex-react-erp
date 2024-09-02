import React, { useState } from "react";
import CustomCheckboxDropdown from "./CustomCheckboxDropdown";
import CustomInput from "../../../../_common/CustomInput";
import Button from "../../../../_common/Button/Button";
import MiddleModalContainer from "../../../../_common/MiddleModalContainer/MiddleModalContainer";
import { closeAllModals } from "../../../../../../features/common/modals/modals.slice";
import { useDispatch } from "react-redux";
import {
  createKPI,
  fetchKPI,
} from "../../../../../../features/HRM_features/performance/goals/goals.slice";

const CreateNewKpiModal = () => {
  const dispatch = useDispatch();
  const [KPIDetails, setKPIDetails] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createKPI(KPIDetails))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchKPI());
          dispatch(closeAllModals());
        }
      });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setKPIDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <MiddleModalContainer title="Create New KPI">
        <form onSubmit={handleSubmit} className="">
          <div className="bg-[#EAF1F3] w-[550px] px-9 py-2">
            <p>
              Use to measure your employee’s performance. Departments selected
              will have this KPI added to the metrics for it team’s assessment
            </p>
          </div>
          <div className="space-y-4 p-8 ">
            <CustomInput
              handleInputChange={handleOnChange}
              value={KPIDetails.name}
              name={"name"}
              label={"Name"}
              className={"w-[485px]"}
            />
            <CustomInput
              handleInputChange={handleOnChange}
              name={"description"}
              value={KPIDetails.description}
              label={"Description*"}
              className={"w-[485px]"}
            />
            <div className="flex justify-end items-center gap-x-3">
              <Button size={"lg"} color={"secondary"}>
                Cancel
              </Button>
              <Button type={"submit"} size={"lg"} color={"primary"}>
                Save
              </Button>
            </div>
          </div>
        </form>
      </MiddleModalContainer>
    </div>
  );
};

export default CreateNewKpiModal;
