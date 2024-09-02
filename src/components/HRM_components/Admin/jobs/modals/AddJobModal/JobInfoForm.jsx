import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import JobsProgressBar from "../../../../jobs/JobsProgressBar";
import Spinner from "../../../../../_common/Spinner";
import { selectJobSlice } from "../../../../../../features/HRM_features/recruitment/jobs/jobs.selector";
import Button from "../../../../_common/Button/Button";
import ToggleButton from "../../../../_common/ToggleButton";
import CustomDropdown from "../../../../_common/CustomDropDown";
import {
  fetchJobs,
  postJobs,
} from "../../../../../../features/HRM_features/recruitment/jobs/jobs.slice";
import { selectScorecardMetrics } from "../../../../../../features/HRM_features/settings/settings.selector";
import { fetchScoreMetrics } from "../../../../../../features/HRM_features/settings/settings.slice";
import { closeAllModals } from "../../../../../../features/common/modals/modals.slice";

const JobInfoForm = ({ departments }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectJobSlice);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);
  const scoreCardMetrics = useSelector(selectScorecardMetrics);

  const [formData, setFormData] = useState({
    title: "",
    department_ids: [],
    description: "",
    salary_range: "",
    applicant_number: "",
    job_type: "",
    contract_type: "",
    work_schedule: "",
    experience_level: "",
    year_of_experience: 0,
    education_qualification: "",
    recruitment_period: "",
    upload_file: null,
    country: "",
    location: "",
    is_active: false,
  });

  useEffect(() => {
    dispatch(fetchScoreMetrics());
  }, []);

  const handleIsJobActive = () => {
    setFormData((prev) => ({ ...prev, is_active: !formData.is_active }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileString = event.target.result; // The file content as a string
        setFormData((prevData) => ({
          ...prevData,
          upload_file: fileString,
        }));
      };

      // Read the selectedFile as text (string)
      reader.readAsText(file);
    } else {
      // Handle the case where the user clears the file input
      setFormData((prevData) => ({
        ...prevData,
        upload_file: "", // Clear the file content in the form data
      }));
    }
  };

  // const handleFileChange = (e) => {

  //   // setFormData((prevData) => ({
  //   //   ...prevData,
  //   //   upload_file: e.target.files[0],
  //   // }));
  // };

  const handleDropdownSelect = (name, selectedOption) => {
    setFormData((prevState) => ({ ...prevState, [name]: selectedOption }));
  };

  const areRequiredFieldsFilled = () => {
    return (
      formData.recruitment_period.trim() !== "" &&
      formData.salary_range.trim() !== "" &&
      formData.location.trim() !== "" &&
      formData.title.trim() !== "" &&
      formData.education_qualification.trim() !== "" &&
      // formData.requirements.trim() !== "" &&
      formData.description.trim() !== "" &&
      formData.applicant_number.trim() !== ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!areRequiredFieldsFilled()) {
      toast.error("Please fill in all required fields.");
    } else {
      // Submit form or perform further actions
      dispatch(postJobs(formData))
        .unwrap()
        .then((payload) => {
          console.log(payload);
          if (payload?.created_at && payload?.id) {
            dispatch(closeAllModals());
            dispatch(fetchJobs());
          }
        });
    }
  };

  const contractTypeOptions = [
    { value: "permanent", label: "Permanent" },
    { value: "tempoary", label: "Tempoary" },
  ];
  const workScheduleOptions = [
    { value: "onsite", label: "Onsite" },
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
  ];
  const jobTypeOptions = [
    { value: "full_time", label: "Full Time" },
    { value: "part_time", label: "Part Time" },
    { value: "contractor", label: "Contractor" },
  ];

  const experienceLevel = [
    { value: "entry_level", label: "Entry Level" },
    { value: "junior", label: "Junior" },
    { value: "mid_level", label: "Mid Level" },
    { value: "senior", label: "Senior Level" },
  ];
  const educationQualification = [
    { value: "bachelor", label: "Bachelor" },
    { value: "high_school", label: "High School" },
    { value: "associate", label: "Associate" },
    { value: "master", label: "Master" },
    { value: "doctorate", label: "Doctorate" },
  ];

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="w-full px-3">
        <div className="my-3 flex gap-x-3 justify-between items-center">
          <div className="w-full">
            <label htmlFor="job_title">Job Title</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-col">
            <CustomDropdown
              label="Experience Level"
              options={experienceLevel}
              onSelect={(selectedOption) => {
                handleDropdownSelect("experience_level", selectedOption);
              }}
            />
          </div>
        </div>
        <div className="my-3 flex gap-x-3 justify-between items-center">
          <div className="w-full flex flex-col">
            <CustomDropdown
              label="Job Type"
              options={jobTypeOptions}
              onSelect={(selectedOption) => {
                handleDropdownSelect("job_type", selectedOption);
              }}
            />
          </div>
          <div className="w-full ">
            <label htmlFor="location">Job Location</label>
            <input
              id="location"
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="text"
              value={formData.location}
              name="location"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="my-3 flex gap-x-3 justify-between items-center">
          <div className="w-full">
            <CustomDropdown
              label="Department"
              onSelect={(selectedOption) => {
                handleDropdownSelect("department_ids", [selectedOption]);
              }}
              options={departments?.map((items) => ({
                value: items.id,
                label: items.name,
              }))}
            />
          </div>
          <div className="w-full ">
            <label htmlFor="applicant_number">Applicants to hire</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="number"
              value={formData.applicant_number}
              name="applicant_number"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="my-3 flex gap-x-3 justify-between items-center">
          <div className="w-full flex flex-col">
            <CustomDropdown
              label="Qualification Required"
              options={educationQualification}
              onSelect={(selectedOption) => {
                handleDropdownSelect("education_qualification", selectedOption);
              }}
            />
          </div>
          <div className="w-full ">
            <label>Years of work experience</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="number"
              value={formData.year_of_experience}
              name="year_of_experience"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="my-3 flex gap-x-3 justify-between items-center">
          <div className="w-full">
            <label>Recruitment Period</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              name="recruitment_period"
              value={formData.recruitment_period}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full ">
            <label>Salary range</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="number"
              value={formData.salary_range}
              name="salary_range"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="my-3 flex gap-x-3 justify-between items-center">
          <div className="w-full flex flex-col">
            <label>Upload a File:</label>
            <input
              className="p-3 w-full h-14 border bg-slate-50 rounded-md"
              type="file"
              onChange={handleFileChange}
            />
          </div>

          <div className="w-full flex flex-col">
            <CustomDropdown
              label="Contract Type"
              options={contractTypeOptions}
              onSelect={(selectedOption) => {
                handleDropdownSelect("contract_type", selectedOption);
              }}
            />
          </div>
        </div>
        <div className="my-3 flex gap-x-3 justify-between items-center w-full">
          <div className="w-2/4">
            <label>Job Description</label>
            <textarea
              className="p-3 w-full w- h-14 border bg-slate-50 rounded-md"
              type="textarea"
              value={formData.description}
              name="description"
              onChange={handleInputChange}
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="w-2/4 flex flex-col">
            <CustomDropdown
              label="Work Schedule"
              options={workScheduleOptions}
              onSelect={(selectedOption) => {
                handleDropdownSelect("work_schedule", selectedOption);
              }}
            />
          </div>
        </div>{" "}
        {/* <CustomCheckboxDropdown
          handleSelect={(selectedOption) => {
            handleDropdownSelect("cycle_ids", selectedOption);
          }}
          label={"Select Cycle"}
          options={scoreCardMetrics?.map((items) => ({
            value: items.id,
            label: items.name,
          }))}
        /> */}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-3 items-center">
          <p className="font-bold">Inactive</p>
          <ToggleButton
            activeState={formData.is_active}
            handleOnClick={handleIsJobActive}
          />
          <p className="font-bold">Active</p>
        </div>
        <div className="flex justify-end items-center gap-x-2 py-2">
          <Button size={"lg"} type="button" color={"secondary"}>
            Cancel
          </Button>
          <Button size={"lg"} type="submit">
            {isLoading ? (
              <div className="w-14">
                <Spinner />
              </div>
            ) : (
              "Submit Job"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

// const JobPostingForm = () => {
//   return (
//     <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
//       {/* Render input fields here */}
//       <div className="mb-4">
//         <label className="block mb-2 font-bold" htmlFor="title">
//           Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={formData.title}
//           onChange={handleInputChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       {/* Other input fields... */}
//       <div className="mb-4">
//         <label className="block mb-2 font-bold" htmlFor="job_type">
//           Job Type
//         </label>
//         <select
//           id="job_type"
//           name="job_type"
//           value={formData.job_type}
//           onChange={handleInputChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select Job Type</option>
//           <option value="full_time">Full Time</option>
//           <option value="part_time">Part Time</option>
//           <option value="contract">Contract</option>
//         </select>
//       </div>
//       {/* More input fields... */}
//       <div className="mb-4">
//         <label className="block mb-2 font-bold" htmlFor="upload_file">
//           Upload File
//         </label>
//         <input
//           type="file"
//           id="upload_file"
//           name="upload_file"
//           onChange={handleFileChange}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       {/* Toggle button */}
//       <div className="mb-4 flex items-center">
//         <label className="mr-2 font-bold">Is Active:</label>
//         <input
//           type="checkbox"
//           name="is_active"
//           checked={formData.is_active}
//           onChange={handleInputChange}
//           className="form-checkbox h-5 w-5 text-indigo-600"
//         />
//       </div>
//       <div className="text-center">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

export default JobInfoForm;
