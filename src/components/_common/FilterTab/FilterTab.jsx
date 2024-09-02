import React, { useState } from "react";
import Button from "../../HRM_components/_common/Button/Button";
import { FaChevronDown, FaSearch, FaSort } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { BiSolidPlusCircle } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import FilterDropDown from "./FilterDropDown";
import { Checkbox } from "../../HRM_components";

const FilterTab = ({
  clearFilter,
  removeFilter,
  addFilter,
  filter,
  sort,
  refresh,
  component,
  search,
  searchTerm,
  filterOptions,
  searchPlaceholder,
}) => {
  return (
    <div className="">
      <div className="flex items-center  gap-4 py-2 px-6 h-20 ">
        <div className="flex  h-full items-center gap-x-3">
          {search ? (
            <div className="w-[300px] h-[42px] px-4 gap-x-2 text-gray-400 rounded  border-none outline-none bg-white flex items-center justify-between text-xl">
              <input
                className="w-full placeholder:text-xl placeholder:text-gray-300 font-normal focus:outline-none placeholder:font-light"
                placeholder={"Search"}
                value={searchTerm}
                onChange={(e) => search(e.target.value)}
              />
              <FaSearch className="text-gurugeeks-dark-500" />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col relative items-center">
          <FilterDropDown filterOptions={filterOptions} />
        </div>
        <div className="ml-auto">{component ? component : null}</div>
      </div>
    </div>
  );
};

export default FilterTab;
