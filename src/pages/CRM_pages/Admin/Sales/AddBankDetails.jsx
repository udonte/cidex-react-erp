import React, { useState } from "react";
import SideModalContainer from "../../../../components/CRM_components/common/SideModalcontainer/SideModalContainer";
import CustomDropdown from "../../../../components/CRM_components/common/CustomDropDown";
import { Button } from "../../../../components/CRM_components";

const AddBankDetails = ({ isOpen, banks }) => {
  const [bankDetails, setBankDetails] = useState({
    account_name: "",
    bank_name: "",
    account_number: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setBankDetails((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const bankNames = [
  //   { value: "first_bank", label: "First Bank" },
  //   { value: "gtb", label: "Guaranteed Trust Bank" },
  // ];
  return (
    <div>
      <SideModalContainer width="sm" isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <div className="w-full mb-2">
              <label htmlFor="last_name">Account Name</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                placeholder="Enter Account Name"
                name="account_name"
                value={bankDetails.account_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex flex-col mb-2">
              <CustomDropdown
                label="Bank Name"
                options={banks?.map((bank) => ({
                  value: bank.name,
                  label: bank.name,
                  img: bank.logo,
                }))}
                onSelect={(selectedOption) => {
                  handleDropDownSelect("bank_name", selectedOption);
                }}
              />
            </div>
            <div className="w-full mb-2">
              <label htmlFor="last_name">Account Number</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="text"
                placeholder="Enter Account Number"
                name="account_number"
                value={bankDetails.account_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex items-center gap-4 mt-8">
              <Button type={"button"}>Cancel</Button>
              <Button color={"primary"} type={"button"}>
                Add Account
              </Button>
            </div>
          </div>
        </form>
      </SideModalContainer>
    </div>
  );
};

export default AddBankDetails;
