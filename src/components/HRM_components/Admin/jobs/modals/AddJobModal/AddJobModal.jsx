import React, { useEffect, useState } from "react";
import JobInfoForm from "./JobInfoForm";
import HiringTeam from "./HiringTeam";
// import JobsProgressBar from "../../../../jobs/JobsProgressBar";
import ScoreCard from "./ScoreCard";
import { useDispatch, useSelector } from "react-redux";
import { BiCheck } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { selectEmployeeSlice } from "../../../../../../features/HRM_features/employee/employee.selector";
import { fetchEmployees } from "../../../../../../features/HRM_features/employee/employee.slice";
import { fetchJobs } from "../../../../../../features/HRM_features/recruitment/jobs/jobs.slice";
import { closeAllModals } from "../../../../../../features/common/modals/modals.slice";
import Button from "../../../../_common/Button/Button";
import Spinner from "../../../../../_common/Spinner";
import { selectJobSlice } from "../../../../../../features/HRM_features/recruitment/jobs/jobs.selector";
import MiddleModalContainer from "../../../../_common/MiddleModalContainer/MiddleModalContainer";
import { getDepartments } from "../../../../../../features/HRM_features/organisation/departments/departments.slice";
import { selectDepartment } from "../../../../../../features/HRM_features/organisation/departments/department.selector";

const AddJobModal = () => {
  const { departments } = useSelector(selectDepartment);
  const [pageIndex, setPageIndex] = useState(0);
  const { isLoading } = useSelector(selectJobSlice);
  const jobId = localStorage.getItem("job_id");
  const scoreCardId = localStorage.getItem("score_card_id");
  const hiringTeam = localStorage.getItem("hiring_team");
  const { employees } = useSelector(selectEmployeeSlice);
  const dispatch = useDispatch();

  const formData = {
    title: "",
    description: "",
    requirements: "N/A",
    salary_range: "",
    applicant_number: "",
    job_type: "",
    contract_type: "",
    experience_level: "",
    year_of_experience: 0,
    education_qualification: "",
    recruitment_period: "",
    upload_file: null,
    country: "nigeria",
    location: "",
    is_active: false,
  };



  return (
    <MiddleModalContainer title="Add Job">
      <div className="bg-white p-5 w-[1050px] h-[520px] ">
        <div className=" w-full h-[500px] overflow-y-scroll">
          <>
            <div className="h-full">
              <JobInfoForm departments={departments} />
            </div>
          </>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default AddJobModal;
