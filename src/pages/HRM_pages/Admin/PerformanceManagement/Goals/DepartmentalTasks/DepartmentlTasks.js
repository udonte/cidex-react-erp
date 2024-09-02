import React, { useEffect, useState } from "react";
import {
  BreadCrumbs,
  TabbedPages,
  TopTab,
} from "../../../../../../components/HRM_components";
import { FaChevronDown } from "react-icons/fa";
import Tasks from "./Tasks";
import { useParams } from "react-router-dom";
import { decryptId } from "../../../../../../utils/helperFunctions/crypto.utils";
import { useDispatch } from "react-redux";
import { fetchDepartmentalGoalByID } from "../../../../../../features/HRM_features/performance/goals/goals.slice";
import { useSelector } from "react-redux";
import { selectGoalSlice } from "../../../../../../features/HRM_features/performance/goals/goals.selector";

const DepartmentlTasks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const breadcrumbItems = ["Performance", "Goals"];
  const tabsHeader = ["Departmental Targets", "Self Assessments"];
  const { id } = useParams();
  const departmentGoalId = decryptId(id);
  const { departmentalGoal, isLoading } = useSelector(selectGoalSlice);

  useEffect(() => {
    dispatch(fetchDepartmentalGoalByID(departmentGoalId));
  }, []);

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const tabbedPages = () => {
    if (tabIndex === 0) {
      return (
        <>
          <div>
            <Tasks />
          </div>
        </>
      );
    } else {
      return <div>4</div>;
    }
  };

  return (
    <div className="">
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <TopTab
        leftComponent={
          <>
            <p>{departmentalGoal?.title}</p>
          </>
        }
      />
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
    </div>
  );
};

export default DepartmentlTasks;
