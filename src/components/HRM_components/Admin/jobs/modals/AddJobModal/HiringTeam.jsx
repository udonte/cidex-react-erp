import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import EmployeeSearch from "../../../../_common/EmployeeSearch";
import Spinner from "../../../../../_common/Spinner";
import {
  fetchJobs,
  postHiringTeam,
} from "../../../../../../features/HRM_features/recruitment/jobs/jobs.slice";
import Button from "../../../../_common/Button/Button";
import CustomDropdown from "../../../../_common/CustomDropDown";

const HiringTeam = ({ employees, jobId, isLoading }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [active, setActive] = useState(false);
  const [allEmployees, setAllEmployees] = useState(employees);
  const [selectedItems, setSelectedItems] = useState([]);
  const [hiringTeamData, setHiringTeamData] = useState({
    job_id: jobId,
    member_ids: [],
    role: "",
    notify_members: false,
  });

  const categoryOptions = [
    { value: "interviewer", label: "Interviewer" },
    { value: "manager", label: "Manager" },
  ];

  const filteredItems = employees?.filter(
    (item) =>
      item?.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      item?.email?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  // const deleteItem = (id) => {
  //   const updatedNames = searchedNames.filter((item) => item.id !== id);
  //   setSearchedNames(updatedNames);
  // };
  const handleDropdownSelect = (name, selectedOption) => {
    setHiringTeamData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  // const toggleItemSelection = (item) => {
  //   setSelectedItems((prevSelectedItems) => {
  //     if (prevSelectedItems.includes(item)) {
  //       return prevSelectedItems.filter(
  //         (selectedItem) => selectedItem !== item
  //       );
  //     } else {
  //       return [...prevSelectedItems, item];
  //     }
  //   });
  // };

  const handleAddHiringTeam = (em) => {
    setHiringTeamData((prevItems) => {
      if (prevItems.member_ids.includes(em.id)) {
        return prevItems;
      } else
        return {
          ...prevItems,
          member_ids: [...prevItems.member_ids, em.id],
        };
    });
  };

  const handleSkipHiringTeam = () => {
    localStorage.setItem("hiring_team", true);
    dispatch(fetchJobs());
  };

  const handleDeletEmployee = (em) => {
    setHiringTeamData((prevItems) => ({
      ...prevItems,
      member_ids: prevItems.member_ids.filter(
        (selectedItem) => selectedItem !== em.id
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobId) {
      toast.error("Fill Job Information First");
    } else {
      dispatch(postHiringTeam(hiringTeamData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto p-4">
        <div className="h-[50%]">
          <div className="w-[470px]">
            <CustomDropdown
              label="Select Category"
              onSelect={(selectedOption) => {
                handleDropdownSelect("role", selectedOption);
              }}
              options={categoryOptions}
            />
          </div>
          <div className="w-[470px]">
            <EmployeeSearch
              label={"Choose Employee"}
              employees={employees}
              setEmployee={handleAddHiringTeam}
              deleteEmployee={handleDeletEmployee}
            />
          </div>
        </div>
        {/* <div className="w-[470px]">
          <label className="my-2">Select Category</label>
          <CustomDropdown />
        </div>
        <div className="my-3">
          <label className="my-3">Choose Employee</label>
          <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`border-2 rounded p-2 w-fit ${
              active ? "border-gurugeeks-orange-700" : ""
            }`}
          >
            <div className="flex-wrap flex max-w-[550px] gap-x-2">
              {selectedItems.map((item, index) => (
                <div
                  key={index}
                  className="border w-fit m-1 flex items-center gap-x-1 bg-slate-100 p-1 rounded-lg"
                  onClick={() => handleDeleteSelectedItem(item)}
                >
                  <NameTag size={"sm"} firstName={item?.name} />
                  <p className=" capitalize">{item.name}</p>
                  <CgClose />
                </div>
              ))}
            </div>
            <SearchInput
              className={` focus:border-transparent border-none`}
              searchTerm={searchTerm}
              onSearchFocus={handleSearchFocus}
              onSearchChange={handleSearchChange}
            />
          </div>
          {searchFocus && (
            <div>
              {filteredItems?.map((em, index) => (
                <>
                  <div
                    className="border w-fit flex items-center gap-x-1 bg-slate-100 p-1 rounded-lg"
                    onClick={() => addItem(em)}
                  >
                    <NameTag size={"sm"} firstName={em?.name} />
                    <p className=" capitalize">{em.name}</p>
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
        {/* </> */}
        {/* ))} */}
        {/* </div> */}
        {/* )} */}
        {/* </div>  */}
      </div>
      <div className="flex justify-end items-center gap-x-2 py-2">
        <Button
          onClick={handleSkipHiringTeam}
          size={"lg"}
          type="button"
          color={"secondary"}
        >
          Skip
        </Button>
        <Button size={"lg"} type="submit">
          {isLoading ? (
            <div className="w-14">
              <Spinner />
            </div>
          ) : (
            "Submit Hiring Team"
          )}
        </Button>
      </div>
    </form>
  );
};

export default HiringTeam;
