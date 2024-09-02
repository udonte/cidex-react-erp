import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { ROUTE_PATHS } from "../constants/routes.constants";
import {
  Applicants,
  Asset,
  AssetDetails,
  Dashboard,
  DepartmentAppraisals,
  Employee,
  EmployeeTimesheet,
  Goals,
  Helpdesk,
  JobDetails,
  Jobs,
  LearningDevelopment,
  LeaveType,
  ManageLeave,
  MandatoryTraining,
  MyTimesheet,
  Tickets,

  // ORGANISATION MANAGEMENT
  Department,
  Designation,
  Chart,

  // BENEFIT MANAGEMENT
  Overview,
  PayRuns,
  ProcessPayRuns,
  PerformanceSettings,
  Project,
  Salary,
  Settings,
  SettingsKPI,
  SubmissionDetails,
  TalentPool,
  VendorDetails,
  Vendors,
} from "../pages/HRM_pages";
import { DashboardLayout } from "../components/HRM_components";
import GoalsDetails from "../pages/HRM_pages/Admin/PerformanceManagement/Goals/GoalsDetails";
import HelpdeskSettings from "../pages/HRM_pages/Admin/Settings/ModuleSettings/HelpdeskSettings";
import OrganizationSettings from "../pages/HRM_pages/Admin/Settings/ModuleSettings/OrganizationSettings";
import LeaveSettings from "../pages/HRM_pages/Admin/Settings/ModuleSettings/LeaveSettings";
import AssetSettings from "../pages/HRM_pages/Admin/Settings/ModuleSettings/AssetSettings";
import RecruitmentForm from "../pages/HRM_pages/Admin/Recruitment/RecruitmentForm";
import { ProtectedRoute } from "./protectedRoute";

// import CRM_ROUTES from "..";
import PerformanceSetting from "../pages/HRM_pages/Admin/Settings/ModuleSettings/PerformanceSetting.js";
import DepartmentlTasks from "../pages/HRM_pages/Admin/PerformanceManagement/Goals/DepartmentalTasks/DepartmentlTasks.js";
import RecruitmentSettings from "../pages/HRM_pages/Admin/Settings/ModuleSettings/Recruitment/RecruitmentStages.js";
import RecruitmentSetting from "../pages/HRM_pages/Admin/Settings/ModuleSettings/Recruitment/RecruitmentSetting.js";
import RecruitmentStages from "../pages/HRM_pages/Admin/Settings/ModuleSettings/Recruitment/RecruitmentStages.js";
import RecruitmentScoreMetrics from "../pages/HRM_pages/Admin/Settings/ModuleSettings/Recruitment/RecruitmentScoreMetric.js";
import TicketDetails from "../pages/HRM_pages/_common/Helpdesk/TicketDetails.js";
import EmployeeSelfServiceLayout from "../components/HRM_components/_common/Layout/EmployeeSelfServiceLayout.jsx";
import { useSelector } from "react-redux";
import { selectUserType } from "../features/common/auth/auth.selector.js";

const HRM_ROUTES = () => {
  const userType = useSelector(selectUserType);

  return (
    <Routes>
      <Route
        path={`${ROUTE_PATHS.PRIVATE.RECRUITMENT.RECRUITMENT_FORM}/:id`}
        element={<RecruitmentForm />}
      />
      <Route
        element={
          <ProtectedRoute>
            {userType === "user" ? (
              <EmployeeSelfServiceLayout />
            ) : (
              <DashboardLayout />
            )}
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* RECRUITMENT STARTS HERE  */}
        <Route
          path={`${ROUTE_PATHS.PRIVATE.RECRUITMENT.JOB}`}
          element={<Jobs />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.RECRUITMENT.JOB}/:id`}
          element={<JobDetails />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.RECRUITMENT.APPLICANTS}`}
          element={<Applicants />}
        />

        <Route
          path={`${ROUTE_PATHS.PRIVATE.RECRUITMENT.TALENT_POOL}`}
          element={<TalentPool />}
        />
        {/* EMPLOYEE STARTS HERE  */}
        <Route
          path={`${ROUTE_PATHS.PRIVATE.EMPLOYEE}`}
          element={<Employee />}
        />
        {/* TIMESHEET MANAGEMENT STARTS HERE  */}
        <Route
          path={`${ROUTE_PATHS.PRIVATE.TIMESHEET.MY_TIMESHEET}`}
          element={<MyTimesheet />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.TIMESHEET.PROJECT}`}
          element={<Project />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.TIMESHEET.EMPLOYEE_TIMESHEET}`}
          element={<EmployeeTimesheet />}
        />
        {/* PERFORMANCE MANAGEMENT STARTS HERE */}
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.SETTINGS}`}
          element={<PerformanceSettings />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.SETTINGSKPI}`}
          element={<SettingsKPI />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.MANDATORY_TRAINING}`}
          element={<MandatoryTraining />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.MANDATORY_TRAINING}/:id`}
          element={<SubmissionDetails />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.LEARNING}`}
          element={<LearningDevelopment />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.GOALS}`}
          element={<Goals />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.GOALS}/:id`}
          element={<GoalsDetails />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.GOALS_APPRAISALS}`}
          element={<DepartmentAppraisals />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.PERFORMNACE.CREAT_TASK}/:id`}
          element={<DepartmentlTasks />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.LEAVE_MANAGEMENT.MANAGE_LEAVE}`}
          element={<ManageLeave />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.LEAVE_MANAGEMENT.LEAVE_TYPE}`}
          element={<LeaveType />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.HELPDESK.HELPDESK}`}
          element={<Helpdesk />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.HELPDESK.HELPDESK}/:id`}
          element={<TicketDetails />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.ASSET_MANAGEMENT.ASSET}`}
          element={<Asset />}
        />
        {/* BENEFIT MANAGEMENT STARTS HERE */}
        <Route
          path={`${ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.OVERVIEW}`}
          element={<Overview />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.SALARY}`}
          element={<Salary />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.PAYRUNS}`}
          element={<PayRuns />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.BENEFIT_MANAGEMENT.PAYRUNS}/:id`}
          element={<ProcessPayRuns />}
        />

        {/* BENEFIT MANAGEMENT ENDS HERE */}
        <Route
          path={`${ROUTE_PATHS.PRIVATE.ASSET_MANAGEMENT.ASSET}/:id`}
          element={<AssetDetails />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.ASSET_MANAGEMENT.VENDORS}`}
          element={<Vendors />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.ASSET_MANAGEMENT.VENDORS}/:id`}
          element={<VendorDetails />}
        />
        {/*  ORGANISATION MANAGEMENT START HERE */}
        <Route
          path={`${ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.DEPARTMENT}`}
          element={<Department />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.DESIGNATION}`}
          element={<Designation />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.ORGANIZATION_MANAGEMENT.CHART}`}
          element={<Chart />}
        />
        {/* ORGANISATION MANAGEMENT ENDS HERE */}
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}`}
          element={<Settings />}
        />

        {/* SETTINGS */}

        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}/helpdesksettings`}
          element={<HelpdeskSettings />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}/recruitmentsettings`}
          element={<RecruitmentSetting />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}/recruitmentsettings/stages`}
          element={<RecruitmentStages />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}/recruitmentsettings/score-metric`}
          element={<RecruitmentScoreMetrics />}
        />
        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}/performancesettings`}
          element={<PerformanceSetting />}
        />

        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}/organizationsettings`}
          element={<OrganizationSettings />}
        />

        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}/leavesettings`}
          element={<LeaveSettings />}
        />

        <Route
          path={`${ROUTE_PATHS.PRIVATE.SETTINGS.SETTINGS}/assetsettings`}
          element={<AssetSettings />}
        />
      </Route>
    </Routes>
  );
};

export default HRM_ROUTES;
