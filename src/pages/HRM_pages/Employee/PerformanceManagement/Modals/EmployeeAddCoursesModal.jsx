import React, { useEffect, useState } from "react";
import Modal from "../../../../../components/HRM_components/_common/ModalContainer/ModalConatiner";
import {
  Button,
  CustomInput,
  Spinner,
} from "../../../../../components/HRM_components";
import CustomDropdown from "../../../../../components/HRM_components/_common/CustomDropDown";
import {
  createCourses,
  fetchCourses,
} from "../../../../../features/HRM_features/performance/learningDevelopment/learning.slice";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectLearningAndDevelopmentSlice } from "../../../../../features/HRM_features/performance/learningDevelopment/learning.selector";
import { getDepartments } from "../../../../../features/HRM_features/organisation/departments/departments.slice";
import { selectDepartment } from "../../../../../features/HRM_features/organisation/departments/department.selector";

const EmployeeAddCoursesModal = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectLearningAndDevelopmentSlice);
  const { departments } = useSelector(selectDepartment);

  const today = new Date();
  const isoDateString = today.toISOString();
  // Create a new Date object for the given date

  // Extract individual components of the date
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
  const day = String(today.getDate()).padStart(2, "0");
  const year = today.getFullYear();

  // Extract time components
  let hours = today.getHours();
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const ampm = today >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours || 12; // Handle midnight

  // Construct the formatted date string
  const formattedDate = `${month}/${day}/${year} at ${hours}:${minutes} ${ampm}`;

  const [courseData, setCourseData] = useState({
    title: "",
    provider: "",
    link: "",
    description: "",
    department_ids: [""],
    duration_weeks: 0,
    start_week: isoDateString,
    is_approved: false,
  });

  useEffect(() => {
    dispatch(getDepartments());
  }, []);
  const handleSelect = (name, selectedOption) => {
    setCourseData((prevState) => ({
      ...prevState,
      [name]: [selectedOption],
    }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourses(courseData))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchCourses());
          dispatch(closeAllModals());
        }
      });

  };

  return (
    <div className="h-screen overflow-auto">
      <Modal title={"New Course"} width="sm" isOpen={isOpen}>
        <form
          onSubmit={handleSubmit}
          className="h-full pb-[100px] overflow-auto"
        >
          <div className=" space-y-3 p-6 ">
            <p className=" text-xl font-bold">About the Course</p>
            <CustomInput
              handleInputChange={handleOnChange}
              value={courseData.title}
              name="title"
              label={"Title"}
            />
            <CustomInput
              handleInputChange={handleOnChange}
              value={courseData.provider}
              name="provider"
              label={"Provider*"}
            />
            <CustomInput
              handleInputChange={handleOnChange}
              value={courseData.link}
              name="link"
              type={"textarea"}
              label={"Add Link"}
            />
            <CustomInput
              handleInputChange={handleOnChange}
              value={courseData.description}
              name="description"
              type={"textarea"}
              label={"Description*"}
            />
            <CustomInput
              handleInputChange={handleOnChange}
              value={courseData.duration_weeks}
              name="duration_weeks"
              type={"number"}
              label={"Estimated duration in weeks*"}
            />
            <CustomDropdown
              value={courseData.department_ids}
              name="department_ids"
              options={departments?.map((items) => ({
                value: items.id,
                label: items.name,
              }))}
              onSelect={(selectedOption) => {
                handleSelect("department_ids", selectedOption);
              }}
              label={"Department that can benefit from Course*"}
            />
            <p className="my-3 text-sm text-gurugeeks-dark-500">
              Date Created {formattedDate}
            </p>
          </div>{" "}
          <div className="flex items-center justify-end gap-x-3">
            <Button color={"secondary"}>Cancel</Button>
            <Button size={"lg"} type="submit">
              {isLoading ? (
                <div className="w-14">
                  <Spinner />
                </div>
              ) : (
                "Save"
              )}
            </Button>{" "}
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EmployeeAddCoursesModal;
