import { useEffect, useState } from "react";
import {
  Button,
  RoundedToggleButton,
} from "../../../../../../components/HRM_components";
import { useSelector, useDispatch } from "react-redux";
import { selectJobSlice } from "../../../../../../features/HRM_features/recruitment/jobs/jobs.selector";
import { fetchJobById } from "../../../../../../features/HRM_features/recruitment/jobs/jobs.slice";
import { useParams } from "react-router-dom";
import { decryptId } from "../../../../../../utils/helperFunctions/crypto.utils";
import { format } from "date-fns";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SavedJobDetail = ({ job, editable }) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-1 mb-40">
      <div className="lg:col-span-2 sm:col-span-3 bg-white p-6 rounded">
        <div className="flex justify-between items-center">
          <div className="p-5">
            <h1 className="text-2xl font-semibold">Job Title</h1>
            <p className="text-3xl capitalize font-semibold">{job?.title}</p>
          </div>
        </div>

        <div className="border py-6 px-4">
          {editable ? (
            <div className="border border-b-2  ">
              <ReactQuill
              // theme="snow"
              // value={value}
              // onChange={setValue}
              // modules={modules}
              />
            </div>
          ) : (
            <>
              {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
              <p className="capitalize font-semibold">Job Description</p>
              <p>{job?.description}</p>
            </>
          )}
        </div>
      </div>

      <div className="lg:col-span-1  sm:col-span-3 bg-white rounded">
        <div className="rounded">
          <h1 className="text-2xl font-semibold border-b-4 p-6">Job Details</h1>
        </div>

        <div className="p-10">
          <div>
            <div className="mb-6">
              <p className="text-lg font-bold text-[#161E54] selection:file:">
                Job Creation Date
              </p>
              <p className="text-2xl font-semibold">
                {format(new Date(job?.created_at), "MMM-dd-yyyy")}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-bold text-[#161E54] selection:file:">
                Recruitment Period
              </p>
              <p className="text-2xl font-semibold">
                {format(new Date(job?.recruitment_period), "MMM-dd-yyyy")}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-bold text-[#161E54] selection:file:">
                Department
              </p>
              <h1 className="text-2xl font-semibold">Development</h1>
            </div>

            <div className="mb-6">
              <p className="text-lg font-bold text-[#161E54] selection:file:">
                Job Type
              </p>
              <p className="text-2xl capitalize font-semibold">
                {job?.job_type}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-bold text-[#161E54] selection:file:">
                Location
              </p>
              <h1 className="text-2xl capitalize font-semibold">
                {job?.location}
              </h1>
            </div>

            <div className="mb-6">
              <p className="text-lg font-bold text-[#161E54] selection:file:">
                Experience
              </p>
              <p className="text-2xl capitalize font-semibold">
                {job?.year_of_experience}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-bold text-[#161E54] selection:file:">
                Salary
              </p>
              {/* <p className="text-2xl font-semibold">{job?.salary_range}</p> */}
            </div>

            <div className="mb-6">
              <p className="text-lg font-bold text-[#161E54] selection:file:">
                Last Update
              </p>
              <h1 className="text-2xl font-semibold">5min ago</h1>
            </div>
          </div>

          <div className="flex gap-10 items-center">
            <RoundedToggleButton activeState={job?.is_active} />
            <p className="text-lg">{job?.is_active ? "Active" : "Inactive"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedJobDetail;
