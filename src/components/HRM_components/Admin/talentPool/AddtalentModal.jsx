import React, { useState } from "react";
import CustomDropdown from "../../_common/CustomDropDown";
import CustomInput from "../../_common/CustomInput";
import Button from "../../_common/Button/Button";
import Modal from "../../_common/ModalContainer/ModalConatiner";
import { closeAllModals } from "../../../../features/common/modals/modals.slice";
import { useDispatch } from "react-redux";
import { addTalent } from "../../../../features/HRM_features/recruitment/talentPool/talentPool.slice";
import { useSelector } from "react-redux";
import { selectTalentSlice } from "../../../../features/HRM_features/recruitment/talentPool/talentPool.selector";
import { fetchApplicant } from "../../../../features/HRM_features/recruitment/applicants/applicants.slice";
import Spinner from "../../../_common/Spinner";

const AddTalentModal = ({ isOpen }) => {
  const { talents, isLoading } = useSelector(selectTalentSlice);
  const dispatch = useDispatch();
  const [talentData, setTalentData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    resume: "string",
    gender: "",
    location: "",
    cover_letter: "string",
    country: "",
    address: "",
  });

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  function handleInputChange(e) {
    const { name, value } = e.target;
    setTalentData((prevData) => ({ ...prevData, [name]: value }));
  }
  const handleDropdownSelect = (name, selectedOption) => {
    setTalentData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTalent(talentData));
    dispatch(fetchApplicant());
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileString = event.target.result; // The file content as a string
        setTalentData((prevData) => ({
          ...prevData,
          [name]: fileString,
        }));
      };

      // Read the selectedFile as text (string)
      reader.readAsText(file);
    } else {
      // Handle the case where the user clears the file input
      setTalentData((prevData) => ({
        ...prevData,
        [name]: "", // Clear the file content in the form data
      }));
    }
  };
  return (
    <Modal title={"Add Talent"} width="sm" isOpen={isOpen}>
      <form className=" h-[90%] overflow-y-scroll" onSubmit={handleSubmit}>
        <div className="flex flex-col h-full pb-[80px] space-y-5 p-6 overflow-y-scroll">
          <CustomInput
            name="first_name"
            value={talentData.first_name}
            type={"text"}
            handleInputChange={handleInputChange}
            label={"First Name"}
            required
          />
          <CustomInput
            name="last_name"
            value={talentData.last_name}
            type={"text"}
            handleInputChange={handleInputChange}
            label={"Last Name"}
            required
          />
          {/* <CustomDropdown label="Department" /> */}
          <CustomInput
            name="email"
            value={talentData.email}
            type={"text"}
            handleInputChange={handleInputChange}
            label={"Email"}
            required
          />
          <CustomInput
            name="phone"
            value={talentData.phone}
            type={"text"}
            handleInputChange={handleInputChange}
            label={"Phone number"}
          />
          <div className="w-full">
            <CustomDropdown
              label="Gender"
              onSelect={(selectedOption) => {
                handleDropdownSelect("gender", selectedOption);
              }}
              options={gender}
            />
          </div>
          <CustomInput
            name="location"
            value={talentData.location}
            type={"text"}
            handleInputChange={handleInputChange}
            label={"Location"}
          />
          <CustomInput
            name="address"
            value={talentData.address}
            type={"text"}
            handleInputChange={handleInputChange}
            label={"Address"}
          />
          <div className="my-3 flex gap-x-3 justify-between items-center">
            <div className="w-full flex flex-col">
              <label className="font-semibold">Upload a Resume:</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="my-3 flex gap-x-3 justify-between items-center">
            <div className="w-full flex flex-col">
              <label className="font-semibold">Upload a Cover Letter:</label>
              <input
                className="p-3 w-full h-14 border bg-slate-50 rounded-md"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* <CustomDropdown label="Email" /> */}
          <Button size={"lg"} type="submit">
            {isLoading ? (
              <div className="w-full flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <div className="w-full text-center"> Submit Talent details</div>
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTalentModal;
