import React, { useState } from "react";
import Button from "../Button/Button";
import { FaChevronDown, FaSearch, FaSort } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { BiSolidPlusCircle } from "react-icons/bi";
import FilterDropDown from "./FilterDropDown";

const FilterTab = ({
  filter,
  sort,
  refresh,
  component,
  search,
  searchTerm,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);

  const filterOptions = [{ name: "Department", dapartments: ["it"] }];

  const handleFilterOptionSelect = (option) => {
    const updatedOptions = selectedFilterOptions.map((item, index) =>
      item.name.includes(option.name)
    )
      ? selectedFilterOptions.filter((item) => item.name !== option.name)
      : [...selectedFilterOptions, option];

    setSelectedFilterOptions(updatedOptions);
  };

  return (
    <>
      <div className="flex justify-between items-end py-2 px-6">
        {filter ? (
          <div className="relative">
            <div onClick={() => setShowDropDown(!showDropDown)}>
              <h1 className="text-lg font-medium">Filter by</h1>
              <Button size={"md"} color={"secondary"} className={"gap-x-2"}>
                <BiSolidPlusCircle className="text-lg" /> Add Filters
              </Button>
            </div>
            {selectedFilterOptions.map((option, index) => (
              <div className="px-4 py-2 text-base">{option.name}</div>
            ))}
            {showDropDown && (
              <div className="absolute">
                <FilterDropDown
                  filterBy={selectedFilterOptions}
                  filterOptions={filterOptions}
                  handleFilterOptionSelect={handleFilterOptionSelect}
                />
              </div>
            )}
          </div>
        ) : null}

        <div className="flex h-full items-center gap-x-3">
          {search ? (
            <div className="w-[185px] h-[42px] px-4 gap-x-2 text-gurugeeks-dark-500 rounded border-2 bg-white flex items-center">
              <FaSearch className="text-gurugeeks-dark-500" />
              <input
                className="w-full placeholder:text-sm font-normal focus:outline-none"
                placeholder="Search contact..."
                value={searchTerm}
                onChange={(e) => search(e.target.value)}
              />
            </div>
          ) : null}
          {sort ? (
            <Button
              size={"md"}
              color={"secondary"}
              className={"gap-x-2 font-semibold"}
            >
              <FaSort />
              <p> Sort</p> <FaChevronDown />
            </Button>
          ) : null}
          {refresh ? (
            <Button
              size={"md"}
              color={"secondary"}
              className={"gap-x-2 font-semibold"}
            >
              <IoMdRefresh /> <p> Refresh</p>
            </Button>
          ) : null}

          {component ? component : null}
        </div>
      </div>
    </>
  );
};

export default FilterTab;
