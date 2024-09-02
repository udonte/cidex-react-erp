import { toast } from "react-toastify";
import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const fetchSalaryComponentThunk = async () => {
  // "recruitment/jobs/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=false&load_related=false";
  try {
    const res = await axiosInstance.get(`/employees/total/count`);
    return res.data.count;
  } catch (error) {
    return error;
  }
};

export const createSalaryComponentThunk = async (
  salaryComponentData = {
    name: "",
    designation_ids: "",
    earning_type: "",
    calculation_type: "",
    parentage_basics: 0,
    amount: 0,
    is_active: true,
  }
) => {
  try {
    const number = {
      amount: parseInt(salaryComponentData.amount),
      parentage_basics: parseInt(salaryComponentData.parentage_basics),
    };
    const res = await axiosInstance.post("/salary_component/", {
      ...salaryComponentData,
      ...number,
    });
    if (res.status === 201) {
      return res.data;
    }
  } catch (error) {
    toast.error(error.data.detail);
    return error.data.detail;
  }
};
