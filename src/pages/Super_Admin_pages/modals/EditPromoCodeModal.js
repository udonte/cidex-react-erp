import React, { useState } from "react";

import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SideModalContainer from "../../../components/SuperAdmin_components/SideModalcontainer/SideModalContainer";
import CustomDropdown from "../../../components/SuperAdmin_components/CustomDropDown";
import Button from "../../../components/SuperAdmin_components/common/Button/Button";
import {
  closeAllModals,
  openModalByName,
} from "../../../features/common/modals/modals.slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../constants/modals.constant";
import VerifyAccountModal from "./VerifyAccountModal";

const EditCodeModal = ({ isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    marketer_name: "",
    promo_code: "",
    start_date: "",
    expiry_date: "",
    status: "",
  });

  // const assigneeData = [
  //   { value: "samuel_jason", label: "Samuel Jason" },
  //   { value: "jack_jason", label: "Jack Jason" },
  //   { value: "peace_jason", label: "Peace Jason" },
  // ];

  // const priorityOptions = [
  //   { value: "low", label: "Low" },
  //   { value: "normal", label: "Normal" },
  //   { value: "high", label: "High" },
  // ];

  const statusOptions = [
    { value: "low", label: "Low" },
    { value: "pending", label: "Pending" },
    { value: "Active", label: "Active" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleCheckboxChange = (checkboxName) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [checkboxName]: !prevState[checkboxName],
  //   }));
  // };

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
    closeAllModals();
  };
  return (
    <div>
      <SideModalContainer title={"Edit Code"} width="sm" isOpen={isOpen}>
        <form>
          <div className="py-4 px-8 h-screen overflow-y-scroll">
            <div className="w-full mb-4">
              <label htmlFor="customer">Marketer's Name</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="marketer_name"
                value={formData.marketer_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full mb-4">
              <label htmlFor="email_address">Promo Code</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="promo_code"
                value={formData.promo_code}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full mb-4">
              <label className="my-4 text-gray-700">Start Date</label>
              <input
                className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                type="date"
                placeholder="DD/MM/YYY"
                name="start_date"
                value={formData.start_date}
                onChange={handleDateChange}
              />
            </div>
            <div className="w-full mb-4">
              <label className="my-4 text-gray-700">Expiry Date</label>
              <input
                className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                type="date"
                placeholder="DD/MM/YYY"
                name="expiry_date"
                value={formData.expiry_date}
                onChange={handleDateChange}
              />
            </div>
            <div className="w-full mb-4">
              <CustomDropdown
                label="Status"
                options={statusOptions}
                onSelect={(selectedOption) => {
                  handleDropdownSelect("status", selectedOption);
                }}
              />
            </div>

            <div className="w-full mt-4">
              <Button onClick={handleSubmit} size={"lg"}>
                Generate Code
              </Button>
            </div>
          </div>
        </form>
      </SideModalContainer>
    </div>
  );
};

export default EditCodeModal;
