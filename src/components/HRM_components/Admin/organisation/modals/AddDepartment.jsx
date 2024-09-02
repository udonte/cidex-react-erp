import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import {
  getDepartments,
  postDepartments,
} from "../../../../../features/HRM_features/organisation/departments/departments.slice";
import CustomInput from "../../../_common/CustomInput";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import Button from "../../../_common/Button/Button";
import EmployeeSearchDropdown from "../../../_common/EmployeeSearchDropdown";
import CustomCheckboxDropdown from "../../performance/settings/CreateNewKpiModal/CustomCheckboxDropdown";
import { fetchKPI } from "../../../../../features/HRM_features/performance/goals/goals.slice";
import { useSelector } from "react-redux";
import { selectGoalSlice } from "../../../../../features/HRM_features/performance/goals/goals.selector";
import { fetchEmployees } from "../../../../../features/HRM_features/employee/employee.slice";
import Spinner from "../../../../_common/Spinner";
import { selectDepartment } from "../../../../../features/HRM_features/organisation/departments/department.selector";
import { selectEmployeeSlice } from "../../../../../features/HRM_features/employee/employee.selector";

const AddDepartment = () => {
  const { employees } = useSelector(selectEmployeeSlice);
  const dispatch = useDispatch();
  const closeModals = () => dispatch(closeAllModals());
  const { KPI } = useSelector(selectGoalSlice);
  const { isLoading } = useSelector(selectDepartment);

  const [departmentDetails, setDepartmentDetails] = useState({
    name: "",
    color_code: "",
    manager_ids: null,
    kpi_ids: [],
  });

  const onSelect = (name, selectedOptions) => {
    setDepartmentDetails((prevData) => ({
      ...prevData,
      [name]:
        selectedOptions.length > 0
          ? selectedOptions?.map((opt) => opt.value)
          : [],
    }));

    // You can perform additional actions with the selected options here
  };

  useEffect(() => {
    dispatch(fetchKPI());
    dispatch(fetchEmployees());
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDepartmentDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEmployeeSelect = (selectedOption) => {
    setDepartmentDetails((prevState) => ({
      ...prevState,
      manager_ids: [selectedOption],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDepartments(departmentDetails))
      .unwrap()
      .then((payload) => {
        console.log(payload);
        if (payload?.id && payload?.created_at) {
          dispatch(getDepartments());
          dispatch(closeAllModals());
          toast.success("Department has been created.");
        }
      });
  };

  return (
    <MiddleModalContainer title="Add Department">
      <div className="px-8 py-4 w-[600px]  h-full">
        <form onSubmit={handleSubmit}>
          <div className=" mt-5">
            <CustomInput
              label={"Department Name"}
              placeholder={"e.g. Development"}
              name={"name"}
              value={departmentDetails.name}
              type={"text"}
              handleInputChange={handleOnChange}
            />
          </div>

          <div className=" mt-5">
            <CustomInput
              label={"Department Color"}
              name={"color_code"}
              value={departmentDetails.color_code}
              type={"color"}
              handleInputChange={handleOnChange}
            />
          </div>

          <div className="flex items-top gap-x-2 mt-10 w-full">
            <div className="flex  items-center w-[50%]">
              <p className=" font-semibold">Assign Manager:</p>
            </div>
            <div className="w-full">
              <EmployeeSearchDropdown callback={handleEmployeeSelect} />
            </div>
          </div>
          <div className=" mt-5">
            <CustomCheckboxDropdown
              handleSelect={(selectedOption) => {
                onSelect("kpi_ids", selectedOption);
              }}
              label={"Select Cycle"}
              options={KPI?.map((items) => ({
                value: items.id,
                label: items.name,
              }))}
            />
          </div>

          <div className="flex items-center mt-10 w-full gap-5 justify-end">
            <Button onClick={closeModals}>Cancel</Button>
            <Button size={"lg"} type="submit">
              {isLoading ? (
                <div className="w-14">
                  <Spinner />
                </div>
              ) : (
                "Save"
              )}
            </Button>{" "}
          </div>
        </form>
      </div>
    </MiddleModalContainer>
  );
};

export default AddDepartment;
