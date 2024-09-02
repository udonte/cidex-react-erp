import React from "react";
import Button from "../Button/Button";
import { FaChevronDown, FaPlusCircle, FaSearch } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiRefresh, BiSort } from "react-icons/bi";

const FilterSection = ({ settings, component, onAddFilters }) => {
  return (
    <div className="flex justify-between items-end px-10 py-5">
      <div className=" space-y-2">
        <p className=" font-medium">Filter by</p>
        <Button
          icon={<FaPlusCircle />}
          color={"secondary"}
          size={"md"}
          onClick={onAddFilters}
        >
          Add Filters
        </Button>
      </div>
      <div className="flex justify-between items-end gap-x-4">
        <div className="w-[185px] h-[42px] px-4 gap-x-2 text-gurugeeks-dark-500 rounded border-2 bg-white flex items-center">
          <FaSearch className="text-gurugeeks-dark-500" />
          <input
            className="w-full placeholder:text-sm font-normal"
            placeholder="Search contact..."
          />
        </div>
        <div className="gap-x-2 flex items-center">
          <Button icon={<BiSort />} size={"md"} color={"secondary"}>
            <p className=" font-semibold"> Sort</p> <FaChevronDown />
          </Button>
          <Button
            icon={<BiRefresh className="text-[20px]" />}
            size={"md"}
            color={"secondary"}
          >
            <p className=" font-semibold">Refresh</p>
          </Button>
          {settings && (
            <Button
              icon={<AiFillSetting className="text-[20px]" />}
              size={"md"}
              color={"secondary"}
            >
              <p className=" font-semibold">Settings</p>
            </Button>
          )}
          {component ? component : null}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
