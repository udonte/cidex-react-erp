import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { departmentalTargetData } from "../../../../../utils/dummyData.utils";
import { ROUTE_PATHS } from "../../../../../constants/routes.constants";
import {
  BreadCrumbs,
  Button,
  TabbedPages,
  TopTab,
} from "../../../../../components/HRM_components";
import DepartmentTargets from "../../../../../components/HRM_components/Admin/performance/goals/DepartmentTargets";
import CreateOganisationGoal from "../../../../../components/HRM_components/Admin/performance/goals/Modals/CreateOganisationGoalModal";
import CreateOganisationGoalModal from "../../../../../components/HRM_components/Admin/performance/goals/Modals/CreateOganisationGoalModal";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../../constants/modals.constant";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { fetchCompanyGoals } from "../../../../../features/HRM_features/performance/goals/goals.slice";
import { selectGoalSlice } from "../../../../../features/HRM_features/performance/goals/goals.selector";
import { encryptId } from "../../../../../utils/helperFunctions/crypto.utils";

const Goals = () => {
  const { companyGoals } = useSelector(selectGoalSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openModal = useSelector(selectModalsSlice);
  const breadcrumbItems = ["Performance", "Goals"];
  const tabsHeader = ["Departmental Targets", "Self Assessments"];

  useEffect(() => {
    dispatch(fetchCompanyGoals());
  }, []);

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <TopTab
        rightComponent={
          <Button
            onClick={() =>
              dispatch(openModalByName(MODALS.PERFORMANCE.CREATE_ORG_GOALS))
            }
          >
            Create Strategic Objective
          </Button>
        }
      />

      {companyGoals.map(({ id, name, description }, index) => (
        <div
          key={index}
          onClick={() => {
            navigate(
              `/HRM/${ROUTE_PATHS.PRIVATE.PERFORMNACE.GOALS}/${encryptId(id)}`
            );
          }}
          className="flex justify-between items-center px-6 py-4 mt-2 bg-white "
        >
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm text-gurugeeks-dark-500">{description}</p>
          </div>
          <div>
            <p className=" text-gurugeeks-dark-600">Cycle</p>
            <div className="flex items-center gap-x-2">
              <h1 className=" text-2xl">
                Q2
                <span className=" text-gurugeeks-dark-600">April - June</span>
              </h1>
            </div>
          </div>
          <FaChevronRight />
        </div>
      ))}
      {openModal[MODALS.PERFORMANCE.CREATE_ORG_GOALS] && (
        <CreateOganisationGoalModal />
      )}
    </div>
  );
};

export default Goals;
