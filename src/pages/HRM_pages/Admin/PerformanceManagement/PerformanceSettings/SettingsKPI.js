import React, { useEffect, useState } from "react";
import { BiPulse } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { MODALS } from "../../../../../constants/modals.constant";
import {
  BreadCrumbs,
  Button,
  RoundedToggleButton,
  TopTab,
} from "../../../../../components/HRM_components";
import CreateNewKpiModal from "../../../../../components/HRM_components/Admin/performance/settings/CreateNewKpiModal/CreateNewKpiModal";
import DotOptions from "../../../../../components/HRM_components/_common/DotOptions";
import { fetchKPI } from "../../../../../features/HRM_features/performance/goals/goals.slice";
import { selectGoalSlice } from "../../../../../features/HRM_features/performance/goals/goals.selector";

const SettingsKPI = () => {
  const openModal = useSelector(selectModalsSlice);
  const { KPI } = useSelector(selectGoalSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKPI());
  }, [dispatch]);

  return (
    <div>
      <BreadCrumbs />
      <TopTab
        leftComponent={
          <p className="text-xl text-">Key Performance Indicators</p>
        }
        rightComponent={
          <Button
            onClick={() =>
              dispatch(openModalByName(MODALS.PERFORMANCE.CREATE_NEW_KPI))
            }
          >
            <BiPulse className="text-xl" />
            Add New KPI
          </Button>
        }
      />

      <main>
        {KPI.map((items, index) => (
          <div key={index}>
            <Card title={items.name} department={items.description} />
          </div>
        ))}
      </main>
      {openModal[MODALS.PERFORMANCE.CREATE_NEW_KPI] && <CreateNewKpiModal />}
    </div>
  );
};

export default SettingsKPI;

export const Card = ({ title, department }) => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showDotOptions, setShowDotOptions] = useState(false);
  const dotOptions = [
    {
      text: "Edit",
    },
    {
      text: "Delete KPI",
    },
  ];

  const ShowDotOptions = () => {
    setShowDotOptions(!showDotOptions);
  };
  return (
    <div
      onMouseEnter={() => setShowMenuButton(true)}
      onMouseLeave={() => setShowMenuButton(false)}
      className="w-full h-20 bg-white px-6 my-3 flex justify-between items-center hover:bg-gurugeeks-dark-100 cursor-pointer"
    >
      <div className="space-y-3 w-[70%]">
        <p className="font-semibold">{title}</p>
        <p className=" text-sm text-gurugeeks-dark-600">{department}</p>
      </div>
      <div className="flex justify-between items-center w-[30%] pr-3">
        <RoundedToggleButton />
        {showMenuButton && (
          <div className="relative" onClick={() => ShowDotOptions()}>
            <div className="h-10 w-10 rounded-full bg-gurugeeks-gray-700 flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/images/HRM/HorizontalKebab.png"}
                alt="menu-button"
              />
            </div>
            {showDotOptions && (
              <div className="absolute">
                <DotOptions
                  onMouseLeave={() => setShowDotOptions(false)}
                  dotOptions={dotOptions}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
