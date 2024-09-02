import { configureStore } from "@reduxjs/toolkit";
import appSettingsReducer from "../features/common/app-settings/appSettings.slice";
import authReducer from "../features/common/auth/auth.slice";
import jobsReducer from "../features/HRM_features/recruitment/jobs/jobs.slice";
import employeeReducer from "../features/HRM_features/employee/employee.slice";
import leaveReducer from "../features/HRM_features/leave/leave.slice";
import departmentsReducer from "../features/HRM_features/organisation/departments/departments.slice";
import positionReducer from "../features/HRM_features/organisation/positions/position.slice";
import projectReducer from "../features/HRM_features/timesheet/project/projects.slice";
import activityReducer from "../features/HRM_features/timesheet/activity/activity.slice";
import mandatoryReducer from "../features/HRM_features/performance/mandatoryTraining/mandatory.slice";
import learningAndDevlopmentReducer from "../features/HRM_features/performance/learningDevelopment/learning.slice";
import goalsSlice from "../features/HRM_features/performance/goals/goals.slice";
import assetsSlice from "../features/HRM_features/inventory/assets/assets.slice";
import vendorsSlice from "../features/HRM_features/inventory/vendors/vendors.slice";
import talentPoolReducer from "../features/HRM_features/recruitment/talentPool/talentPool.slice";
import modalsSlice from "../features/common/modals/modals.slice";
import applicantsSlice from "../features/HRM_features/recruitment/applicants/applicants.slice";
import settingsSlice from "../features/HRM_features/settings/settings.slice";
import helpdeskSlice from "../features/HRM_features/helpdesk/helpdesk.slice";
import contactSlice from "../features/CRM_features/contactManagement/contact.slice";
import productSlice from "../features/CRM_features/inventoryManagement/product/product.slice";
import categorySlice from "../features/CRM_features/inventoryManagement/categories/categories.slice";
import applicationsSlice from "../features/HRM_features/recruitment/applications/applications.slice";
import subscriptionSlice from "../features/common/subscription/subscription.slice";
import permissionSlice from "../features/common/permissions/permission.slice";
import scheduledInterviewSlice from "../features/HRM_features/recruitment/scheduleInterview/scheduleInterview.slice";
import leadSlice from "../features/CRM_features/leadManagement/lead.slice";
import contactSegmentSlice from "../features/CRM_features/contactManagement/contactSegment/segment.slice";

const store = configureStore({
  reducer: {
    appSettings: appSettingsReducer,
    modals: modalsSlice,
    auth: authReducer,
    jobs: jobsReducer,
    talents: talentPoolReducer,
    employees: employeeReducer,
    leaves: leaveReducer,
    departments: departmentsReducer,
    positions: positionReducer,
    activity: activityReducer,
    projects: projectReducer,
    mandatoryTraining: mandatoryReducer,
    learningAndDevlopment: learningAndDevlopmentReducer,
    goals: goalsSlice,
    assets: assetsSlice,
    vendors: vendorsSlice,
    applicants: applicantsSlice,
    settings: settingsSlice,
    helpdesk: helpdeskSlice,
    contacts: contactSlice,
    products: productSlice,
    categories: categorySlice,
    applications: applicationsSlice,
    schedules: scheduledInterviewSlice,
    subscription: subscriptionSlice,
    permission: permissionSlice,
    leads: leadSlice,
    segments: contactSegmentSlice,
  },
});

export default store;
