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

const AddTenantsModals = ({ isOpen }) => {
  const dispatch = useDispatch();
  const openVerifyAccountModal = useSelector(selectModalsSlice);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    email_address: "",
    password: "",
    confirm_password: "",
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

  // const statusOptions = [
  //   { value: "pending", label: "Low" },
  //   { value: "normal", label: "Normal" },
  //   { value: "high", label: "High" },
  // ];

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

  // const handleDropdownSelect = (name, selectedOption) => {
  //   setFormData((prevState) => ({ ...prevState, [name]: selectedOption }));
  // };

  // const handleDateChange = (e) => {
  //   const { name, value } = e.target;
  //   const dateValue = new Date(value);
  //   const formattedDate = dateValue.toISOString().split("T")[0];
  //   setFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeAllModals();
    dispatch(openModalByName(MODALS.SUPER_ADMIN.TENANTS.VERIFY_ACCOUNT));
  };
  return (
    <div>
      <SideModalContainer title={"Add Tenant"} width="sm" isOpen={isOpen}>
        <form>
          <div className="py-4 px-8 h-screen overflow-y-scroll">
            <div className="w-full mb-2">
              <label htmlFor="customer">Company Name</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                name="company"
                value={formData.company}
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
              <label htmlFor="subject">Password</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full mb-2">
              <label htmlFor="subject">Confirm Password</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full mt-4">
              <Button onClick={handleSubmit} size={"lg"}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </SideModalContainer>

      {openVerifyAccountModal[MODALS.SUPER_ADMIN.TENANTS.VERIFY_ACCOUNT] && (
        <VerifyAccountModal />
      )}
    </div>
  );
};

export default AddTenantsModals;
