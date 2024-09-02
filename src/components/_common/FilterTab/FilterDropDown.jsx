import React, { useState } from "react";
import Button from "../../HRM_components/_common/Button/Button";
import Checkbox from "../../HRM_components/_common/Checkbox";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const FilterDropDown = ({ filterOptions }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const [filterValues, setFilterValues] = useState({});
  const [searchValues, setSearchValues] = useState({});

  const toggleFilter = (name) => {
    setActiveFilter((prevFilter) => (prevFilter === name ? "" : name));
    setFilterValues((prevValues) => ({ ...prevValues, [name]: [] }));
  };

  const handleCheckboxChange = (filterName, value) => {
    const updatedValues = [...filterValues[filterName]];

    if (updatedValues.includes(value)) {
      updatedValues.splice(updatedValues.indexOf(value), 1);
    } else {
      updatedValues.push(value);
    }

    setFilterValues((prevValues) => ({
      ...prevValues,
      [filterName]: updatedValues,
    }));
  };

  const filterList = (name) => {
    const filteredList =
      filterOptions.find((option) => option.name === name)?.list || [];
    const searchTerm = searchValues[name]?.toLowerCase();
    return searchTerm
      ? filteredList.filter((item) =>
          item.name.toLowerCase().includes(searchTerm)
        )
      : filteredList;
  };

  const handleSearch = (event, name) => {
    const value = event.target.value;
    setSearchValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div className="flex flex-wrap space-x-4">
      {filterOptions.map((option) => (
        <div key={option.name} className="flex flex-col">
          <button
            onClick={() => toggleFilter(option.name)}
            className={`border-dotted border-gray-300 cursor-pointer  text-gray-600 border-[1px] py-2 px-4 text-xl rounded-lg 
            `}
          >
            {/* ${activeFilter === option.name ? "bg-gray-300" : ""} */}
            {option.name}
          </button>
          {activeFilter === option.name && (
            <div className="flex flex-col space-y-2 absolute top-14 z-10 bg-white rounded-md shadow-lg w-[200px]">
              <div className="flex items-center font-light text-xs border-b-2 border-b-gray-100 px-4 py-1 w-full">
                <div className="text-gray-100 font-light">
                  <FaSearch size={20} />
                </div>
                <input
                  type="text"
                  placeholder={`Search ${option.name}`}
                  value={searchValues[option.name] || ""}
                  onChange={(e) => handleSearch(e, option.name)}
                  className="px-4 py-2 rounded-md outline-none border-none focus:border-none focus:outline-none focus:ring-0 placeholder:text-xs text-sm w-full"
                />
              </div>
              {filterList(option.name).map((item) => (
                <div
                  key={item.value}
                  className="flex items-center space-x-2 px-4 py-1 text-xl w-full my-2"
                >
                  <input
                    type="checkbox"
                    id={item.value}
                    checked={filterValues[option.name]?.includes(item.value)}
                    onChange={() =>
                      handleCheckboxChange(option.name, item.value)
                    }
                    className="h-4 w-4 text-gurugeeks-orange-700 focus:ring focus:ring-orange-100"
                  />
                  <label
                    htmlFor={item.value}
                    className="text-gray-900 text-sm font-light flex-grow pl-2"
                  >
                    {item.name}
                  </label>
                  <p className="text-gray-900 text-sm font-light">12</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default FilterDropDown;
