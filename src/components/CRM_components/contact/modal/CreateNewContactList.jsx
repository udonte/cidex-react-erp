import React, { useState } from "react";
import MiddleModalContainer from "../../common/MiddleModalContainer";
import Checkbox from "../../common/Checkbox/Checkbox";
import CustomRadioButton from "../../common/CustomRadioButton/CustomRadioButton";
import Button from "../../common/Button/Button";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../../common/CustomDropDown";
import { postSegment } from "../../../../features/CRM_features/contactManagement/contactSegment/segment.slice";

const SaveListModal = () => {
  const navigate = useNavigate();
  const [addDescription, setAddDescription] = useState(false);
  const [listData, setListData] = useState({
    addToQuickAccess: false,
    listName: "",
    description: "",
    sharingOption: "",
  });
  const [segmentData, setSegmentData] = useState({
    name: "",
    contact_ids: "",
    is_private: true,
    pin_to_quick_access: true,
    share_with_user_ids: [],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropdownSelect = (name, selectedOption) => {
    setListData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };
  const handleCheckboxChange = (name) => {
    setListData((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };

  const handleRadioChange = (name, value) => {
    setListData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/CRM/quick-access`);
  };

  const contacts = [
    { value: "mattfisher", label: "Matt Fisher" },
    { value: "gladysknight", label: "Gladys knight" },
    { value: "parkwilton", label: "Park Wilton" },
  ];

  return (
    <div>
      <MiddleModalContainer title="Create New Contact List">
        <form className="px-8 py-4 flex flex-col gap-8 w-[500px]">
          <div className="flex items-center">
            <Checkbox
              name="addToQuickAccess"
              handleOnchange={() => handleCheckboxChange("addToQuickAccess")}
              checked={listData.addToQuickAccess}
            />
            <p className="text-xs">Add to quick access</p>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="mb-2 text-sm font-bold">
              List Name<sup className="text-gurugeeks-green-700">*</sup>
            </label>
            <input
              type="text"
              value={listData.listName}
              name="listName"
              onChange={handleInputChange}
              className="w-full border rounded-md py-4 px-6 h-full bg-gray-100 text-black"
            />
          </div>
          <div className="w-full">
            <CustomDropdown
              label="Template"
              onSelect={(selectedOption) => {
                handleDropdownSelect("contacts", selectedOption);
              }}
              options={contacts}
            />
          </div>
          <div>
            <div
              className="flex items-center gap-2 cursor-pointer mb-2"
              onClick={() => setAddDescription(!addDescription)}
            >
              <BiPlus size={25} className="text-gurugeeks-green-700" />
              <label className="text-gurugeeks-green-700 font-bold">
                Add Description
              </label>
            </div>
            {addDescription && (
              <textarea
                className={`p-3 w-full min-h-14 border bg-slate-50 rounded-md`}
                name="description"
                value={listData.description}
                rows="1"
                cols="10"
                onChange={handleInputChange}
              />
            )}
          </div>
          <div>
            <label className="font-bold">Sharing Options</label>
            <div>
              <CustomRadioButton
                label={"Share with everyone"}
                name="sharingOption"
                value="everyone"
                checked={listData.sharingOption === "everyone"}
                onChange={() => handleRadioChange("sharingOption", "everyone")}
              />
              <CustomRadioButton
                label={"Share with specific users"}
                name="sharingOption"
                value="specificUsers"
                checked={listData.sharingOption === "specificUsers"}
                onChange={() =>
                  handleRadioChange("sharingOption", "specificUsers")
                }
              />
              <CustomRadioButton
                label={"Keep it private - only visible to you"}
                name="sharingOption"
                value="onlyYou"
                checked={listData.sharingOption === "onlyYou"}
                onChange={() => handleRadioChange("sharingOption", "onlyYou")}
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 mt-8">
            <Button color={"secondary"} size={"lg"}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className={"secondary"}
              size={"lg"}
              color={"red"}
            >
              Save
            </Button>
          </div>
        </form>
      </MiddleModalContainer>
    </div>
  );
};

export default SaveListModal;
