import React, { useEffect, useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { fetchRecruitmentStage } from "../../../../features/HRM_features/settings/settings.slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectSettings,
} from "../../../../features/HRM_features/settings/settings.selector";

const Stages = () => {
  const dispatch = useDispatch();
  const { recruitmentStages, isLoading } = useSelector(selectSettings);
  useEffect(() => {
    dispatch(fetchRecruitmentStage());
  }, []);

  const stages = recruitmentStages;
  const [stage, setStage] = useState(0);
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div className="">
        <div className="relative">
          <div
            onClick={() => {
              setDropDown(!dropDown);
            }}
            className="relative flex capitalize justify-start items-center gap-x-2 font-semibold hover:font-bold cursor-pointer"
          >
            {stages[stage]?.name} <FaChevronDown />
          </div>
          {dropDown && (
            <div
              onMouseLeave={() => {
                setDropDown(!dropDown);
              }}
              className="absolute w-[200px]  bg-white border rounded shadow-2xl z-40 top-8 left-20"
            >
              {stages?.map((item, i) => (
                <p
                  key={i}
                  onClick={() => setStage(i)}
                  className=" cursor-pointer px-5 py-3 hover:bg-gurugeeks-grayLight-300 gap-x-2 flex justify-start items-center"
                >
                  {i > stage ? (
                    <p className=" bg-green-950 h-6 w-6 flex justify-center items-center text-white text-xs p-1 rounded-full">
                      {i + 1}
                    </p>
                  ) : (
                    <div className="bg-green-400 h-6 w-6 flex justify-center items-center text-white text-xs p-1 rounded-full">
                      <FaCheck />
                    </div>
                  )}
                  <span
                    className={`${
                      i <= stage ? "font-semibold capitalize" : ""
                    } `}
                  >
                    {item?.name}
                  </span>
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-x-1">
          {stages?.map((item, i) => (
            <div
              key={i}
              className={`h-[20px] w-[30px] rounded flex justify-center items-center font-bold text-white text-xs ${
                i === stage
                  ? "bg-blue-400"
                  : i < stage
                  ? "bg-green-400"
                  : "bg-gurugeeks-grayLight-200"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stages;
