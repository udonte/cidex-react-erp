import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchMandatoryTraining,
  postMandatoryTraining,
} from "../../../../../features/HRM_features/performance/mandatoryTraining/mandatory.slice";
import Button from "../../../_common/Button/Button";
import CustomInput from "../../../_common/CustomInput";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import { closeAllModals } from "../../../../../features/common/modals/modals.slice";
import { selectMandatoryTraining } from "../../../../../features/HRM_features/performance/mandatoryTraining/mandatory.selector";
import { useSelector } from "react-redux";
import Spinner from "../../../../_common/Spinner";

const AddCourseModal = ({ isOpen }) => {
  const { isLoading } = useSelector(selectMandatoryTraining);
  const dispatch = useDispatch();
  const [courseDetail, setCourseDetail] = useState({
    title: "",
    resource: "",
    link: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postMandatoryTraining(courseDetail))
      .unwrap()
      .then((payload) => {
        if (payload.id && payload.created_at) {
          dispatch(fetchMandatoryTraining());
          dispatch(closeAllModals());
        }
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetail((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal title={"Add Courses"} width="sm" isOpen={isOpen}>
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <CustomInput
            value={courseDetail.title}
            name="title"
            label={"Course Title"}
            placeholder=""
            handleInputChange={handleInputChange}
          />
          <CustomInput
            value={courseDetail.resource}
            name="resource"
            label={"Resource"}
            placeholder=""
            handleInputChange={handleInputChange}
          />
          <CustomInput
            value={courseDetail.link}
            name="link"
            label={"Link"}
            placeholder=""
            handleInputChange={handleInputChange}
          />

          <div className="flex items-end justify-end">
            <Button size={"lg"} type="submit">
              {isLoading ? (
                <div className="w-14">
                  <Spinner />
                </div>
              ) : (
                "Create course"
              )}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCourseModal;
