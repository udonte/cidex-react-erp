import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import RoundToggleButton from "../../../_common/RoundToggleButton";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import Button from "../../../_common/Button/Button";
import Checkbox from "../../../_common/Checkbox";
import CheckboxDropDown from "../../../_common/CheckboxDropdown";
import { getDepartments } from "../../../../../features/HRM_features/organisation/departments/departments.slice";
import { selectDepartment } from "../../../../../features/HRM_features/organisation/departments/department.selector";
import { useSelector } from "react-redux";
import {
  addLeaveType,
  fetchLeaveType,
} from "../../../../../features/HRM_features/leave/leave.slice";
import CustomInput from "../../../_common/CustomInput";

const AddLeaveType = () => {
  const { departments } = useSelector(selectDepartment);
  const [leaveTypeData, setleaveTypeData] = useState({
    name: "",
    total_days: "",
    first_approval: false,
    second_approval: true,
    all_employee: false,
    all_manager: false,
    only_group: false,
  });
  const dispatch = useDispatch();
  const closeModals = () => dispatch(closeAllModals());

  const handleRadioButtonCheck = (name) => {
    setleaveTypeData((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setleaveTypeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addLeaveType(leaveTypeData))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.info_id && payload.created_at) {
          dispatch(fetchLeaveType());
          dispatch(closeAllModals());
        }
      });
  };

  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  return (
    <MiddleModalContainer title="Add Leave Type">
      <div className="bg-white px-8 py-4 w-[850px] h-[500px] overflow-y-auto">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="flex flex-col w-full">
            <CustomInput
              label={"Leave type"}
              handleInputChange={handleInputChange}
              value={leaveTypeData.name}
              name={"name"}
            />
          </div>

          <div className="flex flex-col w-full">
            <CustomInput
              label={"Max leave count"}
              handleInputChange={handleInputChange}
              value={leaveTypeData.total_days}
              name={"total_days"}
            />
          </div>

          {/* approvel stages */}
          <div className="flex flex-col gap-4">
            <p className="text-[1.2rem]">Approval Stages</p>

            <div className="flex items-center justify-center">
              <div className="w-full flex items-center gap-8">
                <p>First Approval</p>
                <RoundToggleButton
                  handleOnClick={() => {
                    handleRadioButtonCheck("first_approval");
                  }}
                  activeState={leaveTypeData.first_approval}
                />
              </div>
              <div className="w-full flex items-center gap-8">
                <p>Second Approval</p>
                <RoundToggleButton
                  handleOnClick={() => {
                    handleRadioButtonCheck("second_approval");
                  }}
                  activeState={leaveTypeData.second_approval}
                />
              </div>
            </div>
          </div>

          {/* policy availability */}

          <div className="flex flex-col gap-4">
            <p className="text-[1.2rem]">Policy Changes</p>

            <div className="flex items-center justify-center">
              <div className="w-full flex items-center gap-4">
                <Checkbox
                  checked={leaveTypeData.all_employee}
                  handleOnchange={() => {
                    setleaveTypeData((prev) => ({
                      ...prev,
                      all_employee: !prev.all_employee,
                      only_group: false,
                    }));
                  }}
                />
                <p>Available to all Employees</p>
              </div>
              <div className="w-full flex items-center gap-4">
                <Checkbox
                  handleOnchange={() => {
                    setleaveTypeData((prev) => ({
                      ...prev,
                      only_group: !prev.only_group,
                      all_employee: false,
                    }));
                  }}
                  checked={
                    leaveTypeData.only_group === true &&
                    leaveTypeData.all_employee === false
                  }
                />
                <p>Available to some Groups</p>
              </div>
            </div>
            {leaveTypeData.only_group && (
              <CheckboxDropDown
                placeHolder={"none selected"}
                label={"Select groups"}
                options={departments?.map((items) => ({
                  value: items.id,
                  label: items.name,
                }))}
              />
            )}
          </div>

          <div className="flex items-center ml-auto gap-4">
            <Button onClick={closeModals} color={"gray"}>
              Cancel
            </Button>
            <Button type={"submit"}>Submit</Button>
          </div>
        </form>
      </div>
    </MiddleModalContainer>
  );
};

export default AddLeaveType;
