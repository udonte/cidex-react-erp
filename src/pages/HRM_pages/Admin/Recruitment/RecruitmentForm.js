import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/HRM_components";
import { useParams } from "react-router-dom";
import { decryptId } from "../../../../utils/helperFunctions/crypto.utils";
import { useDispatch } from "react-redux";
import { fetchJobById } from "../../../../features/HRM_features/recruitment/jobs/jobs.slice";
import { useSelector } from "react-redux";
import { selectJobSlice } from "../../../../features/HRM_features/recruitment/jobs/jobs.selector";
import { postApplications } from "../../../../features/HRM_features/recruitment/applications/applications.slice";
import CustomDropdown from "../../../../components/HRM_components/_common/CustomDropDown";
import { toast } from "react-toastify";

const RecruitmentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const job_id = decryptId(id);
  const { job } = useSelector(selectJobSlice);

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const [recruitmentFormData, setRecruitmentFormData] = useState({
    email: "",
    phone: "",
    resume: "",
    address: "",
    first_name: "",
    last_name: "",
    gender: "",
    location: "",
    cover_letter: "",
    country: "",
    job_id: job_id,
    source: "Unknown",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRecruitmentFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postApplications(recruitmentFormData))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          toast.success("Application Submited Successfully");
          setRecruitmentFormData({
            email: "",
            phone: "",
            resume: "",
            address: "",
            first_name: "",
            last_name: "",
            gender: "",
            location: "",
            cover_letter: "",
            country: "",
            job_id: job_id,
            source: "Unknown",
          });
        }
      });
  };

  const handleDropdownSelect = (name, selectedOption) => {
    setRecruitmentFormData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  useEffect(() => {
    dispatch(fetchJobById(job_id));
  }, [dispatch, job_id]);

  return (
    <div className="py-10 px-16">
      <img
        className="mt-3"
        src={process.env.PUBLIC_URL + "/images/exceed_logo.png"}
        alt="companySvgLogo"
      />

      <div className="py-10">
        <h1 className=" text-4xl">{job?.title} </h1>
        <h4 className=" text-xl">job department</h4>
      </div>

      <div className="flex">
        <form onSubmit={handleSubmit} className="w-[60%]">
          <p className=" text-2xl">Apply for this job</p>
          <div className="flex items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">
              First Name *
            </label>
            <input
              value={recruitmentFormData.first_name}
              name={"first_name"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex  items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">
              Last Name *
            </label>
            <input
              value={recruitmentFormData.last_name}
              name={"last_name"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex  items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">Gender</label>
            <div className="w-[70%]">
              <CustomDropdown
                onSelect={(selectedOption) => {
                  handleDropdownSelect("gender", selectedOption);
                }}
                options={gender}
              />{" "}
            </div>
          </div>
          <div className="flex items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">Email *</label>
            <input
              value={recruitmentFormData.email}
              name={"email"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">
              Phone Number*
            </label>
            <input
              value={recruitmentFormData.phone}
              name={"phone"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">Address </label>
            <input
              value={recruitmentFormData.address}
              name={"address"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">Location </label>
            <input
              value={recruitmentFormData.location}
              name={"location"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">Country </label>
            <input
              value={recruitmentFormData.country}
              name={"country"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">CV * </label>
            <input
              type="file"
              value={recruitmentFormData.resume}
              name={"address"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex items-center my-12  gap-x-20 ">
            <label className=" text-xl w-[20%] font-semibold">
              Cover Letter
            </label>
            <input
              type="file"
              value={recruitmentFormData.cover_letter}
              name={"cover_letter"}
              onChange={handleOnChange}
              className={`p-3 w-[70%] min-h-14 border bg-slate-50 rounded-md `}
            />
          </div>
          <div className="flex items-center justify-end w-full">
            <Button type={"submit"} size={"lg"}>
              Submit Application
            </Button>
            <p className="w-[350px] px-6 text-gurugeeks-orange-600">
              By clicking Send application, you agree to our User Agreement,
              Privacy Policy, and Cookie Policy.
            </p>
          </div>
        </form>
        <div className="w-[40%] pl-12 pr-6">
          <p className=" text-2xl">Job Description</p>
          <p className="my-10">
            We are looking for a frontend developer with Vitae sit sed viverra
            felis cursus cras duis. Morbi curabitur sapien sed a nisi lectus
            etiam nec pellentesque. Amet euismod proin enim malesuada
            tristiqueue eu. Morbi curabitur sapien sed a nisi lectus etiam nec
            pellentesque. Amet euismod proin enim malesuada tristiqueue eu.
            <br />
            <br />
            Morbi curabitur sapien sed a nisi lectus etiam nec pellentesque.
            Amet euismod proin enim malesuada tristiqueue eu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentForm;
