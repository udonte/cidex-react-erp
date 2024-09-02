import React, { useEffect, useState } from "react";
import Button from "../../../_common/Button/Button";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import CustomDropdown from "../../../_common/CustomDropDown";
import CustomInputByComma from "../../../_common/CustomInputByComma";
import { useDispatch } from "react-redux";
import {
  addActivity,
  fetchActivity,
} from "../../../../../features/HRM_features/timesheet/activity/activity.slice";
import { useSelector } from "react-redux";
import { selectActivtySlice } from "../../../../../features/HRM_features/timesheet/activity/activity.selector";
import CustomInput from "../../../_common/CustomInput";
import { CgClose } from "react-icons/cg";
import { toast } from "react-toastify";
import { putProjectActivty } from "../../../../../features/HRM_features/timesheet/project/projects.slice";

const AddActivityModal = ({ isOpen, projects }) => {
  const [projectData, setProjectData] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedActivty, setSelectedActivity] = useState([]);
  const [projectActivitis, setProjectActivities] = useState({
    project_id: "",
    activity_ids: [],
  });
  const [input, setInput] = useState({ name: "" });
  const { activities } = useSelector(selectActivtySlice);
  const dispatch = useDispatch();

  const handleActivitySearch = (searchItem) => {
    const filteredActivities = activities?.filter((activity) =>
      activity?.name?.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSelectedActivity(filteredActivities);
    const activityIdArray = filteredActivities.map((item) => item.id);
    setProjectActivities((prev) => ({
      ...prev,
      activity_ids: activityIdArray,
    }));

  };

  const saveProjectActivity = (e) => {
    e.preventDefault();
    dispatch(putProjectActivty(projectActivitis));

  };

  const handleAddActivity = () => {
    if (input.name.length > 5) {
      dispatch(addActivity(input))
        .unwrap()
        .then((payload) => {
          if (payload.id && payload.created_at) {
            setSelectedActivity((prev) => [...prev, payload]);
            dispatch(fetchActivity());
          }
        });
    } else {
      toast.error("Name should have at least 5 characters");
    }
  };

  const handleDelete = (index) => {
    const updatedList = selectedActivty.filter((_, i) => i !== index);
    setSelectedActivity(updatedList);
  };

  useEffect(() => {
    setProjectData(projects);
    dispatch(fetchActivity());
  }, [projects]);
  return (
    <Modal title={"Add Activity"} width="sm" isOpen={isOpen}>
      <form onSubmit={saveProjectActivity}>
        <div className="p-6 space-y-6">
          <CustomDropdown
            onSelect={(em) => {
              const filteredProject = projects.filter((i) => i.id === em);
              setSelectedProject(filteredProject);
              setProjectActivities((prev) => ({
                ...prev,
                project_id: filteredProject[0].id,
              }));
            }}
            placeHolder={"Select Project"}
            label="Project Name"
            options={projectData.map((project) => {
              return {
                value: project.id,
                label: project.name,
              };
            })}
          />

          <div>
            {/* <CustomInputByComma activities={activities} label="Activities" /> */}

            <div className="flex items-center w-full gap-x-6">
              <CustomInput
                disabled={!selectedProject}
                handleInputChange={(e) => {
                  handleActivitySearch(e);
                  setInput(() => ({ name: e }));
                }}
                className={"w-full"}
              />
              <Button onClick={handleAddActivity}>Add Activity</Button>
            </div>
            <div className="flex flex-wrap w-full items-center gap-x-3">
              {selectedActivty.map((word, index) => (
                <>
                  <div
                    className="border capitalize flex items-center my-2 gap-x-2 py-1 px-2 rounded-lg bg-gray-200"
                    key={index}
                  >
                    {word.name}
                    <button onClick={() => handleDelete(index)}>
                      <CgClose />
                    </button>
                  </div>
                  {/* {index < wordArray.length - 1 ? ", " : ""} */}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end px-6">
          <div className="flex items-center gap-x-2">
            <Button size={"lg"} color={"secondary"}>
              Cancel
            </Button>
            <Button size={"lg"} type={"submit"}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddActivityModal;
