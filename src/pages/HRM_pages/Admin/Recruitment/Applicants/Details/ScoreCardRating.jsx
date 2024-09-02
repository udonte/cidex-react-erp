import React, { useEffect, useState } from "react";
import CustomDropdown from "../../../../../../components/HRM_components/_common/CustomDropDown";
import { CustomInput } from "../../../../../../components/HRM_components";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import EditScoreCard from "./components/EditScoreCard";
import SaveScoreCard from "./components/SaveScoreCard";
import { useDispatch } from "react-redux";
import { fetchApplicant } from "../../../../../../features/HRM_features/recruitment/applicants/applicants.slice";
import { getApplications } from "../../../../../../features/HRM_features/recruitment/applications/applications.slice";

const ScoreCardRating = () => {
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const [applicantData, setApplicantData] = useState(null);
  useEffect(() => {
    dispatch(fetchApplicant());
    dispatch(getApplications());
  }, [dispatch]);

  const handleOnClickSave = () => {
    // dispatch(editAssetById(editedAssetData))
    //   .unwrap()
    //   .then((payload) => {
    //     ;
    //     if (payload.id && payload.created_at) {
    //       dispatch(fetchAssetById(assetId));
    //   }
    // });
    setEditable(true);
  };

  return (
    <div className="overflow-y-scroll">
      {/* saved form */}
      <div className="w-full border rounded-lg">
        <div className="flex items-center justify-between bg-gray-100 text w-full px-4">
          <p className=" py-1 px font-bold">Score Card</p>
          {editable ? (
            <div className="cursor-pointer" onClick={() => setEditable(false)}>
              {/* {isLoading ? (
              <div className="w-14">
                <Spinner />
              </div>
            ) : ( */}
              <FaRegSave size={22} />
              {/* )} */}
            </div>
          ) : (
            <div
              className="cursor-pointer"
              onClick={() => {
                handleOnClickSave();
              }}
            >
              <FaRegEdit size={22} />
            </div>
          )}
        </div>
        {editable ? (
          <EditScoreCard
            applicantData={applicantData}
            setApplicantData={setApplicantData}
            key={"editable"}
          />
        ) : (
          <SaveScoreCard applicantData={applicantData} key={"saved"} />
        )}
      </div>
    </div>
  );
};

export default ScoreCardRating;
