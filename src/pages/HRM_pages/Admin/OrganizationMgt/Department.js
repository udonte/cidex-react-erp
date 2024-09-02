import React, { useEffect } from "react";

import {
  Button,
  NameTag,
  BreadCrumbs,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../components/HRM_components";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
// import { departmentData } from "../../utils/dummyData.utils";
import { MODALS } from "../../../../constants/modals.constant";
import { selectDepartment } from "../../../../features/HRM_features/organisation/departments/department.selector";
import {
  deleteDepartment,
  getDepartments,
} from "../../../../features/HRM_features/organisation/departments/departments.slice";
import Spinner from "../../../../components/_common/Spinner";
import AddDepartment from "../../../../components/HRM_components/Admin/organisation/modals/AddDepartment";
import { encryptId } from "../../../../utils/helperFunctions/crypto.utils";
import { useNavigate } from "react-router-dom";

const Department = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { departments, isLoading } = useSelector(selectDepartment);
  console.log(departments);

  const openAddDepartmentModal = useSelector(selectModalsSlice);

  const breadcrumbItems = ["Department"];
  const dotOptions = [
    // {
    //   text: "View Details",
    //   icon: <FaPlus />,
    //   callBack: (id) => {
    //     navigate(`/HRM/asset/${encryptId(id)}`);
    //   },
    // },
    {
      text: "Delete Department",
      icon: <FaTrash />,
      callBack: (id) => {
        dispatch(deleteDepartment(id))
          .unwrap()
          .then((payload) => {
            if (payload.id === id) {
              dispatch(getDepartments());
            }
          });
      },
    },
  ];

  const tableHeader = [
    "Department Name",
    "   Manager",
    "Total Empoyeee",
    "Department Color",
  ];

  useEffect(() => {
    dispatch(getDepartments());
  }, []);
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
      <TopTab
        leftComponent={<h1 className="font-bold text-[1.3rem]">Department</h1>}
        rightComponent={
          <Button
            icon={<FaPlus />}
            onClick={() => {
              dispatch(openModalByName(MODALS.ORGANIZATION.ADD_DEPARTMENT));
            }}
          >
            Add Department
          </Button>
        }
      />
      <div className="h-full px-6">
        <main>
          {isLoading ? (
            <>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : (
            <>
              {departments.length > 0 ? (
                <TableContainer
                  dotOption={dotOptions}
                  tableHeader={tableHeader}
                >
                  {departments.map(
                    (
                      {
                        id,
                        name,
                        firstName,
                        lastName,
                        members,
                        color_code,
                        profile_img,
                        managers,
                      },
                      index
                    ) => (
                      <TableRowItem id={id} dotOptions={dotOptions} key={index}>
                        {/* <td
                    onClick={() => {
                      dispatch(
                        openModalByName(MODALS.EMPLOYEE.EMPLOYEE_DETAILS)
                      );
                    }}
                  >
                    <div className="flex w-full h-full items-center pl-6 gap-x-3 capitalize">
                      <NameTag firstName={firstName} lastName={lastName} />
                      <p>{`${firstName} ${lastName}`}</p>
                    </div>
                  </td> */}
                        <td className="px-6 capitalize">{name}</td>
                        <td className="px-6">
                          <div className="flex w-full h-full items-center justify-start gap-x-3 capitalize">
                            <NameTag
                              firstName={
                                managers[0]?.first_name || "Unassigned"
                              }
                              lastName={managers[0]?.last_name}
                            />
                            <div className="text-left">
                              <p>
                                {`${managers[0]?.first_name || "Unassigned"} ${
                                  managers[0]?.last_name || "Unassigned"
                                }`}
                              </p>
                              <p className="text-sm text-gray-300">
                                Business Analyst
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-20">{members?.length}</td>
                        <td className="px-6 ">
                          <div className="flex items-center justify-start pl-12">
                            {color_code ? (
                              <div
                                className={`h-[20px] w-[20px] rounded-full bg-[${color_code}]`}
                                style={{ background: `${color_code}` }}
                              ></div>
                            ) : (
                              "--"
                            )}
                          </div>
                        </td>
                      </TableRowItem>
                    )
                  )}
                </TableContainer>
              ) : (
                <div className="w-full h-[500px] flex items-center justify-center text-gurugeeks-dark-500">
                  <div className="flex flex-col items-center justify-center">
                    {/* <MdWorkOff className="text-[80px] " /> */}
                    <p className=" font-semibold text-lg">
                      No Department Found
                    </p>
                    <p>
                      Your department list is empty. Create a new department.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        {openAddDepartmentModal[MODALS.ORGANIZATION.ADD_DEPARTMENT] && (
          <AddDepartment />
        )}
      </div>
    </>
  );
};

export default Department;
