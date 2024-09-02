import { FaRegEdit, FaRegSave } from "react-icons/fa";
import SavedDetails from "./SavedDetails";
import Editeddetails from "./Editeddetails";
import { useState } from "react";
import { Spinner } from "../../../../../../components/HRM_components";

const ApplicantDetails = ({ applicantData, setApplicantData }) => {
  const [editable, setEditable] = useState(false);

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
          <p className=" py-1 px font-bold">Basic Information</p>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-between item-center py-4 px-4 capitalize">
          <div>
            <p className="text-xs">First Name</p>
            <p>{applicantData?.applicant?.first_name}</p>
          </div>
          <div>
            <p className="text-xs">Last Name</p>
            <p>{applicantData?.applicant?.last_name}</p>
          </div>
          <div>
            <p className="text-xs">Gender</p>
            <p>Male</p>
          </div>

          <div>
            <p className="text-xs">Mobile Number</p>
            <p>{applicantData?.applicant?.phone}</p>
          </div>
          <div>
            <p className="text-xs truncate">Email Address</p>
            <p>{applicantData?.applicant?.email}</p>
          </div>
          <div>
            <p className="text-xs">Location</p>
            <p>{applicantData?.applicant?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;
