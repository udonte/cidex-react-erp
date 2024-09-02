import React, { useState } from "react";
import CRMSideModalContainer from "../../common/SideModalcontainer/SideModalContainer";
import Button from "../../common/Button/Button";
import CustomDropdown from "../../common/CustomDropDown";
import { CheckBox } from "../..";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CaptureLeadsModal = ({ isOpen }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // {
    //   "name": "george",
    //   "email": "george@example.com",
    //   "phone_number": "090988776543",
    //   "status_id": "065e098848f77fa08000d06a0d7d4dcb",
    //   "source_id": "065e098d433a72668000b131ba44da12"
    // }
    name: "",
    email_address: "",
    phone_number: "",
    source_id: "",
    status_id: "",
  });

  const contactData = [
    { value: "samuel_jason", label: "Samuel Jason" },
    { value: "jack_jason", label: "Jack Jason" },
    { value: "peace_jason", label: "Peace Jason" },
  ];

  const leadOwnersData = [
    { value: "samuel_jason", label: "Samuel Jason" },
    { value: "jack_jason", label: "Jack Jason" },
    { value: "peace_jason", label: "Peace Jason" },
  ];

  const leadSourceData = [
    { value: "samuel_jason", label: "Samuel Jason" },
    { value: "jack_jason", label: "Jack Jason" },
    { value: "peace_jason", label: "Peace Jason" },
  ];

  const statusOptions = [
    { value: "pending", label: "Low" },
    { value: "normal", label: "Normal" },
    { value: "high", label: "High" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (checkboxName) => {
    setFormData((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  const handleDropdownSelect = (name, selectedOption) => {
    setFormData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <CRMSideModalContainer title={"Capture Lead"} width="sm" isOpen={isOpen}>
        <form>
          <div className="py-4 px-8 h-screen overflow-y-scroll">
            {/* contact name */}
            <div className="w-full pt-2 mb-2">
              <CustomDropdown
                onSelect={(selectedOption) => {
                  handleDropdownSelect("name", selectedOption);
                }}
                options={contactData}
                label="Contact Name"
                placeHolder="Select Customer"
              />
            </div>
            {/* lead owner */}

            {/* email address */}
            <div className="w-full mb-2">
              <label htmlFor="email_address">Email Address</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="email_address"
                value={formData.email_address}
                onChange={handleInputChange}
                placeholder="Enter email address"
              />
            </div>
            {/* enter phone number */}
            <div className="w-full mb-2">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </div>
            {/* lead source */}
            <div className="w-full pt-2 mb-2">
              <CustomDropdown
                onSelect={(selectedOption) => {
                  handleDropdownSelect("source_id", selectedOption);
                }}
                options={leadSourceData}
                label="Lead Source"
                placeHolder="Enter lead source"
              />
            </div>
            <div className="w-full pt-2 mb-2">
              <CustomDropdown
                onSelect={(selectedOption) => {
                  handleDropdownSelect("status_id", selectedOption);
                }}
                options={statusOptions}
                label="Lead Status"
                placeHolder="Enter lead status"
              />
            </div>

            <div className="flex justify-end items-center px-8">
              <Button onClick={handleSubmit}>Capture Lead</Button>
            </div>
          </div>
        </form>
      </CRMSideModalContainer>
    </div>
  );
};

export default CaptureLeadsModal;
