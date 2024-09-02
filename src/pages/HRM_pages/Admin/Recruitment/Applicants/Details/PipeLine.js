import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecruitmentStage } from "../../../../../../features/HRM_features/settings/settings.slice";
import { useSelector } from "react-redux";
import { selectSettings } from "../../../../../../features/HRM_features/settings/settings.selector";
import { FaCheck } from "react-icons/fa";

const PipeLine = ({ applicantData }) => {
  const dispatch = useDispatch();
  const { recruitmentStages, isLoading } = useSelector(selectSettings);

  useEffect(() => {
    dispatch(fetchRecruitmentStage());
  }, []);

  return (
    <div>
      <div className="border-2 rounded-lg p-6">
        <h1 className="semi-bold text-[#161E54] text-2xl mb-12">
          Hiring PipeLine
        </h1>

        <div className="mt-3">
          {recruitmentStages.map((stage, index) => {
            return (
              <div className="">
                <div className="flex items-start w-full justify-between">
                  <div className="w-full flex items-start gap-x-3">
                    <div className="flex flex-col items-center">
                      {applicantData?.status_id &&
                      applicantData?.status_id >= stage.id ? (
                        <div className="h-[60px] w-[60px] flex items-center justify-center bg-green-500 text-white rounded-full shadow-xl">
                          <FaCheck color="#000000" size={25} />
                        </div>
                      ) : (
                        <p className="text-[#161E54] h-[60px] w-[60px] flex items-center justify-center font-semibold text-2xl shadow-xl">
                          {index + 1}
                        </p>
                      )}
                      <div className="h-[40px] w-[2px] rounded-lg bg-black my-2"></div>
                    </div>
                    <div>
                      <p className="h-[40px] w-full py-2 font-semibold text-xl capitalize text-[#161E54]">
                        {stage.name}
                      </p>
                    </div>
                  </div>
                  {applicantData?.status_id === stage.id && (
                    <div className="w-full ">
                      <div className="text-[#EAB04D] bg-orange-50 w-fit px-4 py-2 rounded-3xl text-xl">
                        <p>Current Stage</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PipeLine;
