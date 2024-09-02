import React, { useEffect, useState } from "react";
import MiddleModalContainer from "../../common/MiddleModalContainer";
import Checkbox from "../../common/Checkbox/Checkbox";
import CustomRadioButton from "../../common/CustomRadioButton/CustomRadioButton";
import Button from "../../common/Button/Button";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import EmployeeSearchDropdown from "../EmployeeSearchDropdown";
import { fetchEmployees } from "../../../../features/HRM_features/employee/employee.slice";
import { useDispatch } from "react-redux";
import { selectEmployeeSlice } from "../../../../features/HRM_features/employee/employee.selector";
import { useSelector } from "react-redux";
import { closeAllModals } from "../../../../features/common/modals/modals.slice";
import CustomInput from "../../../_common/CustomInput";
import CustomDropDown from "../../common/CustomDropDown";
import { MdCancel, MdNote } from "react-icons/md";

const AssignTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employees } = useSelector(selectEmployeeSlice);
  const [addDescription, setAddDescription] = useState(false);
  const [formData, setFormData] = useState({
    manager_ids: null,
    title: "",
    priority: "",
    type: "",
    due_date: "",
    note: "",
  });

  const handleEmployeeSelect = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      manager_ids: [selectedOption],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
    console.log(formData);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    console.log(formattedDate);
    setFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeAllModals();
    console.log(FormData);
  };

  useEffect(() => {
    console.log(employees);
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div>
      <MiddleModalContainer title="Assign Task">
        <div className="px-8 py-4 flex flex-col gap-3 w-[500px]">
          <div>
            <label htmlFor="" className="mb-2 text-sm font-bold">
              Assign To:<sup className="text-gurugeeks-green-700">*</sup>
            </label>
            <EmployeeSearchDropdown callback={handleEmployeeSelect} />
          </div>
          <div className="w-full">
            <CustomInput
              label="Title"
              type="text"
              name="title"
              handleInputChange={handleInputChange}
              value={FormData.title}
            />
          </div>
          <div className="w-full">
            <CustomDropDown
              label="Type"
              placeHolder="Choose Type"
              onSelect={(selectedOption) =>
                handleDropDownSelect("type", selectedOption)
              }
            />
          </div>
          <div className="w-full">
            <CustomDropDown
              label="Priority"
              placeHolder="Select Priority"
              onSelect={(selectedOption) =>
                handleDropDownSelect("type", selectedOption)
              }
            />
          </div>
          <div className="w-full flex-col">
            <label htmlFor="purchase_date">Due Date</label>
            <input
              className="w-full border rounded focus:outline-2 bg-gray-100 px-4 h-[45px] border-b-2  py-2 hover:bg-gray-100 cursor-pointer"
              type="date"
              name="due_date"
              value={formData.due_date}
              onChange={handleDateChange}
            />
          </div>

          <div>
            {addDescription ? (
              ""
            ) : (
              <div
                className="flex items-center gap-2 cursor-pointer mb-2"
                onClick={() => setAddDescription(!addDescription)}
              >
                <BiPlus size={25} className="text-gurugeeks-green-700" />
                <label className="text-gurugeeks-green-700 font-bold cursor-pointer">
                  Add Description
                </label>
              </div>
            )}
            {addDescription && (
              <div className="w-full">
                <div className="flex items-center justify-between text-gray-600 py-1 px-2">
                  <div className="flex items-center gap-2">
                    <MdNote />
                    <p>Note</p>
                  </div>
                  <div
                    onClick={() => setAddDescription(!addDescription)}
                    className="ml-auto hover:text-red-700"
                  >
                    <MdCancel />
                  </div>
                </div>
                <textarea
                  className={`p-3 w-full min-h-14 border bg-slate-50 rounded-md`}
                  name="description"
                  value={formData.description}
                  rows="4"
                  cols="15"
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-end gap-4 mt-8">
            <Button
              onClick={handleSubmit}
              className={"secondary"}
              size={"lg"}
              color={"red"}
            >
              Create Task
            </Button>
          </div>
        </div>
      </MiddleModalContainer>
    </div>
  );
};

export default AssignTask;
