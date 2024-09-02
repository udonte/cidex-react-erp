import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Stages from "../../../../../components/HRM_components/Admin/jobs/Stages";
import { FaPlus } from "react-icons/fa";
import {
  BreadCrumbs,
  TabbedPages,
  TableContainer,
  TableRowItem,
  Button,
  Spinner,
} from "../../../../../components/HRM_components";
import Candidates from "./Details/Candididates";
import JobDetail from "./Details/JobDetail";
import Notes from "./Details/Notes";
import { decryptId } from "../../../../../utils/helperFunctions/crypto.utils";
import { selectJobSlice } from "../../../../../features/HRM_features/recruitment/jobs/jobs.selector";
import { fetchJobById } from "../../../../../features/HRM_features/recruitment/jobs/jobs.slice";
import { editJobById } from "../../../../../features/HRM_features/recruitment/jobs/jobs.slice";

const JobDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [editable, setEditable] = useState(false);
  const tabsHeader = ["Candidates", "Job Details", "Notes"];
  const dispatch = useDispatch();
  const { job, isLoading } = useSelector(selectJobSlice);
  const { id } = useParams();
  const jobId = decryptId(id);

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const [editedJobData, setEditedJobData] = useState({
    id: jobId,
    title: job?.title,
    description: job?.description,
    salary_range: job?.salary_range,
    applicant_number: job?.applicant_number,
    department_ids: job?.department?.id,
    job_type: job?.job_type,
    contract_type: job?.contract_type,
    experience_level: job?.experience_level,
    year_of_experience: job?.year_of_experience,
    education_qualification: job?.education_qualification,
    recruitment_period: job?.recruitment_period,
    upload_file: job?.upload_file,
    country: job?.country,
    location: job?.location,
    is_active: job?.is_active,
  });

  useEffect(() => {
    dispatch(fetchJobById(jobId));
  }, [dispatch, jobId]);

  useEffect(() => {
    if (job) {
      setEditedJobData({
        id: jobId,
        title: job?.title,
        description: job?.description,
        salary_range: job?.salary_range,
        department_ids: job?.department_ids,
        applicant_number: job?.applicant_number,
        job_type: job?.job_type,
        contract_type: job?.contract_type,
        experience_level: job?.experience_level,
        year_of_experience: job?.year_of_experience,
        education_qualification: job?.education_qualification,
        recruitment_period: job?.recruitment_period,
        country: job?.country,
        location: job?.location,
        is_active: false,
      });
    }
  }, [dispatch, job, jobId]);

  const handleOnClickSave = () => {
    dispatch(editJobById(editedJobData))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchJobById(jobId));
          setEditable(false);
        }
      });
  };

  const pagesOutput = () => {
    if (tabIndex === 0) {
      return (
        <div>
          <Candidates job={job} />
        </div>
      );
    } else if (tabIndex === 1) {
      return (
        <div>
          <JobDetail
            setEditedJobData={setEditedJobData}
            editedJobData={editedJobData}
            editable={editable}
            job={job}
          />
        </div>
      );
    }
  };

  return (
    <>
      <div className="p-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-bold uppercase text-gurugeeks-grayLight-300 text-sm">
            {job?.title}
          </p>
          <p className="text-2xl text-gray-500 font-bold">{job?.title}</p>

          <div className="flex gap-x-3 items-center">
            {/* <div className="h-[6px] w-[6px] bg-gurugeeks-text-2 rounded-full"></div> */}
            <p className="font-bold capitalize text-gurugeeks-grayLight-300">
              {" "}
              {job?.job_type}
            </p>
          </div>
        </div>

        <Button icon={<FaPlus />}>Share & Promote</Button>
      </div>

      <div className="px-6">
        <TabbedPages
          rightComponent={
            tabIndex === 1 ? (
              <>
                {" "}
                {editable ? (
                  <div className="flex items-center gap-2">
                    <Button
                      color={"gray"}
                      onClick={() => {
                        setEditable(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        handleOnClickSave();
                      }}
                    >
                      {isLoading ? (
                        <div className="w-14 flex item-center justify-center">
                          <Spinner />
                        </div>
                      ) : (
                        "Save"
                      )}
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button
                      onClick={() => {
                        setEditable(true);
                      }}
                    >
                      Edit Job
                    </Button>
                  </div>
                )}
              </>
            ) : null
          }
          tabIndex={tabIndex}
          setTabIndex={changeTab}
          tabsHeader={tabsHeader}
        >
          {pagesOutput()}
        </TabbedPages>
      </div>
    </>
  );
};

export default JobDetails;
