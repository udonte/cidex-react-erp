import { toast } from "react-toastify";
import axiosInstance from "../../../../utils/helperFunctions/axios.utils";

export const fetchJobsThunk = async () => {
  // "recruitment/jobs/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=false&load_related=false";

  try {
    const response = await axiosInstance.get(
      `/recruitment/jobs/?page=1&per_page=10&order_by=-id&export_to_excel=false&sort_by=desc&load_related=true`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchJobByIdThunk = async (job_id) => {
  // "recruitment/jobs/?per_page=10&page=1&sort_by=desc&order_by=id&is_active=false&load_related=false";
  try {
    const response = await axiosInstance.get(`/recruitment/jobs/${job_id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const editJobByIdThunk = async (
  editJobData = {
    id: "",
    title: "",
    description: "",
    requirements: "",
    salary_range: 0,
    department_ids: [],
    applicant_number: 0,
    job_type: "",
    contract_type: "",
    experience_level: "",
    year_of_experience: "",
    education_qualification: "",
    recruitment_period: "",
    upload_file: "",
    country: "",
    location: "",
    is_active: "",
  }
) => {
  try {
    const response = await axiosInstance.put(
      `/recruitment/jobs/${editJobData.id}`,
      editJobData
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postJobsThunk = async (
  jobData = {
    title: "",
    description: "",
    // requirements: "",
    salary_range: 0,
    applicant_number: 0,
    job_type: "",
    contract_type: "",
    experience_level: "",
    year_of_experience: "",
    education_qualification: "",
    recruitment_period: "",
    upload_file: "",
    country: "",
    location: "",
    is_active: null,
  }
) => {
  try {
    const jobDataIntegars = {
      applicant_number: parseInt(jobData.applicant_number),
      salary_range: parseInt(jobData.salary_range),
      year_of_experience: parseInt(jobData.year_of_experience),
      upload_file: String(jobData.upload_file),
    };
    const reqData = { ...jobData, ...jobDataIntegars };
    const res = await axiosInstance.post("/recruitment/jobs/", reqData);
    return res.data;
  } catch (error) {
    toast.error(error.details);
    return error;
  }
};

export const postScoreCardThunk = async (
  scoreCardData = {
    job_id: "",
    metrics: [],
  }
) => {
  try {
    const res = await axiosInstance.post(
      "/recruitment/scores/metrics/bulk",
      scoreCardData
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
export const postHiringTeamThunk = async (
  hiringTeamData = {
    job_id: "",
    member_ids: [],
    role: "",
    notify_members: true,
  }
) => {
  try {
    const res = await axiosInstance.post("/recruitment/teams/", hiringTeamData);
    return res.data.id;
  } catch (error) {}
};
