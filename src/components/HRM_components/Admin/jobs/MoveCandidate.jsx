import { useState } from "react";
import Button from "../../_common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "../../_common/CustomDropDown";

const MoveCandidate = ({ applicantData }) => {
  const dispatch = useDispatch();

  const handleMoveSelection = (selectedOption) => {
    if (selectedOption === "new") {
      return;
    } else if (selectedOption === "screening") {
      return;
    }
  };

  const moveActions = [
    { value: "new", label: "New" },
    { value: "screening", label: "Screening" },
    { value: "interview", label: "Interview" },
    { value: "offer", label: "Offer" },
    { value: "hired", label: "hired" },
  ];

  return (
    <div className="w-[150px] h-fit shadow border bg-white mt-5 rounded-md border-gurugeeks-orange-700">
      <div className="w-full">
        <div className="w-full flex flex-col">
          <CustomDropdown
            options={moveActions}
            label=""
            onSelect={(selectedOption) => {
              handleMoveSelection(selectedOption);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MoveCandidate;
