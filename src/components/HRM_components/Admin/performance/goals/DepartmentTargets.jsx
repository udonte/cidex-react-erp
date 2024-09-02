import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { BiBarChartSquare, BiTargetLock } from "react-icons/bi";
import ProgressBar from "../../../_common/ProgressBar";
import DotOptions from "../../../_common/DotOptions";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../../../constants/routes.constants";
import { encryptId } from "../../../../../utils/helperFunctions/crypto.utils";

const DepartmentTargets = ({ data }) => {
  const navigate = useNavigate();
  const [showDotOptions, setShowDotOptions] = useState(false);
  const dotOptions = [
    {
      text: "Create Tasks",
      callBack: () => {
        navigate(
          `/HRM/${ROUTE_PATHS.PRIVATE.PERFORMNACE.CREAT_TASK}/${encryptId(
            data.id
          )}`
        );
      },
    },
    {
      text: "View Appraisals",
      callBack: () => {
        navigate(`/HRM/${ROUTE_PATHS.PRIVATE.PERFORMNACE.GOALS_APPRAISALS}`);
      },
    },
  ];
  const ShowDotOptions = () => {
    setShowDotOptions(!showDotOptions);
  };

  return (
    <div className="bg-white px-6 py-2 h-[140px] hover:bg-gurugeeks-dark-100">
      <div className="flex justify-between items-center ">
        <div className="space-y-2">
          <h1 className=" text-2xl font-bold">{data.departments[0].name}</h1>
          <p className="font-semibold">{data.title}</p>
          <div className="flex items-center">
            <p className="text-xs">Manager</p>
            <p className="text-sm font-semibold">{data.manager}</p>
          </div>
          <p className="text-xs">Team Size: {data.size}</p>
        </div>
        <div className="flex items-center gap-x-6">
          <div>
            <div className="flex items-center gap-x-2">
              <BiBarChartSquare className=" text-lg text-gurugeeks-dark-600" />
              <p>{data.reviews}/5 Review</p>
            </div>
            <div className="h-2 w-[120px]">
              <ProgressBar data={0} completed={0} />
            </div>
          </div>
          <div className="flex items-center gap-x-20">
            <div className="flex items-center gap-x-1">
              <p>
                <BiTargetLock className=" text-gurugeeks-dark-600" />
              </p>
              <p>
                {data.task?.complete || 0}/{data.task?.total || 0} Tasks
              </p>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => ShowDotOptions()}
            >
              <div className="h-10 w-10 rounded-full bg-gurugeeks-gray-700 flex items-center justify-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/HRM/HorizontalKebab.png"
                  }
                  alt="menu-button"
                />
              </div>
              {showDotOptions && (
                <div className="absolute ">
                  <DotOptions
                    onMouseLeave={() => setShowDotOptions(false)}
                    dotOptions={dotOptions}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentTargets;
