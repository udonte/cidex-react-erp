import React, { useEffect, useState } from "react";
import {
  BreadCrumbs,
  Button,
  TopTab,
} from "../../../../../components/HRM_components";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../../constants/modals.constant";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { fetchHelpdeskCategory } from "../../../../../features/HRM_features/settings/settings.slice";
import { selectHekdeskSettings } from "../../../../../features/HRM_features/settings/settings.selector";
import TextEditor from "../../../../../components/_common/TextEditor";
import AddNewStage from "../../../../../components/HRM_components/Admin/settings/Modal/AddNewStageRecruitment";
import AddNewStageLeave from "../../../../../components/HRM_components/Admin/settings/Modal/AddNewStageLeave";
import ToggleButton from "../../../../../components/HRM_components/_common/ToggleButton";

const LeaveSettings = () => {
  const openModal = useSelector(selectModalsSlice);
  const dispatch = useDispatch();
  // const { heldeskCategory } = useSelector(selectHekdeskSettings);
  const breadcrumbItems = ["Settings", "Leave Management"];

  // useEffect(() => {
  //   dispatch(fetchHelpdeskCategory());
  // }, [dispatch]);

  const [isLeaveReasonActive, setIsLeaveReasonActive] = useState(true);

  const handleLeaveReasonClick = () => {
    setIsLeaveReasonActive(!isLeaveReasonActive);
  };

  const leaveCategory = [
    {
      name: "Pending",
    },
    {
      name: "Approve",
    },
    {
      name: "Reject",
    },
    {
      name: "Review",
    },
  ];

  return (
    <>
      <div>
        <BreadCrumbs breadcrumbItems={breadcrumbItems} />
        <TopTab
          leftComponent={<h1 className="font-bold text-xl">Leave Status</h1>}
          rightComponent={
            <Button
              onClick={() =>
                dispatch(openModalByName(MODALS.SETTINGS.ADD_NEW_STAGE_LEAVE))
              }
            >
              Add New Stage
            </Button>
          }
        />
        <div className="bg-white h-full">
          {leaveCategory.map((category, index) => {
            return (
              <div className="flex gap-x-3 border-b p-3">
                <p> {index + 1}.</p>
                <p className="capitalize"> {category.name}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-y-2 items-start my-4 bg-white shadow-md rounded-md py-4 px-8">
          <div className="flex items-start justify-between w-full text-gray-700">
            <p className="font-bold">Make Leave Reason Mandatory</p>
            <div>
              <ToggleButton
                handleOnClick={handleLeaveReasonClick}
                activeState={isLeaveReasonActive}
              />
            </div>
          </div>
        </div>
      </div>
      {openModal[MODALS.SETTINGS.ADD_NEW_STAGE_LEAVE] && <AddNewStageLeave />}
    </>
  );
};

export default LeaveSettings;
