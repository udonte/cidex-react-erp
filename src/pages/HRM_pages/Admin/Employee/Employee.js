import React, { useEffect, useState } from "react";
import {
  FaAddressCard,
  FaArchive,
  FaDownload,
  FaList,
  FaPlus,
  FaThList,
  FaTrash,
  FaUsers,
} from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { ImUsers } from "react-icons/im";
import FullNameTag from "../../../../components/HRM_components/_common/FullNameTag";
import { selectEmployeeSlice } from "../../../../features/HRM_features/employee/employee.selector";
import { fetchEmployees } from "../../../../features/HRM_features/employee/employee.slice";
import { MODALS } from "../../../../constants/modals.constant";
import {
  BreadCrumbs,
  Button,
  Checkbox,
  FilterTab,
  Spinner,
  StatusPill,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../components/HRM_components";
import TableViewToggleButton from "../../../../components/HRM_components/_common/TableViewToggleButton";
import EmployeeCard from "../../../../components/HRM_components/Admin/employee/EmployeeCard";
import EditEmployeeDetailsModal from "../../../../components/HRM_components/Admin/employee/modal/EditEmployeeDetails";
import AddEmployeeModal from "../../../../components/HRM_components/Admin/employee/modal/AddEmployeeModal/AddEmployeeModal";
import EmployeeDetailsModal from "../../../../components/HRM_components/Admin/employee/modal/EmployeeDetailsModal";
import ImportEmployees from "./ImportEmployee";
import { getDepartments } from "../../../../features/HRM_features/organisation/departments/departments.slice";
import { selectDepartment } from "../../../../features/HRM_features/organisation/departments/department.selector";

import HRSearch from "../../../../assets/employee/hr_candidates_looking.png";
import AddDepartment from "../../../../components/HRM_components/Admin/organisation/modals/AddDepartment";
import AddDesignation from "../../../../components/HRM_components/Admin/organisation/modals/AddDesignation";
import { orange } from "@mui/material/colors";
import { IoMdGrid } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { Avatar } from "@mui/material";

const Employee = () => {
  const [allChecked, setAllChecked] = useState(false); // State to manage all rows checked state
  const [checkedRows, setCheckedRows] = useState({}); // State to manage individual row checked state

  // Handler function to toggle all rows checked state
  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    const updatedCheckedRows = {};
    filteredItems.forEach(({ id }) => {
      updatedCheckedRows[id] = !allChecked;
    });
    setCheckedRows(updatedCheckedRows);
  };

  // Handler function to toggle individual row checked state
  const handleRowChecked = (id) => {
    const updatedCheckedRows = { ...checkedRows, [id]: !checkedRows[id] };
    setCheckedRows(updatedCheckedRows);
  };

  const [employeeData, setEmployeeData] = useState("");
  const dispatch = useDispatch();
  const openAddDepartmentModal = useSelector(selectModalsSlice);
  const openAddDesignationModal = useSelector(selectModalsSlice);
  const openModal = useSelector(selectModalsSlice);
  const breadcrumbItems = ["Employees"];
  const [listView, setListView] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    sort_by: "desc",
    per_page: 6,
    page: 1,
    order_by: "created_at",
    load_related: true,
    is_active: true,
  });

  const [url, setUrl] = useState(
    `employees/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=${pageInfo.is_active}&load_related=true`
  );
  const [searchTerm, setSearchTerm] = useState("");
  const { employees, isLoading, totalEmployee } =
    useSelector(selectEmployeeSlice);
  const { departments } = useSelector(selectDepartment);

  const openImportEmployeesModal = useSelector(selectModalsSlice);
  const addFilter = (filter) => {
    if (url.indexOf(`filter_string=${filter}`) === -1) {
      // If it does not exist, add the filter_string parameter
      setUrl((prev) => (prev += `&filter_string=${filter}`));
    }
  };

  const removeFilter = (filter) => {
    if (url.indexOf(`filter_string=${filter}`) !== -1) {
      // If it exists, remove it
      setUrl((prev) => prev.replace(`&filter_string=${filter}`, ""));
    }
  };

  const handleAllCheckboxClick = () => {
    const isChecked = selectedItems.length !== filteredItems.length;
    if (isChecked) {
      const selectedIds = filteredItems.map((employee) => employee.id);
      setSelectedItems(selectedIds);
    } else {
      setSelectedItems([]);
    }
  };

  const handleSingleCheckboxClick = (employee_id) => {
    const isChecked = selectedItems.includes(employee_id);
    if (isChecked) {
      setSelectedItems(selectedItems.filter((id) => employee_id !== id));
    } else {
      setSelectedItems([...selectedItems, employee_id]);
    }
  };
  const filterOptions = [
    {
      name: "Department",
      list:
        departments.length > 0
          ? departments?.map((department) => ({
              name: `${department.name}`,
              value: `${department.name}`,
            }))
          : [],
      callback: addFilter,
    },
    {
      name: "Status",
      list: [
        { name: "Active", value: true },
        { name: "Inactive", value: false },
      ],
      callback: (filter) => {
        setPageInfo((prev) => ({ ...prev, is_active: filter }));
      },
    },
    // {
    //   name: "Status",
    //   list: employees.map((contact) => ({
    //     name: `${employees.first_name}`,
    //   })),
    // },
  ];
  console.log(employees);
  const clearFilter = () => {
    dispatch(fetchEmployees(url));
  };

  const dotOptions = [
    {
      text: "Delete ",
      icon: <FaTrash />,
      callBack: (id) => {
        // dispatch(deleteAssetById(id))
        //   .unwrap()
        //   .then((payload) => {
        //     console.log(payload);
        //     if (payload.data.id && payload.data.created_at) {
        //       dispatch(closeAllModals());
        //       dispatch(fetchAssets());
        //     }
        //   });
      },
    },
    {
      text: "Archive",
      icon: <FaArchive />,
      callBack: (id) => {
        // navigate(`/HRM/asset/${encryptId(id)}`);
      },
    },
  ];

  const handleListViewToggle = () => {
    setListView((prevState) => !prevState);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    localStorage.setItem("currentPage", 1);
    // console.log(currentPageData);
  };

  useEffect(() => {
    dispatch(fetchEmployees(url));
    dispatch(getDepartments());
    setCurrentPage(pageInfo.page);
  }, [dispatch, url]);

  useEffect(() => {
    setUrl(
      `employees/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=${pageInfo.is_active}&load_related=true`
    );
  }, [pageInfo]);

  const [currentPage, setCurrentPage] = useState(pageInfo.page);
  // const itemsPerPage = 10;
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  const filteredItems = employees?.filter(
    (item) =>
      item?.first_name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      item?.email?.toLowerCase().includes(searchTerm?.toLowerCase())
  );
  // const currentPageData =
  //   filteredItems.length > startIndex
  //     ? filteredItems.slice(startIndex, endIndex)
  //     : filteredItems.slice(0, itemsPerPage);
  const tableHeader = [
    <Checkbox
      onClick={() => handleAllCheckboxClick()}
      checked={selectedItems?.length === filteredItems?.length}
    />,
    "Employee ID",
    "Employee Name",
    "Email",
    "Department",
    "Date Hired",
    "Status",
    "Action",
  ];
  return (
    <>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <div className="">
        <TopTab
          leftComponent={
            <h1 className="font-bold text-xl text-[#161E54]">
              Employees{" "}
              <span className="bg-orange-100 rounded-full py-1 px-2 text-sm text-orange-400">
                {" "}
                {totalEmployee ? `${totalEmployee}` : 0}
              </span>
            </h1>
          }
          rightComponent={
            <div className="flex items-center gap-x-2">
              <Button
                color={"gray"}
                onClick={() => {
                  dispatch(openModalByName());
                }}
              >
                <FaUsers />
              </Button>
              <Button
                color={"gray"}
                onClick={() => {
                  dispatch(openModalByName());
                }}
              >
                <FaDownload />
              </Button>
              <Button
                onClick={() => {
                  dispatch(openModalByName(MODALS.EMPLOYEE.IMPORT_EMPLOYEES));
                }}
                color={"gray"}
              >
                <AiOutlineExport />
              </Button>
              {employees ? (
                <Button
                  onClick={() => {
                    dispatch(
                      openModalByName(MODALS.EMPLOYEE.ADD_EMPLOYEE_DETAILS)
                    );
                    // dispatch(createEmployee());
                  }}
                  varient="orange"
                >
                  <FaPlus />
                  Add Employee
                </Button>
              ) : (
                ""
              )}
            </div>
          }
        />
      </div>
      <div className="bg-gray-100">
        <FilterTab
          clearFilter={clearFilter}
          removeFilter={removeFilter}
          addFilter={addFilter}
          filterOptions={filterOptions}
          filter={true}
          search={handleSearchChange}
          searchPlaceholder={"name, email"}
          searchTerm={searchTerm}
          component={
            <TableViewToggleButton
              activeState={listView}
              leftIcon={
                <p className={listView ? "text-orange-700" : ""}>
                  <FaThList />
                </p>
              }
              rightIcon={
                <p className={listView ? "" : "text-orange-700"}>
                  <BsGridFill />
                </p>
              }
              handleOnClick={handleListViewToggle}
            />
          }
        />
      </div>
      <div>
        <main>
          {isLoading ? (
            <>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : employees.length > 0 ? (
            listView ? (
              <div className=" m-4 rounded-lg shadow-lg">
                <TableContainer
                  changePage={(number) => {
                    setPageInfo((prev) => ({ ...prev, page: Number(number) }));
                  }}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  itemsPerPage={pageInfo.per_page}
                  totalItems={totalEmployee}
                  pagination={true}
                  tableHeader={tableHeader}
                  checkBox={true}
                  handleCheckboxClick={handleAllCheckboxClick}
                >
                  {employees &&
                    employees.length > 0 &&
                    filteredItems?.map(
                      (
                        {
                          first_name,
                          last_name,
                          email,
                          departments,
                          designations,
                          date_hired,
                          is_active,
                          phone_number,
                          address,
                          id,
                        },
                        index
                      ) => (
                        <TableRowItem key={index} dotOptions={dotOptions}>
                          <td className="px-4">
                            <Checkbox
                              onClick={() => handleSingleCheckboxClick(id)}
                              checked={selectedItems.includes(id)}
                            />
                          </td>
                          <td className="px-6 text-[14px]">{index + 1}</td>
                          <td
                            className="flex text-[14px] flex-row gap-2 py-4 items-center cursor-pointer"
                            onClick={() => {
                              setEmployeeData({
                                first_name: first_name,
                                last_name: last_name,
                                email: email,
                                departments: [departments].name,
                                date_hired: date_hired,
                                is_active: is_active,
                                id: id,
                              });
                              dispatch(
                                openModalByName(
                                  MODALS.EMPLOYEE.EMPLOYEE_DETAILS
                                )
                              );
                            }}
                          >
                            <Avatar
                              sx={{ width: 30, height: 30, fontSize: "14px" }}
                            >
                              {first_name.charAt(0)}
                              {last_name.charAt(0)}
                            </Avatar>
                            {`${first_name} ${last_name}`}
                          </td>

                          <td className="px-6 text-[14px] ">
                            <p className="max-w-[300px] truncate font-semibold text-left">
                              {email}
                            </p>
                          </td>
                          <td className="px-6 text-[14px] ">
                            {departments?.length > 0 ? (
                              departments[0]?.name
                            ) : (
                              <p className=" text-red-500">No department</p>
                            )}
                          </td>
                          <td className="px-6 text-[14px]">{date_hired}</td>
                          <td className="px-6 ">
                            <StatusPill
                              text={is_active ? "active" : "inActive"}
                              status={is_active ? "active" : "inActive"}
                            />
                          </td>
                        </TableRowItem>
                      )
                    )}
                </TableContainer>
              </div>
            ) : (
              <div className="grid grid-cols-4">
                {filteredItems?.map(
                  (
                    {
                      first_name,
                      id,
                      email,
                      departments,
                      date_hired,
                      is_active,
                      phone_number,
                      designations,
                    },
                    index
                  ) => {
                    return (
                      <EmployeeCard
                        is_active={is_active}
                        key={index}
                        name={first_name}
                        email={email}
                        phone_number={phone_number}
                        date_hired={date_hired}
                        designation={
                          designations?.length > 0 ? (
                            designations[0]?.name
                          ) : (
                            <p className=" text-red-500">No designation</p>
                          )
                        }
                        department={
                          departments?.length > 0 ? (
                            departments[0]?.name
                          ) : (
                            <p className=" text-red-500">No department</p>
                          )
                        }
                      />
                    );
                  }
                )}
              </div>
            )
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center text-gurugeeks-dark-500">
              <div className="flex flex-col items-center justify-center">
                <img src={HRSearch} alt="hr_search" />
                <p className="text-xl font-semibold text-gray-500 mt-12 mb-4">
                  No Employees Found
                </p>
                <p className="w-[400px] text-center text-gray-400 mb-4">
                  Click “ Add Employee ” button to get started with adding your
                  first employee.
                </p>
                <Button
                  onClick={() => {
                    dispatch(
                      openModalByName(MODALS.EMPLOYEE.ADD_EMPLOYEE_DETAILS)
                    );
                    // dispatch(createEmployee());
                  }}
                  varient="orange"
                >
                  <FaPlus />
                  Add Employee
                </Button>
              </div>
            </div>
          )}
        </main>
        <EmployeeDetailsModal
          employeeData={employeeData}
          setEmployeeData={setEmployeeData}
          isOpen={openModal[MODALS.EMPLOYEE.EMPLOYEE_DETAILS]}
        />

        {/* {openModal[MODALS.EMPLOYEE.IMPORT_EMPLOYEES] && <InportEmpolyeeModal />} */}
        {
          <AddEmployeeModal
            isOpen={openModal[MODALS.EMPLOYEE.ADD_EMPLOYEE_DETAILS]}
          />
        }

        {openImportEmployeesModal[MODALS.EMPLOYEE.IMPORT_EMPLOYEES] && (
          <ImportEmployees />
        )}
      </div>

      {openAddDepartmentModal[MODALS.ORGANIZATION.ADD_DEPARTMENT] && (
        <AddDepartment />
      )}
      {openAddDesignationModal[MODALS.ORGANIZATION.ADD_DESIGNATION] && (
        <AddDesignation />
      )}
    </>
  );
};

export default Employee;
