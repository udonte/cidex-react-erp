import React, { useEffect, useState } from "react";
import MiddleModalContainer from "../../../../_common/MiddleModalContainer/MiddleModalContainer";
import CustomInput from "../../../../_common/CustomInput";
import CustomDropdown from "../../../../_common/CustomDropDown";
import Button from "../../../../_common/Button/Button";
import CheckboxDropDown from "../../../../_common/CheckboxDropdown";
import {
  createCompanyGoals,
  fetchGoalCycle,
} from "../../../../../../features/HRM_features/performance/goals/goals.slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectGoalSlice } from "../../../../../../features/HRM_features/performance/goals/goals.selector";
import CustomCheckboxDropdown from "../../settings/CreateNewKpiModal/CustomCheckboxDropdown";
import { closeAllModals } from "../../../../../../features/common/modals/modals.slice";

const CreateOganisationGoalModal = () => {
  const dispatch = useDispatch();
  const { goalCycle, isLoading } = useSelector(selectGoalSlice);
  const [objectiveData, setObjectiveData] = useState({
    name: "",
    description: "",
    cycle_ids: [""],
  });

  const onSelect = (name, selectedOptions) => {
    setObjectiveData((prevData) => ({
      ...prevData,
      [name]:
        selectedOptions.length > 0
          ? selectedOptions?.map((opt) => opt.value)
          : [],
    }));

    // You can perform additional actions with the selected options here
  };
  function handleInputChange(e) {
    const { name, value } = e.target;
    setObjectiveData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCompanyGoals(objectiveData))
      // .unwrap()
      // .then((payload) => {
      //   if (payload.id && payload.created_at) {
      //     dispatch();
      //     dispatch(closeAllModals());
      //   }
      // });

  };

  useEffect(() => {
    dispatch(fetchGoalCycle());
  }, []);

  return (
    <MiddleModalContainer title="Create Strategic Objective">
      <div className="w-[500px] space-y-6 p-6">
        <form onSubmit={handleSubmit}>
          <CustomInput
            label={"Goal Name"}
            value={objectiveData.name}
            name="name"
            handleInputChange={handleInputChange}
          />
          <CustomInput
            label={"Description*"}
            value={objectiveData.description}
            name="description"
            handleInputChange={handleInputChange}
          />
          <CustomCheckboxDropdown
            handleSelect={(selectedOption) => {
              onSelect("cycle_ids", selectedOption);
            }}
            label={"Select Cycle"}
            options={goalCycle?.map((items) => ({
              value: items.id,
              label: items.name,
            }))}
          />
          {/* <CheckboxDropDown
          label={"Select Cycle"}
          options={goalCycle?.map((items) => ({
            value: items.id,
            label: items.name,
          }))}
          onSelect={handleSelect}
        /> */}
          <div className="flex items-center justify-end gap-x-6">
            <Button color={"secondary"}>Cancel</Button>
            <Button type={"submit"}>Create</Button>
          </div>
        </form>
      </div>
    </MiddleModalContainer>
  );
};

export default CreateOganisationGoalModal;
