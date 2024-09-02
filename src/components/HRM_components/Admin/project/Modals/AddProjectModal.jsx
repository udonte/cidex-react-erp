import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../../_common/CustomInput";
import { fetchEmployees } from "../../../../../features/HRM_features/employee/employee.slice";
import { selectEmployeeSlice } from "../../../../../features/HRM_features/employee/employee.selector";
import {
  addProjects,
  fetchProjects,
} from "../../../../../features/HRM_features/timesheet/project/projects.slice";
import Button from "../../../_common/Button/Button";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import EmployeeSearchDropdown from "../../../_common/EmployeeSearchDropdown";

const AddProjectModal = ({ isOpen }) => {
  const { employees } = useSelector(selectEmployeeSlice);
  
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState({
    project_sow: "",
    client_name: "",
    name: "",
    description: "",
    supervisor_ids: [],
  });

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmployeeSelect = (selectedOption) => {
    setProjectData((prevState) => ({
      ...prevState,
      supervisor_ids: [selectedOption],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProjects(projectData))
      .unwrap()
      .then((payload) => {
        if (payload.status === 201) {
          dispatch(fetchProjects());
        }
      });
  };

  return (
    <Modal title={"Add Project"} width="sm" isOpen={isOpen}>
      <form className="h-[90%] overflow-y-scroll py-6" onSubmit={handleSubmit}>
        <div className="p-6 space-y-6">
          <CustomInput
            label="Client name"
            type="text"
            name="client_name"
            value={projectData.client_name}
            handleInputChange={handleInputChange}
          />
          <CustomInput
            label={"Project ID"}
            type="text"
            name="project_sow"
            value={projectData.project_sow}
            handleInputChange={handleInputChange}
          />
          <CustomInput
            label="Project Name"
            type="text"
            name="name"
            value={projectData.name}
            handleInputChange={handleInputChange}
          />

          <div className="flex items-top gap-x-2">
            <div className="flex items-center justify-center">
              <p className="min-w-[80px] font-semibold">Assign to:</p>{" "}
            </div>
            <EmployeeSearchDropdown callback={handleEmployeeSelect} />
          </div>

          <div>
            <label>Description*</label>
            <textarea
              className={`p-3 w-full min-h-14 border bg-slate-50 rounded-md`}
              id="myTextArea"
              name="description"
              value={projectData.description}
              rows="4" // Specify the number of visible text lines
              cols="50" // Specify the visible width of the text area
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-end px-6">
          <div className="flex items-center gap-x-2">
            <Button type={"button"} size={"lg"} color={"secondary"}>
              Cancel
            </Button>
            <Button type={"submit"} size={"lg"}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddProjectModal;
