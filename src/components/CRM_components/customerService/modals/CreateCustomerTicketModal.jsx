import React, { useState } from "react";
import CRMSideModalContainer from "../../common/SideModalcontainer/SideModalContainer";
import Button from "../../common/Button/Button";
import CustomDropdown from "../../common/CustomDropDown";
import { CheckBox } from "../..";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { EmployeeSearchDropdown } from "../../../HRM_components";

const CreateCustomerTicketModal = ({ isOpen }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    assignee: "",
    customer: "",
    subject: "",
    email_address: "",
    phone_no: "",
    prioriy: "",
    status: "",
    entry_date: "",
  });

  const assigneeData = [
    { value: "samuel_jason", label: "Samuel Jason" },
    { value: "jack_jason", label: "Jack Jason" },
    { value: "peace_jason", label: "Peace Jason" },
  ];

  const priorityOptions = [
    { value: "low", label: "Low" },
    { value: "normal", label: "Normal" },
    { value: "high", label: "High" },
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
  const handleEmployeeSelect = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
    }));
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
      <CRMSideModalContainer
        title={"Create Customer Ticket"}
        width="sm"
        isOpen={isOpen}
      >
        <form>
          <div className="py-4 pb-20 px-8 h-screen overflow-y-scroll">
            <div className="bg-gray-200 text-center py-4 rounded-md ">
              <p>Ticket ID: 234</p>
            </div>
            {/* search input */}
            <div className="w-full py-2 mb-2">
              <div className="flex items-top gap-x-2 mt-10 w-[80%]">
                <div className="flex  items-center w-[50%]">
                  <p className="font-semibold">Assign to:</p>
                </div>
                <div className="w-full">
                  <EmployeeSearchDropdown callback={handleEmployeeSelect} />
                </div>
              </div>
            </div>
            {/* end of search input */}
            <div className="w-full mb-2">
              <label htmlFor="customer">Customer</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="customer"
                value={formData.customer}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full mb-2">
              <label htmlFor="subject">Subject</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full mb-2">
              <label htmlFor="email_address">Email Address</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="email_address"
                value={formData.email_address}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full mb-2">
              <label htmlFor="phone_no">Phone Number</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="number"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full pt-2 mb-2">
              <CustomDropdown
                onSelect={(selectedOption) => {
                  handleDropdownSelect("priority", selectedOption);
                }}
                options={priorityOptions}
                label="Priority"
              />
            </div>
            <div className="w-full pt-2 mb-2">
              <CustomDropdown
                onSelect={(selectedOption) => {
                  handleDropdownSelect("status", selectedOption);
                }}
                options={statusOptions}
                label="Status"
              />
            </div>

            <div className="w-full pt-2 mb-2">
              <label htmlFor="entry_date">Entry Date</label>
              <input
                className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                type="date"
                placeholder="choose a date"
                name="entry_date"
                value={formData.entry_date}
                onChange={handleDateChange}
              />
            </div>

            <div className="flex justify-end items-center px-8">
              <Button onClick={handleSubmit}>Create Ticket</Button>
            </div>
          </div>
        </form>
      </CRMSideModalContainer>
    </div>
  );
};

export default CreateCustomerTicketModal;
