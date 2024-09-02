import React, { useEffect } from "react";
import { Button, Spinner } from "../../../../../../components/HRM_components";
import { useDispatch, useSelector } from "react-redux";
import { selectScheduleInterviewSlice } from "../../../../../../features/HRM_features/recruitment/scheduleInterview/scheduleInterview.selector";
import {
  fetchScheduledInterview,
  fetchScheduledByApplication,
} from "../../../../../../features/HRM_features/recruitment/scheduleInterview/scheduleInterview.slice";
import DotOptionButton from "../../../../../../components/_common/DotOptionButton";
import DotOptions from "../../../../../../components/HRM_components/_common/DotOptions";
import { format } from "date-fns";
const Interviews = ({ applicantData }) => {
  const dispatch = useDispatch();
  const { schedules, isLoading } = useSelector(selectScheduleInterviewSlice);

  useEffect(() => {
    dispatch(fetchScheduledByApplication(applicantData?.id));
  }, [dispatch, applicantData?.id]);

  const deleteInterview = (e) => {
    console.log("delete");
  };

  return (
    <div>
      {/* container */}
      <div className="flex flex-col justify-start py-2">
        {/* cards */}

        <div>
          {isLoading ? (
            <>
              <div className="h-[300px] w-full flex items-center justify-center">
                <Spinner className={"text-[60px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : (
            <>
              {schedules.length > 0 ? (
                <div className="flex flex-col gap-5">
                  {schedules?.map(
                    ({ title, note, start_time, end_time, interview_link }) => {
                      return (
                        <div className="flex items-center justify-between gap-8 border-l-8 border-l-gurugeeks-orange-700 rounded-md py-4 px-5 border-b-[1px] border-b-gray-200">
                          {/* image and name details */}
                          <div className="flex items-center gap-2 w-[170px]">
                            <div className="flex flex-col justify-start gap-1">
                              <p className="font-bold text-gray-800">{title}</p>
                              <p className="text-gray-400 text-sm">{title}</p>
                            </div>
                          </div>
                          {/* time */}
                          <div className="flex flex-col justify-start gap-1 w-[150px]">
                            <p className="font-bold text-gray-800">
                              {start_time}
                              {/* {format(new Date(start_time), "")} */}
                              {/* {format(new Date(end_time), "HH:mm")} */}
                            </p>
                            <p className="text-gray-400 text-sm">1hour</p>
                          </div>
                          {/* venue */}
                          <div className="flex flex-col justify-start gap-1 w-[150px]">
                            <p className="font-bold text-gray-800">
                              {interview_link}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {`www.${interview_link}.com`}
                            </p>
                          </div>
                          {/* button */}
                          <div className="w-[50px]">
                            <DotOptionButton
                              onClick={() => {console.log("Dated testing")}}
                            />
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className="h-full w-full flex item-center justify-center">
                  <p className="font-semibold text-lg">
                    No Scheduled Interviews yet.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interviews;
