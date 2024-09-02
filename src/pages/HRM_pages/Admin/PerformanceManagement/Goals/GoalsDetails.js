import React, { useEffect, useState } from "react";
import {
  Button,
  Spinner,
  TabbedPages,
  TopTab,
} from "../../../../../components/HRM_components";
import { FaChevronDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { departmentalTargetData } from "../../../../../utils/dummyData.utils";
import DepartmentTargets from "../../../../../components/HRM_components/Admin/performance/goals/DepartmentTargets";
import { ROUTE_PATHS } from "../../../../../constants/routes.constants";
import CreateDepartmentalGoal from "../../../../../components/HRM_components/Admin/performance/goals/Modals/CreateDepartmentalGoal";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../../constants/modals.constant";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { decryptId } from "../../../../../utils/helperFunctions/crypto.utils";
import { fetchDepartmentalGoals } from "../../../../../features/HRM_features/performance/goals/goals.slice";
import { selectGoalSlice } from "../../../../../features/HRM_features/performance/goals/goals.selector";

const GoalsDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const tabsHeader = ["Departmental Targets", ""];
  const openModal = useSelector(selectModalsSlice);
  const { departmentalTarget, isLoading } = useSelector(selectGoalSlice);
  const { id } = useParams();
  const strategicObjectiveId = decryptId(id);

  useEffect(() => {
    dispatch(fetchDepartmentalGoals());
  }, []);

  const tabbedPages = () => {
    if (tabIndex === 0) {
      return (
        <>
          <div className="flex justify-between items-center bg-white py-2 px-6 my-2">
            <div>
              <h1 className=" font-bold">Departments</h1>
              <p>
                <span className="font-bold">5</span> Departments
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <div>
                <h1 className=" font-semibold">Due Date for Cycle</h1>
                <p>28/07/2023</p>
              </div>
              <Button
                onClick={() => {
                  dispatch(
                    openModalByName(MODALS.PERFORMANCE.CREATE_DEP_GOALS)
                  );
                }}
              >
                Create New
              </Button>
            </div>
          </div>
          <div>
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
                {departmentalTarget.map((data, index) => (
                  <div className="my-2">
                    {/* <Link
                  to={`/HRM/${ROUTE_PATHS.PRIVATE.PERFORMNACE.GOALS_APPRAISALS}`}
                > */}
                    <DepartmentTargets data={data} />
                    {/* </Link> */}
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      );
    } else {
      return <div>4</div>;
    }
  };

  const changeTab = (index) => {
    setTabIndex(index);
  };
  return (
    <div>
      {/* <TopTab leftComponent={<></>} /> */}
      <TabbedPages
        tabIndex={tabIndex}
        setTabIndex={changeTab}
        rightComponent={
          <>
            <div className="flex items-center gap-x-2">
              <h1 className=" text-2xl">
                Q2
                <span className=" text-gurugeeks-dark-600"> April - June</span>
              </h1>
              <FaChevronDown />
            </div>
          </>
        }
        tabsHeader={tabsHeader}
      >
        {tabbedPages()}
      </TabbedPages>
      <CreateDepartmentalGoal
        strategic_objective_id={strategicObjectiveId}
        isOpen={openModal[MODALS.PERFORMANCE.CREATE_DEP_GOALS]}
      />
    </div>
  );
};

export default GoalsDetails;
