import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CustomInput } from "../../../../../../components/HRM_components";
import CustomDropdown from "../../../../../../components/HRM_components/_common/CustomDropDown";
import { RoundedToggleButton } from "../../../../../../components/HRM_components";
import { getDepartments } from "../../../../../../features/HRM_features/organisation/departments/departments.slice";
import { selectDepartment } from "../../../../../../features/HRM_features/organisation/departments/department.selector";

const EditJobDetails = ({ editedJobData, setEditedJobData }) => {
  const dispatch = useDispatch();
  const { departments } = useSelector(selectDepartment);

  const jobTypeOptions = [
    { value: "full_time", label: "Full Time" },
    { value: "part_time", label: "Part Time" },
    { value: "contractor", label: "Contractor" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropDownSelect = (name, selectedOption) => {
    setEditedJobData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  };

  const handleIsJobActive = () => {
    setEditedJobData((prev) => ({
      ...prev,
      is_active: !editedJobData.is_active,
    }));
  };

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  return (
    <form>
      <div className="grid grid-cols-3 gap-5 mt-1 mb-40">
        <div className="lg:col-span-2 sm:col-span-3 bg-white p-6 rounded">
          <div className="flex justify-between items-center">
            <div className="p-5">
              <h1 className="text-2xl font-semibold">Job Title</h1>
              <CustomInput
                type="text"
                className="text-3xl capitalize font-semibold"
                name="title"
                value={editedJobData.title}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="p-5">
            <p className="text-2xl capitalize font-semibold">Description</p>
            <CustomInput
              type="text"
              name="description"
              className="text-3xl capitalize font-semibold"
              value={editedJobData.description}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>

        <div className="lg:col-span-1  sm:col-span-3 bg-white rounded">
          <div className="rounded">
            <p className="text-2xl font-semibold border-b-4 p-6">Job Details</p>
          </div>

          <div className="p-7">
            <div>
              {/* <div className="mb-6">
                <p className="text-lg font-bold text-[#161E54]">
                  Job Creation Date
                </p>
                <p className="text-2xl font-semibold">24/07/2023</p>
              </div> */}

              <div className="mb-6">
                <CustomInput
                  label={"Job Creation Date"}
                  type={"date"}
                  value={editedJobData.date}
                  name={"date"}
                  min={new Date().toISOString().split("T")[0]}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div className="mb-6">
                <CustomDropdown
                  label={"Department"}
                  className="text-2xl font-semibold"
                  onSelect={(selectedOption) => {
                    handleDropDownSelect("department_ids", [selectedOption]);
                  }}
                  options={departments?.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                />
              </div>

              <div className="mb-6">
                <CustomDropdown
                  label={"Job Type"}
                  options={jobTypeOptions}
                  onSelect={(selectedOption) => {
                    handleDropDownSelect("job_type", selectedOption);
                  }}
                ></CustomDropdown>
              </div>

              <div className="mb-6">
                <CustomInput
                  label={"Location"}
                  type={"text"}
                  name={"location"}
                  value={editedJobData.location}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div className="mb-6">
                <CustomInput
                  type="number"
                  label={"Experience"}
                  value={editedJobData.year_of_experience}
                  name={"year_of_experience"}
                  handleInputChange={handleInputChange}
                />
              </div>

              <div className="mb-6">
                <p className="text-lg font-bold text-[#161E54]">Salary</p>
                <CustomInput
                  type="number"
                  label={"salary_range"}
                  value={editedJobData.salary_range}
                  name={"salary_range"}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <p className="text-lg">Inactive</p>
              <RoundedToggleButton
                handleOnClick={handleIsJobActive}
                activeState={editedJobData.is_active}
              />
              <p className="text-lg">Active</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditJobDetails;
