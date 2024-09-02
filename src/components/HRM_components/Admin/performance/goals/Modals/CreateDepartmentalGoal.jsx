import React, { useEffect, useState } from "react";
import Modal from "../../../../_common/ModalContainer/ModalConatiner";
import CustomDropdown from "../../../../_common/CustomDropDown";
import CustomInput from "../../../../_common/CustomInput";
import { IoClose } from "react-icons/io5";
import {
  getDepartments,
  getDepartmentsById,
} from "../../../../../../features/HRM_features/organisation/departments/departments.slice";
import { useDispatch } from "react-redux";
import { selectDepartment } from "../../../../../../features/HRM_features/organisation/departments/department.selector";
import { useSelector } from "react-redux";
import FullNameTag from "../../../../_common/FullNameTag";
import Checkbox from "../../../../_common/Checkbox";
import Spinner from "../../../../../_common/Spinner";
import { IoMdAddCircle } from "react-icons/io";
import DropDownWithCheckbox from "../../../../_common/DropDownWithCheckBox";
import {
  createDepartmentalGoals,
  fetchDepartmentalGoals,
  fetchKPI,
} from "../../../../../../features/HRM_features/performance/goals/goals.slice";
import { selectGoalSlice } from "../../../../../../features/HRM_features/performance/goals/goals.selector";
import Button from "../../../../_common/Button/Button";
import { closeAllModals } from "../../../../../../features/common/modals/modals.slice";

const CreateDepartmentalGoal = ({ isOpen, strategic_objective_id }) => {
  const dispatch = useDispatch();
  const { departments, smallLoader } = useSelector(selectDepartment);
  const { KPI, isLoading } = useSelector(selectGoalSlice);
  const [departmentGoalData, setDepartmentGoalData] = useState({
    strategic_objective_id: strategic_objective_id,
    department_ids: [],
    review_by_everyone: true,
    review_by_manager_only: false,
    title: "",
    description: "",
    kpi_ids: [],
  });

  const [dep, setDep] = useState(null);
  const [addKpi, setAddKpi] = useState(false);
  const [selectedKPI, setSelecetedKPI] = useState([]);
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);

  useEffect(() => {
    dispatch(getDepartments());
    dispatch(fetchKPI());
  }, []);

  useEffect(() => {
    dispatch(getDepartmentsById(departmentGoalData.department_ids[0]))
      .unwrap()
      .then((payload) => {
        if (payload.status === 200) {
          setDep([payload.data]);
          setSelecetedKPI(payload.data.kpis);
          setDepartmentGoalData((prev) => ({
            ...prev,
            kpi_ids: payload.data.kpis.map((i) => i.id),
          }));
          setSelectedFilterOptions(payload.data.kpis);
        } else {
          setDep(null);
        }
      });
  }, [departmentGoalData.department_ids]);

  const handleSelect = (name, selectedOption) => {
    setDepartmentGoalData((prevState) => ({
      ...prevState,
      [name]: [selectedOption],
    }));
  };

  const handleFilterOptionSelect = (option) => {
    const updatedOptions = selectedFilterOptions
      .map((item) => item.name)
      .includes(option.name)
      ? selectedFilterOptions.filter((item) => item.name !== option.name)
      : [...selectedFilterOptions, option];
    setSelectedFilterOptions(updatedOptions);
    setSelecetedKPI(updatedOptions);
    setDepartmentGoalData((prev) => ({
      ...prev,
      kpi_ids: updatedOptions.map((i) => i.id),
    }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDepartmentGoalData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDepartmentalGoals(departmentGoalData))
      .unwrap()
      .then((payload) => {
        // dispatch(payload);
        if (payload.id && payload.created_at) {
          dispatch(fetchDepartmentalGoals());
          dispatch(closeAllModals());
        }
      });

  };

  return (
    <div>
      <Modal title={'Add Departemental Goal'} width="sm" isOpen={isOpen}>
        <form
          onSubmit={handleSubmit}
          className="p-7 h-full pb-[100px]  overflow-auto"
        >
          <div className="ss space-y-4">
            <div className="w-full">
              <CustomDropdown
                label="Department"
                onSelect={(selectedOption) => {
                  handleSelect("department_ids", selectedOption);
                }}
                options={departments?.map((items) => ({
                  value: items.id,
                  label: items.name,
                }))}
              />
            </div>{" "}
            <div className=" space-y-2">
              <p className="font-semibold">
                Who can give review on Perfromance?
              </p>
              <div className="flex items-center gap-x-3">
                <Checkbox
                  handleOnchange={() => {
                    setDepartmentGoalData((prev) => ({
                      ...prev,
                      review_by_everyone: !prev.review_by_everyone,
                      review_by_manager_only: !prev.review_by_manager_only,
                    }));
                  }}
                  checked={
                    departmentGoalData.review_by_everyone === true &&
                    departmentGoalData.review_by_manager_only === false
                  }
                />{" "}
                <p> {"Everyone in the department(By Default)"}</p>
              </div>
              <div className="flex items-center gap-x-3">
                <Checkbox
                  handleOnchange={() => {
                    setDepartmentGoalData((prev) => ({
                      ...prev,
                      review_by_everyone: !prev.review_by_everyone,
                      review_by_manager_only: !prev.review_by_manager_only,
                    }));
                  }}
                  checked={
                    departmentGoalData.review_by_everyone === false &&
                    departmentGoalData.review_by_manager_only === true
                  }
                />{" "}
                <p> {"Respective Managers Only"}</p>
              </div>
            </div>
            <CustomInput
              label={"Title*"}
              value={departmentGoalData.title}
              name="title"
              handleInputChange={handleOnChange}
            />{" "}
            {dep?.map((i, index) => {
              return (
                <>
                  {smallLoader ? (
                    <>
                      <p className="font-semibold">Manager</p>
                      <Spinner
                        className={"text-gurugeeks-orange-700 text-[40px]"}
                      />
                    </>
                  ) : (
                    <div key={index}>
                      <p className="font-semibold mb-1">Manager</p>
                      <FullNameTag
                        firstName={i.managers[0]?.first_name}
                        lastName={i.managers[0]?.last_name}
                      />
                    </div>
                  )}
                </>
              );
            })}
            <CustomInput
              type={"textarea"}
              label={"Description*"}
              value={departmentGoalData.description}
              name="description"
              handleInputChange={(e) => {
                handleOnChange(e);
              }}
            />
            <div>
              <p className="font-semibold mb-1">KPIs</p>
              {dep?.map((i, index) => {
                return (
                  <>
                    {smallLoader ? (
                      <>
                        <Spinner
                          className={"text-gurugeeks-orange-700 text-[40px]"}
                        />
                      </>
                    ) : (
                      <>
                        <div key={index}>
                          {selectedKPI.map((kpi) => (
                            <div className="flex justify-between items-center py-1 px-5 w-[70%]">
                              <p>{kpi.name}</p> <IoClose />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    <div className="relative">
                      <div
                        onClick={() => {
                          setAddKpi(!addKpi);
                        }}
                        className=" flex items-center gap-x-2  "
                      >
                        <IoMdAddCircle />
                        <div>
                          <p className=" text-gurugeeks-orange-600">
                            Add Another KPI
                          </p>
                        </div>
                      </div>
                      {addKpi && (
                        <div className="absolute">
                          <DropDownWithCheckbox
                            selectedFilterOptions={selectedFilterOptions}
                            handleFilterOptionSelect={handleFilterOptionSelect}
                            filterOptions={KPI}
                          />
                        </div>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex items-center justify-end">
              <Button size={"lg"} type="submit">
                {isLoading ? (
                  <div className="w-14">
                    <Spinner />
                  </div>
                ) : (
                  "Create"
                )}
              </Button>{" "}
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateDepartmentalGoal;
