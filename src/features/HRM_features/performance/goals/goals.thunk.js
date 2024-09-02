import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchCompanyGoalsThunk = async () => {
  try {
    const res = await axiosInstance.get(
      "organization/strategics/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=true"
    );
    return res.data;
  } catch (error) {}
};
export const createCompanyGoalsThunk = async (
  objectiveData = {
    name: "",
    description: "",
    cycle_ids: [""],
  }
) => {
  try {
    const res = await axiosInstance.post(
      "organization/strategics/",
      objectiveData
    );
  } catch (error) {}
};
export const createGoalCycleThunk = async () => {
  try {
    const res = await axiosInstance.get(
      "organization/goal/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=false"
    );
  } catch (error) {}
};
export const fetchGoalCycleThunk = async () => {
  try {
    const res = await axiosInstance.get(
      "organization/cycles/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=false"
    );
    return res.data;
  } catch (error) {}
};
export const createEmployeeTaskThunk = async (
  taskData = {
    title: "",
    duedate: "",
    assign_to_id: "",
    priority: "",
    description: "",
  }
) => {
  try {
    const res = await axiosInstance.post("task_managers/", taskData);
    return res.data;
  } catch (error) {
    return error;
  }
};
export const fetchEmployeeTaskThunk = async () => {
  try {
    const res = await axiosInstance.get(
      "task_managers/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=true"
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
export const createDepartmentalGoalsThunk = async (departmentalGoal) => {
  try {
    const res = await axiosInstance.post(
      "organization/goals/",
      departmentalGoal
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
export const fetchDepartmentalGoalsThunk = async () => {
  try {
    const res = await axiosInstance.get(
      "organization/goals/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=true"
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
export const fetchDepartmentalGoalByIDThunk = async (departmentGoalID) => {
  try {
    const res = await axiosInstance.get(
      `organization/goals/${departmentGoalID}?per_page=10&page=1&sort_by=desc&order_by=id&load_related=true`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
export const createKPIThunk = async (
  KPIdata = {
    name: "",
    description: "",
  }
) => {
  try {
    const res = await axiosInstance.post("kpis/", KPIdata);
    return res.data;
  } catch (error) {
    return error;
  }
};
export const fetchKPIThunk = async () => {
  try {
    const res = await axiosInstance.get(
      "kpis/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=false"
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
// export const createGoalCycleThunk = async () => {
//   try {
//     const res = axiosInstance.get(
//       "organization/goal/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=false"
//     );
//     ;
//   } catch (error) {
//     ;
//   }
// };
// export const fetchGoalCycleThunk = async () => {
//   try {
//     const res = axiosInstance.get(
//       "organization/goal/?per_page=10&page=1&sort_by=desc&order_by=id&load_related=false"
//     );
//     ;
//   } catch (error) {
//     ;
//   }
// };
