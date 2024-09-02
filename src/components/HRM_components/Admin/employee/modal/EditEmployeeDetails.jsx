 import React, { useEffect } from "react";
import Button from "../../../_common/Button/Button";
import CustomInput from "../../../_common/CustomInput";
import EmployeeSearchDropdown from "../../../_common/EmployeeSearchDropdown";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../../../../../features/HRM_features/employee/employee.slice";

const EditEmployeeDetails = ({ editedEmployeeData, setEditedEmployeeData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmployeeSelect = (selectedOption) => {
    // setEditedEmployeeData((prevState) => ({
    //   ...prevState,
    //   manager_ids: [selectedOption],
    // }));
  };

  
  return (
    <div className="py-2 px-4">
      <div className="mb-6">
        <EmployeeSearchDropdown callback={handleEmployeeSelect} />
      </div>
      <div className="w-full flex flex-col mb-4">
        <CustomInput
          label="First Name"
          type="text"
          name="first_name"
          handleInputChange={handleInputChange}
          value={editedEmployeeData.first_name}
        />
      </div>

      <div className="w-full flex flex-col mb-4">
        <CustomInput
          label="First Name"
          type="text"
          name="first_name"
          handleInputChange={handleInputChange}
          value={editedEmployeeData.first_name}
        />
      </div>
      <div className="w-full flex flex-col mb-4">
        <CustomInput
          label="First Name"
          type="text"
          name="first_name"
          handleInputChange={handleInputChange}
          value={editedEmployeeData.first_name}
        />
      </div>
      <div className="w-full flex flex-col mb-4">
        <CustomInput
          label="First Name"
          type="text"
          name="first_name"
          handleInputChange={handleInputChange}
          value={editedEmployeeData.first_name}
        />
      </div>
      <div className="w-full flex flex-col mb-4">
        <CustomInput
          label="First Name"
          type="text"
          name="first_name"
          handleInputChange={handleInputChange}
          value={editedEmployeeData.first_name}
        />
      </div>

      <div className="w-full flex flex-col mb-4">
        <CustomInput
          label="First Name"
          type="text"
          name="first_name"
          handleInputChange={handleInputChange}
          value={editedEmployeeData.first_name}
        />
      </div>
      <div className="w-full flex flex-col mb-4">
        <CustomInput
          label="First Name"
          type="text"
          name="first_name"
          handleInputChange={handleInputChange}
          value={editedEmployeeData.first_name}
        />
      </div>
    </div>
  );
};

export default EditEmployeeDetails;
