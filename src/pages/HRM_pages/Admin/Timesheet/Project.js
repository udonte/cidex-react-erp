import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { AiFillProject } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { FaPlus, FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  AddActivityModal,
  AddProjectModal,
  BreadCrumbs,
  Button,
  EmployeeSearchDropdown,
  FilterTab,
  NameTag,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../components/HRM_components";
import { fetchProjects } from "../../../../features/HRM_features/timesheet/project/projects.slice";
import { selectProjectSlice } from "../../../../features/HRM_features/timesheet/project/projects.selector";
import { fetchActivity } from "../../../../features/HRM_features/timesheet/activity/activity.slice";
import { MODALS } from "../../../../constants/modals.constant";
import Spinner from "../../../../components/_common/Spinner";
import { selectActivtySlice } from "../../../../features/HRM_features/timesheet/activity/activity.selector";
import DotOptionButton from "../../../../components/_common/DotOptionButton";

const Project = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [showAssignTo, setShowAssignTo] = useState(false);
  const [assignToIndex, setAssignToIndex] = useState(null);
  const openModal = useSelector(selectModalsSlice);
  const { projectData, isLoading } = useSelector(selectProjectSlice);
  const { activities } = useSelector(selectActivtySlice);
  const tabsHeader = ["Project", "Activity"];
  const tableProjectHeader = [
    "Project ID",
    "Client Name",
    "Project Name",
    "Project Supervisor",
  ];
  const dotOptions = [
    { text: "View Details", icon: <FaPlus /> },
    { text: "Add to a Custom List", icon: <FaPlus /> },
    { text: "Delete Contact", icon: <FaTrash /> },
  ];

  const breadcrumbItems = ["Timesheet", "Project"];

  const changeTab = (index) => {
    setPage(index);
  };

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchActivity());
  }, [dispatch]);

  const output = () => {
    if (page === 0) {
      if (projectData.length > 0) {
        return (
          <div className="w-full h-full">
            <TableContainer
              // pagination={true}
              dotOption={dotOptions}
              tableHeader={tableProjectHeader}
            >
              {projectData.map(({ client_name, name, project_sow }, index) => {
                return (
                  <TableRowItem dotOptions={dotOptions}>
                    <td className="px-6">#{project_sow}</td>
                    <td>{client_name}</td>
                    <td>{name}</td>
                    <td onMouseLeave={() => setShowAssignTo(false)}>
                      <div className="relative">
                        <div className="flex items-center gap-x-2 justify-center">
                          <div className="flex items-center justify-start text-left gap-x-3 capitalize">
                            <NameTag firstName="olaoluwa" />
                            <p className="capitalize text-left font-medium">
                              olaoluwa Owonikoko
                            </p>
                          </div>
                          <div
                            onClick={() => {
                              setShowAssignTo(true);
                              setAssignToIndex(index);
                            }}
                            className=" cursor-pointer flex items-center gap-x-1 text-xs text-gurugeeks-orange-600"
                          >
                            <p>Assign to</p>
                            {showAssignTo && assignToIndex === index ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </div>
                        </div>
                        {showAssignTo && assignToIndex === index && (
                          <div
                            onMouseLeave={() => setShowAssignTo(false)}
                            className="absolute w-[300px] top-0  z-40"
                          >
                            <EmployeeSearchDropdown />
                          </div>
                        )}
                      </div>
                    </td>
                    {/* <td>{supervisors}</td> */}
                  </TableRowItem>
                );
              })}
            </TableContainer>
          </div>
        );
      } else {
        return (
          <div className="w-full h-[300px] flex items-center justify-center text-gurugeeks-dark-500">
            <div className="flex flex-col items-center justify-center">
              <AiFillProject className="text-[80px]" />
              <p className=" font-semibold text-lg">No project added yet</p>
              <p>Your project list is empty. Create a new project.</p>
            </div>
          </div>
        );
      }
    } else if (page === 1) {
      if (activities.length > 0) {
        return (
          <div className="w-full h-full ">
            <TableContainer tableHeader={["Activity Name", "Action"]}>
              {activities.map((activity) => {
                return (
                  <TableRowItem>
                    <td className="pl-6">{activity.name}</td>
                    <td>
                      <DotOptionButton />
                    </td>
                  </TableRowItem>
                );
              })}
            </TableContainer>
          </div>
        );
      } else {
        return (
          <div className="w-full h-[300px] flex items-center justify-center text-gurugeeks-dark-500">
            <div className="flex flex-col items-center justify-center">
              <FiActivity className="text-[80px]" />
              <p className=" font-semibold text-lg">No activity added yet</p>
              <p>Your activty list is empty. Create a new activity.</p>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <>
      <div className="h-full">
        <BreadCrumbs breadcrumbItems={breadcrumbItems} />
        {/* <Button
          size={"sm"}
          color="secondary"
          className="text-orange-700 font-bold"
        >
          Export Data
        </Button> */}
        <TabbedPages
          tabIndex={page}
          setTabIndex={changeTab}
          tabsHeader={tabsHeader}
          rightComponent={
            <div>
              {page === 0 ? (
                <Button size={"md"}>
                  <button
                    onClick={() => {
                      dispatch(openModalByName(MODALS.TIMESHEET.PROJECT));
                    }}
                  >
                    Add Project
                  </button>
                </Button>
              ) : (
                <Button size={"md"}>
                  <button
                    onClick={() => {
                      dispatch(openModalByName(MODALS.TIMESHEET.ACTIVITY));
                    }}
                  >
                    Add Activity
                  </button>
                </Button>
              )}
            </div>
          }
        >
          <FilterTab sort={true} search={true} />
          {isLoading ? (
            <>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : (
            <main className="w-full h-full px-6">{output()}</main>
          )}
        </TabbedPages>
        <AddProjectModal isOpen={openModal[MODALS.TIMESHEET.PROJECT]} />
        <AddActivityModal
          projects={projectData}
          isOpen={openModal[MODALS.TIMESHEET.ACTIVITY]}
        />
      </div>
    </>
  );
};

export default Project;
