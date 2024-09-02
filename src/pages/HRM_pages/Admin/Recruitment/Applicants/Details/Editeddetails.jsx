import React from "react";
import { CustomInput } from "../../../../../../components/HRM_components";
import CustomDropdown from "../../../../../../components/HRM_components/_common/CustomDropDown";

const Editeddetails = ({ applicantData, setApplicantData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicantData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleDropDownSelect = (name, selectedOption) => {
    setApplicantData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  return (
    <div>
      <form>
        <div className="grid grid-cols-2 gap-4 justify-between item-center py-4 px-4">
          <div className="w-full">
            <CustomInput
              label="First Name"
              type="text"
              name="first_name"
              value={applicantData?.first_name}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomInput
              label="Last Name"
              type="text"
              name="last_name"
              value={applicantData?.last_name}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col">
            <CustomDropdown
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
              label="Gender"
              onSelect={(selectedOption) => {
                handleDropDownSelect("gender", selectedOption);
              }}
            />
          </div>

          <div className="w-full">
            <CustomInput
              label="Phone No"
              type="text"
              name="phone"
              value={applicantData?.phone}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomInput
              label="Email"
              type="email"
              name="email"
              value={applicantData?.email}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <CustomInput
              label="Last Name"
              type="text"
              name="last_name"
              value={applicantData?.location}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Editeddetails;
