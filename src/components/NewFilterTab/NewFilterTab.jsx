import React, { useState } from "react";
import Button from "../../HRM_components/_common/Button/Button";
import { FaChevronDown, FaSearch, FaSort } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { BiSolidPlusCircle } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import FilterDropDown from "./FilterDropDown";

const NewFilterTab = ({
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
  const [showDropDown, setShowDropDown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showFiltersOptionsList, setShowFiltersOptionsList] = useState(false);
  const [showFiltersOptionsindex, setShowFiltersOptionsIndex] = useState(null);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterOptionSelect = (option) => {
    const updatedOptions = selectedFilterOptions
      .map((item) => item.name)
      .includes(option.name)
      ? selectedFilterOptions.filter((item) => item.name !== option.name)
      : [...selectedFilterOptions, option];
    setSelectedFilterOptions(updatedOptions);
  };

  const handleFiltersSelect = (filterOption, selectedFilter) => {
    selectedFilters?.map((item) => item.name).includes(filterOption)
      ? setSelectedFilters(selectedFilters)
      : setSelectedFilters((prev) => [
          ...prev,
          { name: filterOption, option: selectedFilter },
        ]);
  };

  const handleFiltersRemove = (item) => {
    const updatedOptions = selectedFilters.filter(
      (i) => i.option !== item.option
    );
    setSelectedFilters(updatedOptions);
  };

  const handleShowFilterOptions = (index) => {
    if (showFiltersOptionsindex === index && showFiltersOptionsList === true) {
      setShowFiltersOptionsList(!showFiltersOptionsList);
    } else {
      setShowFiltersOptionsList(true);
    }
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

            {showDropDown && (
              <div className="absolute z-40">
                <FilterDropDown
                  setShowDropDown={setShowDropDown}
                  setShowFilters={setShowFilters}
                  selectedFilterOptions={selectedFilterOptions}
                  filterOptions={filterOptions}
                  handleFilterOptionSelect={handleFilterOptionSelect}
                />
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}

        <div className="flex h-full items-center gap-x-3">
          {search ? (
            <div className="w-[185px] h-[42px] px-4 gap-x-2 text-gurugeeks-dark-500 rounded border-2 bg-white flex items-center">
              <FaSearch className="text-gurugeeks-dark-500" />
              <input
                className="w-full placeholder:text-sm font-normal focus:outline-none"
                placeholder={searchPlaceholder}
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

      {showFilters && (
        <div className="flex items-center gap-x-3">
          <div className=" px-6 space-y-2 z-40">
            <div className=" flex items-center  gap-x-3">
              {selectedFilterOptions?.map((option, index) => (
                <div key={index}>
                  <div
                    onClick={() => {
                      setShowFiltersOptionsIndex(index);
                      handleShowFilterOptions(index);
                    }}
                    className="z-10 h-10 w-fit gap-x-2 bg-white border rounded flex justify-between items-center px-2"
                  >
                    <p>{option.name}</p> <FaChevronDown />
                  </div>
                  <div
                    onMouseLeave={() => setShowFiltersOptionsList(false)}
                    className="absolute bg-white min-w-[100px]"
                  >
                    {showFiltersOptionsindex === index &&
                      showFiltersOptionsList &&
                      option.list.map((item, index) => (
                        <div key={index}>
                          <div
                            onClick={() => {
                              handleFiltersSelect(option.name, item.value);
                              option.callback(item.value);
                            }}
                            className="h-10 px-2 truncate capitalize z-50  flex items-center bg-white border hover:bg-slate-50 border-gray-300 shadow-lg"
                          >
                            {item.name}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <RiCloseFill
            className=" text-xl"
            onClick={() => {
              setShowFilters(false);
              setSelectedFilters([]);
              clearFilter();
            }}
          />
        </div>
      )}

      {/* {selectedFilters?.length} */}
      <div className="px-6 my-2 flex-wrap flex items-center gap-x-2">
        {selectedFilters?.map((item, index) => (
          <div
            key={index}
            className=" bg-orange-200 h-8 w-fit rounded flex items-center justify-center px-2 my-2"
          >
            <p>
              {item.name}:{" "}
              <span className="font-bold pr-2 capitalize">
                "{String(item.option)}"
              </span>
            </p>
            <RiCloseFill
              onClick={() => {
                handleFiltersRemove(item);
                removeFilter(item.option);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NewFilterTab;
