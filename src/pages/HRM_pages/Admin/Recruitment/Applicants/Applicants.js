import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { FaUserTie } from "react-icons/fa";
import { fetchApplicant } from "../../../../../features/HRM_features/recruitment/applicants/applicants.slice";
import { selectApplicantSlice } from "../../../../../features/HRM_features/recruitment/applicants/applicants.selector";
import { getApplications } from "../../../../../features/HRM_features/recruitment/applications/applications.slice";
import { selectApplicationSlice } from "../../../../../features/HRM_features/recruitment/applications/application.selectors";
import Spinner from "../../../../../components/_common/Spinner";
import { MODALS } from "../../../../../constants/modals.constant";
import {
  BreadCrumbs,
  Button,
  FilterTab,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../../components/HRM_components";
import StarRating from "../../../../../components/HRM_components/Admin/jobs/StartRating";
import Stages from "../../../../../components/HRM_components/Admin/jobs/Stages";
import ApplicantDetailModal from "../../../../../components/HRM_components/Admin/applicant/ApplicantDetailModal";

const Applicants = () => {
  const { applications, isLoading } = useSelector(selectApplicationSlice);
  const dispatch = useDispatch();
  const openApplicantDetails = useSelector(selectModalsSlice);
  const [openModal, setOpenModal] = useState(false);

  const breadcrumbItems = ["Recruitment", "Applicants"];
  const tableHeader = [
    "Candidate Name",
    "Stages",
    "Rating",
    "Applied Date",
    "Source",
  ];
  const [selectedFilterOptions, setSelectedFilterOptions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [applicantData, setApplicantData] = useState(null);

  useEffect(() => {
    dispatch(fetchApplicant());
    dispatch(getApplications());
  }, [dispatch]);

  const filterOptions = [
    {
      id: 1,
      name: "Source",
      filter: [
        "facebook",
        "twitter",
        "sdfdsfsfsfsdsadasdasdd",
        "fdsfdsfdsfdsf",
        "fsdfsfsdfsf",
        "fdsfsfsfdsfs",
        "fsdfsfs",
      ],
    },

    { id: 2, name: "Item 2", filter: ["dont", "talk"] },
    { id: 3, name: "Item 3", filter: ["dont", "talk"] },
  ];

  return (
    <>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <TopTab
        leftComponent={
          <h1 className="font-bold text-xl text-[#161E54]">
            {applications?.length} Applicants
          </h1>
        }
      />

      <FilterTab
        selectedFilters={selectedFilters}
        setSelectedFilterOptions={setSelectedFilterOptions}
        selectedFilterOptions={selectedFilterOptions}
        filterOptions={filterOptions}
        filter={true}
        sort={true}
        search={true}
        setSelectedFilters={setSelectedFilters}
      />

      <div className="px-6">
        <main className="px-6 mb-12 h-full">
          {isLoading ? (
            <>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
              </div>
            </>
          ) : applications?.length > 0 ? (
            <TableContainer pagination={true} tableHeader={tableHeader}>
              {applications?.map((applicant, index) => (
                <>
                  <TableRowItem key={index}>
                    <td
                      className="px-6 cursor-pointer capitalize hover:font-semibold w-[220px]"
                      onClick={() => {
                        setApplicantData(applicant);
                        dispatch(
                          openModalByName(MODALS.RECRUITMENT.APPLICANT_DETAILS)
                        );
                        setOpenModal(!openModal);
                      }}
                    >
                      {applicant.applicant.first_name}{" "}
                      {applicant.applicant.last_name}
                    </td>
                    <td className="px-6">
                      <div className="w-full h-full flex items-center">
                        <Stages />
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full flex items-center justify-center">
                        <StarRating totalStars={5} initialRating={3} />
                      </div>
                    </td>
                    <td className="px-6">25, July,2023</td>
                    <td className="px-6 capitalize">{applicant.source}</td>
                  </TableRowItem>
                </>
              ))}
            </TableContainer>
          ) : (
            <div className="w-full h-[500px] flex items-center justify-center text-gurugeeks-dark-500">
              <div className="flex flex-col items-center justify-center">
                <FaUserTie className="text-[80px] " />
                <p className=" font-semibold text-lg">No Applicants Found</p>
                <p>All job applicants will appear here</p>
              </div>
            </div>
          )}
        </main>
        <ApplicantDetailModal
          applicantData={applicantData}
          setApplicantData={setApplicantData}
          isOpen={openApplicantDetails[MODALS.RECRUITMENT.APPLICANT_DETAILS]}
        />
      </div>
    </>
  );
};

export default Applicants;
