import React, { useState } from "react";
import Modal from "../../../../_common/ModalContainer/ModalConatiner";
import CustomInput from "../../../../_common/CustomInput";
import CustomDropdown from "../../../../_common/CustomDropDown";
import EmployeeSearchDropdown from "../../../../_common/EmployeeSearchDropdown";
import { useDispatch } from "react-redux";
import Button from "../../../../_common/Button/Button";
import { closeAllModals } from "../../../../../../features/common/modals/modals.slice";
import {
  createEmployeeTask,
  fetchEmployeeTask,
} from "../../../../../../features/HRM_features/performance/goals/goals.slice";

const CreateTask = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    title: "",
    duedate: "",
    assign_to_id: "",
    priority: "",
    description: "",
  });

  const priorityOptions = [
    { value: "urgent", label: "Urgent" },
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
  ];

  const handleDropdownSelect = (name, selectedOption) => {
    setTaskData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEmployeeSelect = (selectedOption) => {
    setTaskData((prevState) => ({
      ...prevState,
      assign_to_id: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployeeTask(taskData))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchEmployeeTask());
          dispatch(closeAllModals());
        }
      });
  };

  return (
    <div>
      <Modal title={"Task"} width="sm" isOpen={isOpen}>
        <div className="p-6 ">
          <form onSubmit={handleSubmit}>
            <div className=" space-y-3">
              <CustomInput
                value={taskData.title}
                name={"title"}
                handleInputChange={handleOnChange}
                label={"Title"}
              />
              <CustomInput
                value={taskData.duedate}
                name={"duedate"}
                type={"date"}
                handleInputChange={handleOnChange}
                label={"Due Date*"}
              />
              <div className="w-full">
                <EmployeeSearchDropdown callback={handleEmployeeSelect} />
              </div>
              <CustomDropdown
                onSelect={(selectedOption) => {
                  handleDropdownSelect("priority", selectedOption);
                }}
                options={priorityOptions}
                label={"Priority"}
              />
              <CustomInput
                value={taskData.description}
                name={"description"}
                type={"textarea"}
                label={"Description*"}
                handleInputChange={handleOnChange}
              />
            </div>
            <div>
              <Button type={"submit"}>Create</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateTask;
