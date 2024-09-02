import React, { useEffect, useState } from "react";
import {
  Button,
  EmployeeSearchDropdown,
  Spinner,
  TabbedPages,
  TableRowItem,
  TopTab,
} from "../../../../../../components/HRM_components";
import FullNameTag from "../../../../../../components/HRM_components/_common/FullNameTag";
import { useDispatch } from "react-redux";
import { getDepartmentsById } from "../../../../../../features/HRM_features/organisation/departments/departments.slice";
import { useSelector } from "react-redux";
import { selectDepartment } from "../../../../../../features/HRM_features/organisation/departments/department.selector";
import { useParams } from "react-router-dom";
import { decryptId } from "../../../../../../utils/helperFunctions/crypto.utils";
import {
  fetchDepartmentalGoalByID,
  fetchEmployeeTask,
} from "../../../../../../features/HRM_features/performance/goals/goals.slice";
import { selectGoalSlice } from "../../../../../../features/HRM_features/performance/goals/goals.selector";
import PieChart from "../../../../../../components/HRM_components/_common/PieChart";
import { FaCheck, FaExclamation } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import CreateTask from "../../../../../../components/HRM_components/Admin/performance/goals/Modals/CreateTask";
import { openModalByName } from "../../../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../../../constants/modals.constant";
import { selectModalsSlice } from "../../../../../../features/common/modals/modals.selectors";
import { ImTarget } from "react-icons/im";
import { fetchEmployees } from "../../../../../../features/HRM_features/employee/employee.slice";

const Tasks = () => {
  const { id } = useParams();
  const departmentGoalId = decryptId(id);
  const { department } = useSelector(selectDepartment);
  const { departmentalGoal, isLoading, tasks } = useSelector(selectGoalSlice);
  const [depLoader, setDepLoader] = useState(true);
  const [tabIndex, setTabIndex] = useState(0);
  const openModal = useSelector(selectModalsSlice);

  const tabsHeader = [
    "All",
    "Completed",
    "In Progress",
    "Not Started",
    "Overdue",
  ];
  const changeTab = (index) => {
    setTabIndex(index);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeeTask());
    dispatch(fetchEmployees());
    dispatch(fetchDepartmentalGoalByID(departmentGoalId))
      .unwrap()
      .then((payload) => {
        dispatch(getDepartmentsById(payload.data.departments[0]?.id))
          .unwrap()
          .then(() => {
            setDepLoader(false);
          });
      });
  }, []);

  const tabbedPages = () => {
    if (tabIndex === 0) {
      return (
        <>
          <div>
            {" "}
            <div className="h-full">
              <main>
                {isLoading ? (
                  <>
                    <div className="h-[500px] w-full flex items-center justify-center">
                      <Spinner
                        className={"text-[80px] text-gurugeeks-orange-700"}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {tasks.length > 0 ? (
                      <>
                        {tasks.map((task, index) => (
                          <>
                            <div className=" h-[150px] bg-white w-full border-y-2 space-y-2 p-6">
                              <div className="flex items-center gap-x-3">
                                <ImTarget />
                                <p>{task.title}</p>
                              </div>
                              <div className="flex items-center justify-start gap-x-3">
                                <div className="w-[20%] text-center py-1 px-2 bg-[#0D99FF] rounded text-white">
                                  Goals Not started
                                </div>
                                <p className="w-fit">
                                  Due Date: {task.duedate}
                                </p>
                                <div className="w-[40%]">
                                  <EmployeeSearchDropdown
                                    selectedEmploye={task.assign_to}
                                  />
                                </div>
                              </div>
                              <div>
                                <p>Deadline is in 5 days</p>
                              </div>
                            </div>
                          </>
                        ))}
                      </>
                    ) : (
                      <div className="w-full h-[500px] flex items-center justify-center text-gurugeeks-dark-500">
                        <div className="flex flex-col items-center justify-center">
                          {/* <MdWorkOff className="text-[80px] " /> */}
                          <p className=" font-semibold text-lg">
                            No Tasks Found
                          </p>
                          <p>Your tasks list is empty. Create a new task.</p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </main>
            </div>
          </div>
        </>
      );
    } else if (tabIndex === 1) {
      return <div>4</div>;
    } else if (tabIndex === 2) {
      return <div>4</div>;
    } else if (tabIndex === 3) {
      return <div>4</div>;
    }
  };

  return (
    <div className="pb-[100px]">
      <TopTab
        rightComponent={
          <>
            <Button
              onClick={() =>
                dispatch(openModalByName(MODALS.PERFORMANCE.CREATE_DEP_TASK))
              }
            >
              Create New Task
            </Button>
          </>
        }
        leftComponent={
          <>
            <p className="text-xl font-semibold">
              {departmentalGoal?.departments[0]?.name}
            </p>
          </>
        }
      />
      <div className="m-6 mb-1 p-5 bg-white">
        <div>
          <h1 className="text-xl font-semibold">Task Allocation</h1>
          <div className="flex items-start py-3 justify-between">
            <div className="w-[40%] flex items-start">
              {depLoader ? (
                <>
                  <Spinner className={"text-xl text-gurugeeks-orange-600"} />
                </>
              ) : (
                <div className="flex items-start gap-x-4">
                  <div>
                    <FullNameTag
                      firstName={
                        department
                          ? department?.managers[0]?.first_name
                          : "Un Assigned"
                      }
                      lastName={
                        department
                          ? department?.managers[0]?.last_name
                          : "Un Assigned"
                      }
                    />
                    <p className="pl-10 text-sm">Manager</p>
                  </div>
                  <p className=" font-semibold">2 Tasks</p>
                </div>
              )}
            </div>

            <div className="w-[60%]">
              {depLoader ? (
                <>
                  {" "}
                  <Spinner className={"text-xl text-gurugeeks-orange-600"} />
                </>
              ) : (
                <div className="grid grid-cols-2">
                  {department?.members?.map((i, index) => (
                    <div className="flex items-start gap-x-4 m-1">
                      <FullNameTag
                        textClassName={" font-medium  "}
                        className={" col-span-1"}
                        firstName={i.first_name}
                        lastName={i.last_name}
                      />{" "}
                      <p className=" font-semibold">2 Tasks</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white mx-6 p-5">
        <p className="text-xl font-semibold">{departmentalGoal?.title}</p>
      </div>
      <div className="my-3 mx-6 px-5">
        <p>Goals Status as on</p>
      </div>
      <div className="mx-6 bg-white p-5">
        <div className=" h-[200px] w-[200px]">
          <PieChart />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-center items-start justify-center">
              <p className="text-center flex items-center gap-x-2 justify-center w-full my-1 font-semibold">
                <FaCheck />3
              </p>
              <div className="w-full py-1 px-2 bg-[#34A853] rounded text-white">
                Goals Completed
              </div>
            </div>
            <div className="flex flex-col text-center items-start justify-between">
              <p className="text-center flex items-center gap-x-2 justify-center w-full my-1 font-semibold">
                <FiClock />3
              </p>
              <div className="w-full py-1 px-2 bg-[#EF831E] rounded text-white">
                Goals In progress
              </div>
            </div>
            <div className="flex flex-col text-center items-start justify-between">
              <p className="text-center flex items-center gap-x-2 justify-center w-full my-1 font-semibold">
                <MdOutlineClose />3
              </p>
              <div className="w-full py-1 px-2 bg-[#0D99FF] rounded text-white">
                Goals Not started
              </div>
            </div>
            <div className="flex flex-col text-center items-start justify-between">
              <p className="text-center flex items-center gap-x-2 justify-center w-full my-1 font-semibold">
                <FaExclamation />3
              </p>
              <div className="w-full py-1 px-2 bg-[#D5281B] rounded text-white">
                Goals Overdue
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6">
        <TabbedPages
          tabIndex={tabIndex}
          setTabIndex={changeTab}
          tabsHeader={tabsHeader}
        >
          {tabbedPages()}
        </TabbedPages>
      </div>
      {<CreateTask isOpen={openModal[MODALS.PERFORMANCE.CREATE_DEP_TASK]} />}
    </div>
  );
};

export default Tasks;
