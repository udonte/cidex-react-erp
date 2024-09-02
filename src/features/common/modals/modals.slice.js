import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EDIT_EMPLOYEE_details: false,
  EMPLOYEE_details: false,
  ADD_EMPLOYEE_details: false,
  IMPORT_employees: false,
  APPLICANT_details: false,
  CREATE_job: false,
  JOB_link: false,
  PROJECT: false,
  ACTIVITY: false,
  ASSIGN_leave: false,
  ADD_leave_type: false,
  ADD_course: false,
  EMPLOYEE_ADD_courses: false,
  CREATE_asset: false,
  IMPORT_asset: false,
  ADD_vendors: false,
  IMPORT_vendors: false,
  CHECKOUT_asset: false,
  CREATE_schedule: false,
  EDIT_month_payday: false,
  EDIT_week_payday: false,
  EDIT_biweek_payday: false,
  ADD_claim: false,
  VIEW_claim_details: false,
  APPROVE_claim: false,
  REJECT_claim: false,
  ADD_salary_component: false,
  CREATE_NEW_kpi: false,
  FEEDBACKS: false,
  ADD_department: false,
  ADD_designation: false,
  CREATE_ticket: false,
  CHANGE_plan: false,
  ADD_talent: false,
  ADD: false,
  IMPORT_contacts: false,
  DELETE_contact: false,
  ADD_filters: false,
  SAVE_list: false,
  REMOVE_contact_from_list: false,
  CREATE_ORG_goals: false,
  CREATE_DEP_goals: false,
  CREATE_DEP_task: false,
  SUBMIT_certificate: false,
  CREATE_customer_ticket: false,
  CAPTURE_leads: false,
  DELETE_lead: false,
  SAVE_lead: false,
  ASSIGN_task: false,
  CREATE_segment: false,
  KYC1: false,
  KYC2: false,
  ADD_tenants: false,
  ENTER_verification_code: false,
  CANCEL_billing: false,
  VIEW_payment_info: false,
  VIEW_payment_history: false,
  EDIT_subscriber: false,
  VIEW_payment_info_for_payments: false,
  VIEW_payment_history_for_payments: false,
  GENERATE_code: false,
  EDIT_code: false,
  REDEEM_code: false,
  DELETE_code: false,
  APPLY_leave: true,
  DELETE_product: false,
  EDIT_category: false,
  PREVIEW_plans: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,

  extraReducers: () => {},

  reducers: {
    closeAllModals: () => {
      return { ...initialState };
    },

    openModalByName: (_, action) => {
      return { ...initialState, [action.payload]: true };
    },
  },
});

export const { closeAllModals, openModalByName } = modalsSlice.actions;
export default modalsSlice.reducer;
