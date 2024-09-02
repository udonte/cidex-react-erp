import React, { useState } from "react";
import { toast } from "react-toastify";
import CustomDropdown from "../../../_common/CustomDropDown";
import Button from "../../../_common/Button/Button";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import EmployeeSearchDropdown from "../../../_common/EmployeeSearchDropdown";

const AddClaim = ({ isOpen }) => {
  const [claimFormData, setClaimFormData] = useState({
    title: "",
    submitted_date: "",
    claim_amount: 0,
    approved_amount: 0,
    attachment_url: "",
    category: "",
    approver_ids: [],
  });

  const areRequiredFieldsFilled = () => {
    return (
      claimFormData.description.trim() !== "" &&
      claimFormData.comment.trim() !== "" &&
      claimFormData.amount.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!areRequiredFieldsFilled()) {
      toast.error("Please fill in all required fields.");
    } else {
      // Submit form or perform further actions
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClaimFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setClaimFormData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  const handleExpenseClaimDate = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setClaimFormData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileString = event.target.result; // The file content as a string
        setClaimFormData((prevData) => ({
          ...prevData,
          file: fileString, // Corrected the field name to 'file'
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleEmployeeSelect = (selectedOption) => {
    setClaimFormData((prevState) => ({
      ...prevState,
      approver_ids: selectedOption,
    }));
  };

  const approver = [
    { label: "Ekundayo", value: "ekundayo" },
    { label: "Abolore", value: "abolore" },
  ];

  const category = [
    { label: "Short", value: "short" },
    { label: "Long", value: "long" },
  ];

  return (
    <Modal title={"Create Claim"} width="sm" isOpen={isOpen}>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="w-full flex flex-col">
          <div className="flex items-top gap-x-2">
            <div className="flex items-center justify-center">
              <p className="min-w-[150px] font-semibold">Select Approver:</p>{" "}
            </div>
            <EmployeeSearchDropdown callback={handleEmployeeSelect} />
          </div>
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="category">Category</label>{" "}
          {/* Corrected the 'for' attribute */}
          <CustomDropdown
            options={category}
            onSelect={(selectedOption) => {
              handleDropDownSelect("category", selectedOption);
            }}
          />
        </div>

        <div className="w-full flex-col">
          <label htmlFor="expense_claim_date">Expense Claim Date</label>
          <input
            className="w-full border rounded focus:outline-2 bg-gray-100 px-4 h-[45px] border-b-2  py-2 hover:bg-gray-100 cursor-pointer"
            type="date"
            name="expense_claim_date"
            value={claimFormData.expense_claim_date}
            onChange={handleExpenseClaimDate}
          />
        </div>

        <div className="w-full">
          <label htmlFor="description">Description</label>
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="description"
            value={claimFormData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full">
          <label htmlFor="comment">Comment(Options)</label>{" "}
          {/* Corrected the 'for' attribute */}
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="text"
            name="comment"
            value={claimFormData.comment}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="file">Upload a File:</label>{" "}
          {/* Corrected the 'for' attribute */}
          <input
            className="p-3 w-full h-14 border bg-slate-50 rounded-md"
            type="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex justify-center items-center gap-x-2 py-2 flex-1 text-center">
          <Button size={"lg"} type="submit" className="w-full text-center">
            Create Asset
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddClaim;
