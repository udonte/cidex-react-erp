import React, { useEffect, useState } from "react";
import "../../../../index.css"; // Import CSS file for transitions
import ToggleButton from "../../_common/ToggleButton";
import Checkbox from "../../_common/Checkbox";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const PermissionAccordion = ({
  handleToggleButtonClick,
  handleReadCheckboxChange,
  modulePermission,
  subscription,
}) => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
  });

  return (
    <div className="w-full mx-auto">
      {subscription?.modules?.map((module, index) => (
        <div key={index} className="border border-gray-300 rounded mb-2">
          <div className="flex justify-between items-center p-4 cursor-pointer">
            <div className="flex items-center">
              <ToggleButton
                activeState={modulePermission?.permissions?.some(
                  (permission) => permission.module_name === module.name
                )}
                handleOnClick={() =>
                  handleToggleButtonClick(module.name, module.id)
                }
              />
            </div>
            <div
              onClick={() => toggleAccordion(index)}
              className="px-4 w-full flex justify-between items-center"
            >
              <div className="text-lg font-semibold">{module.name}</div>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "open" : "closed"
            }`}
          >
            <div className="p-4 border-t border-gray-300 flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <Checkbox
                  handleOnchange={() => {
                    handleReadCheckboxChange(module.name, "can_read");
                  }}
                  checked={
                    modulePermission?.permissions?.find(
                      (permission) => permission?.module_id === module?.id
                    )?.can_read
                  }
                />
                <p>Read</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Checkbox
                  handleOnchange={() => {
                    handleReadCheckboxChange(module.name, "can_write");
                  }}
                  checked={
                    modulePermission?.permissions?.find(
                      (permission) => permission?.module_id === module?.id
                    )?.can_write
                  }
                />
                <p>Write</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Checkbox
                  handleOnchange={() => {
                    handleReadCheckboxChange(module.name, "can_update");
                  }}
                  checked={
                    modulePermission?.permissions?.find(
                      (permission) => permission?.module_id === module?.id
                    )?.can_update
                  }
                />
                <p>Create</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Checkbox
                  handleOnchange={() => {
                    handleReadCheckboxChange(module.name, "can_delete");
                  }}
                  checked={
                    modulePermission?.permissions?.find(
                      (permission) => permission?.module_id === module?.id
                    )?.can_delete
                  }
                />
                <p>Delete</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Checkbox
                  handleOnchange={() => {
                    handleReadCheckboxChange(module.name, "can_approve");
                  }}
                  checked={
                    modulePermission?.permissions?.find(
                      (permission) => permission?.module_id === module?.id
                    )?.can_approve
                  }
                />
                <p>Approve</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PermissionAccordion;
