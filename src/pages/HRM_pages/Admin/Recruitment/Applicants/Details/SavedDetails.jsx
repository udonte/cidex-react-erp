import React from "react";

const SavedDetails = ({ applicantData }) => {
  return (
    <div>
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
  );
};

export default SavedDetails;
