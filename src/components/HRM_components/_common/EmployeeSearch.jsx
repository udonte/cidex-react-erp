import React, { useState } from "react";
import SearchInput from "./SearchInput";
import NameTag from "./NameTag";
import { CgClose } from "react-icons/cg";
import EmployeeSearchDropdown from "./EmployeeSearchDropdown";

const EmployeeSearch = ({ employees, setEmployee, deleteEmployee, label }) => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [allEmployees, setAllEmployees] = useState(employees);
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (item) => {
    setSelectedItems((prevItems) => {
      if (prevItems.includes(item)) {
        return prevItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  const handleSearchFocus = () => {
    setSearchFocus(true);
  };

  const handleDeleteSelectedItem = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((selectedItem) => selectedItem !== item)
    );
  };

  const filteredItems = allEmployees?.filter((item) =>
    item.info.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className="relative my-3 ">
        <label className="my-3">{label}</label>
        <div
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className={`border-2 rounded min-h-14 bg-slate-50 p-3 w-full ${
            active ? "border-gurugeeks-orange-700" : ""
          }`}
        >
          <div className="flex-wrap flex gap-x-2">
            {selectedItems.map((item, index) => (
              <div
                key={index}
                className="border w-fit m-1 flex items-center gap-x-1 bg-slate-100 p-1 rounded-lg"
                onClick={() => {
                  handleDeleteSelectedItem(item);
                  deleteEmployee(item);
                }}
              >
                <NameTag size={"sm"} firstName={item?.info.name} />
                <p className=" capitalize">{item.info.name}</p>
                <CgClose />
              </div>
            ))}
          </div>
          <SearchInput
            className={`w-full bg-slate-50 focus:outline-none`}
            searchTerm={searchTerm}
            onSearchFocus={handleSearchFocus}
            onSearchChange={handleSearchChange}
          />
        </div>
        {searchFocus && (
          <>
            <div
              onMouseLeave={() => setSearchFocus(false)}
              className="absolute bg-white border w-[260px] shadow-md z-50 "
            >
              {allEmployees.length < 0 ? (
                <div className="h-10  z-50 bg-black">
                  <p>no em</p>
                </div>
              ) : (
                filteredItems?.map((em, index) => (
                  <>
                    <div
                      className="flex items-center px-5 h-[50px] border-b-2 gap-x-3 hover:bg-gurugeeks-dark-100"
                      onClick={() => {
                        addItem(em);
                        setEmployee(em);
                      }}
                    >
                      <NameTag size={"sm"} firstName={em?.info.name} />
                      <p className=" capitalize">{em.info.name}</p>
                    </div>

                    {/* <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectedItems.includes(em)}
                onChange={() => }
                className="mr-2"
              />
              {em.name}
            </label> */}
                  </>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeSearch;
