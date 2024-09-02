import React, { useState } from "react";
import CRMSideModalContainer from "../../common/SideModalcontainer/SideModalContainer";
import Button from "../../common/Button/Button";
import CustomDropdown from "../../common/CustomDropDown";
import { Checkbox } from "../..";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AddFiltersModal = ({ isOpen }) => {
  const navigate = useNavigate();
  const [checkedState, setCheckedState] = useState({
    name: false,
    title: false,
    company: false,
    date_created: false,
    // Add other checkboxes here
  });

  const [filterData, setFilterData] = useState({
    searchInput: "",
    name: "",
    title: "",
    company: "",
    date_created: "",
  });

  const titleOptions = [
    { value: "cofounder", label: "Co-Founder" },
    { value: "stakeholder", label: "Stakeholder" },
    { value: "investor", label: "Investor" },
  ];

  const namesData = [
    { value: "samuel_jason", label: "Samuel Jason" },
    { value: "jack_jason", label: "Jack Jason" },
    { value: "peace_jason", label: "Peace Jason" },
  ];

  const companyOptions = [
    { value: "hsbf", label: "HSBF" },
    { value: "gurugeeks_royalty", label: "Gurugeeks Royalty" },
    { value: "amazon", label: "Amazon" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  const handleDropdownSelect = (name, selectedOption) => {
    setFilterData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const dateValue = new Date(value);
    const formattedDate = dateValue.toISOString().split("T")[0];
    setFilterData((prevData) => ({ ...prevData, [name]: formattedDate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div>
      <CRMSideModalContainer title={"Filter"} width="sm" isOpen={isOpen}>
        <form>
          <div className="py-4 px-8">
            {/* search input */}
            <div className="relative">
              <input
                className="px-3 pl-16 w-full h-16 border bg-slate-50 rounded-md focus:border-[1px] focus:border-gurugeeks-green-700 text-xl"
                type="text"
                name="searchInput"
                value={filterData.searchInput}
                onChange={handleInputChange}
                placeholder="Find a Filter"
              />
              <BiSearchAlt
                size={30}
                className="absolute top-4 left-4 text-gray-300"
              />
            </div>
            {/* end of search input */}
            <div>
              {/* filter name field */}
              <div className="flex flex-col">
                <div className="flex items-center mt-4 border-b-2 border-gray-100 py-2">
                  <Checkbox
                    handleOnchange={() => handleCheckboxChange("name")}
                    checked={checkedState.name}
                    name="name"
                  />
                  <p>Name</p>
                </div>
                {checkedState.name && (
                  <div className="flex items-center justify-end">
                    <div className="w-[200px] pt-2">
                      <CustomDropdown
                        onSelect={(selectedOption) => {
                          handleDropdownSelect("name", selectedOption);
                        }}
                        options={namesData}
                        label=""
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* end of filter name */}
            {/* filter title field */}
            <div className="flex flex-col">
              <div className="flex items-center mt-4 border-b-2 border-gray-100 py-2">
                <Checkbox
                  handleOnchange={() => handleCheckboxChange("title")}
                  checked={checkedState.title}
                  name="title"
                />
                <p>Title</p>
              </div>
              {checkedState.title && (
                <div className="flex items-center justify-end">
                  <div className="w-[200px] pt-2">
                    <CustomDropdown
                      onSelect={(selectedOption) => {
                        handleDropdownSelect("title", selectedOption);
                      }}
                      options={titleOptions}
                      label=""
                    />
                  </div>
                </div>
              )}
            </div>
            {/* end of filter title */}
            {/* filter company field */}
            <div className="flex flex-col">
              <div className="flex items-center mt-4 border-b-2 border-gray-100 py-2">
                <Checkbox
                  handleOnchange={() => handleCheckboxChange("company")}
                  checked={checkedState.company}
                  name="company"
                />
                <p>Company</p>
              </div>
              {checkedState.company && (
                <div className="flex items-center justify-end">
                  <div className="w-[200px] pt-2">
                    <CustomDropdown
                      onSelect={(selectedOption) => {
                        handleDropdownSelect("company", selectedOption);
                      }}
                      options={companyOptions}
                      label=""
                    />
                  </div>
                </div>
              )}
            </div>
            {/* end of filter company*/}
            {/* filter date field */}
            <div className="flex flex-col">
              <div className="flex items-center mt-4 border-b-2 border-gray-100 py-2">
                <Checkbox
                  handleOnchange={() => handleCheckboxChange("date_created")}
                  checked={checkedState.date_created}
                  name="company"
                />
                <p>Date Created</p>
              </div>
              {checkedState.date_created && (
                <div className="flex items-center justify-end">
                  <div className="w-[200px] pt-2">
                    <input
                      className="p-3 w-full h-14  border bg-slate-50 rounded-md outline-none"
                      type="date"
                      placeholder="choose a date"
                      name="date_created"
                      value={filterData.date_created}
                      onChange={handleDateChange}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* end of filter date*/}
          </div>
          <div className="flex justify-end items-center px-8">
            <Button onClick={handleSubmit}>Done</Button>
          </div>
        </form>
      </CRMSideModalContainer>
    </div>
  );
};

export default AddFiltersModal;
