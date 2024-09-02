import React, { useEffect } from "react";
import {
  TableContainer,
  TableRowItem,
} from "../../../../../../components/HRM_components";
import Stages from "../../../../../../components/HRM_components/Admin/jobs/Stages";
import StarRating from "../../../../../../components/HRM_components/Admin/jobs/StartRating";
import { useDispatch, useSelector } from "react-redux";
import { selectApplicationSlice } from "../../../../../../features/HRM_features/recruitment/applications/application.selectors";
import { getApplications } from "../../../../../../features/HRM_features/recruitment/applications/applications.slice";
import { format } from "date-fns";
const Candididates = ({ job }) => {
  const dispatch = useDispatch();
  const { applications, isLoading } = useSelector(selectApplicationSlice);

  useEffect(() => {
    dispatch(getApplications(job?.title.replace(" ", "-")));
  }, [dispatch]);
  const tableHeaders = [
    "Candidate Name ",
    "Stage",
    "Rating",
    "Applied Date",
    "Source",
  ];

  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="h-[40px] text-lg font-semibold flex items-center text-gurugeeks-text">
          Total Candidate: {applications?.length}
        </div>
      </div>

      <TableContainer tableHeader={tableHeaders}>
        {applications?.map((applicant, index) => (
          <TableRowItem key={index}>
            <td className="px-6">
              {applicant.applicant.first_name} {applicant.applicant.last_name}
            </td>
            <td className="px-6">
              <Stages />
            </td>
            <td className="px-6">
              <StarRating totalStars={5} initialRating={3} />
            </td>
            <td className="px-6">
              {format(new Date(applicant.created_at), "MMM-dd-yyyy")}
            </td>
            <td className="px-6">{applicant.source}</td>
          </TableRowItem>
        ))}
      </TableContainer>
    </>
  );
};

export default Candididates;
