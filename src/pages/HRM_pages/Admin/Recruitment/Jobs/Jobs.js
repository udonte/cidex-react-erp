import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdWorkOff } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Spinner from "../../../../../components/_common/Spinner";
import { selectJobSlice } from "../../../../../features/HRM_features/recruitment/jobs/jobs.selector";
import { fetchJobs } from "../../../../../features/HRM_features/recruitment/jobs/jobs.slice";
import {
  BreadCrumbs,
  Button,
  TabbedPages,
} from "../../../../../components/HRM_components";
import AddJobModal from "../../../../../components/HRM_components/Admin/jobs/modals/AddJobModal/AddJobModal";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../../constants/modals.constant";
import JobCard from "../../../../../components/HRM_components/Admin/jobs/JobCard";
import Joblink from "../../../../../components/HRM_components/Admin/jobs/modals/AddJobModal/Joblink";

const Jobs = () => {
  const dispatch = useDispatch();

  const openModal = useSelector(selectModalsSlice);
  const { isLoading, jobData } = useSelector(selectJobSlice);
  const [jobId, setJobId] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const activeJobs = jobData?.filter((items) => items?.is_active === true);
  const inActiveJobs = jobData?.filter((items) => items?.is_active === false);
  const breadcrumbItems = ["Recruitment", "Jobs"];
  const tabHeader = [
    `All Jobs (${jobData?.length})`,
    `Active (${activeJobs?.length})`,
    `Inactive (${inActiveJobs?.length})`,
  ];

  // pagination start here
  const itemsPerPage = 8; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobData?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(jobData?.length / itemsPerPage);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const nextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // pagination ends here

  const changeTab = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const pageOutPut = () => {
    if (tabIndex === 0) {
      return (
        <div className="mt-4 px-4 grid grid-cols-4">
          {currentJobs?.map(
            (
              {
                title,
                contract_type,
                is_active,
                location,
                id,
                departments,
                applicant_number,
              },
              index
            ) => (
              <div key={index} className="mb-6">
                <JobCard
                  handleOpenJobLinkModal={() => {
                    setJobId(id);
                    dispatch(openModalByName(MODALS.RECRUITMENT.JOB_LINK));
                  }}
                  is_active={is_active}
                  title={title}
                  departments={departments[0]?.name || "N/A"}
                  contract_type={contract_type}
                  location={location}
                  applicant_number={applicant_number}
                  jobId={id}
                />
              </div>
            )
          )}
          {/* <div className="flex">
              <button onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </button>
              <ul className="flex justify-between items-center">
                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
              <button onClick={nextPage} disabled={currentPage === totalPages}>
                Next
              </button>
            </div> */}
        </div>
      );
    }
    if (tabIndex === 1) {
      return (
        <div className="mt-4 px-4 grid grid-cols-4">
          {activeJobs?.map(
            (
              {
                title,
                contract_type,
                is_active,
                location,
                id,
                departments,
                applicant_number,
              },
              index
            ) => (
              <div key={index} className="mb-6">
                <JobCard
                  is_active={is_active}
                  title={title}
                  departments={departments[0]?.name || "N/A"}
                  contract_type={contract_type}
                  location={location}
                  applicant_number={applicant_number}
                  jobId={id}
                />
              </div>
            )
          )}
        </div>
      );
    } else if (tabIndex === 2) {
      return (
        <div>
          <div className="mt-4 px-4 grid grid-cols-4">
            {inActiveJobs?.map(
              (
                {
                  title,
                  contract_type,
                  location,
                  id,
                  is_active,
                  departments,
                  applicant_number,
                },
                index
              ) => (
                <div key={index} className="mb-6">
                  <JobCard
                    title={title}
                    departments={departments[0]?.name || "N/A"}
                    contract_type={contract_type}
                    location={location}
                    applicant_number={applicant_number}
                    jobId={id}
                    is_active={is_active}
                  />
                </div>
              )
            )}
          </div>
        </div>
      );
    }
  };

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
      {/* <FilterTab search={true} sort={true} filter={true} /> */}
      <TabbedPages
        tabIndex={tabIndex}
        tabsHeader={tabHeader}
        rightComponent={
          <div className="flex items-center gap-x-6">
            <div className="w-[185px] h-[42px] px-4 gap-x-2 text-gurugeeks-dark-500 rounded border-2 bg-white flex items-center">
              <FaSearch className="text-gurugeeks-dark-500" />
              <input
                className="w-full placeholder:text-sm font-normal focus:outline-none"
                placeholder="Search job..."
                // value={searchTerm}
                // onChange={(e) => search(e.target.value)}
              />
            </div>
            <Button
              size={"md"}
              onClick={() =>
                dispatch(openModalByName(MODALS.RECRUITMENT.CREATE_JOB))
              }
            >
              Create New Job
            </Button>{" "}
          </div>
        }
        setTabIndex={changeTab}
      >
        {isLoading ? (
          <>
            <div className="h-full w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : (
          <>
            {jobData.length > 0 ? (
              pageOutPut()
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center text-gurugeeks-dark-500">
                <div className="flex flex-col items-center justify-center">
                  <MdWorkOff className="text-[80px] " />
                  <p className=" font-semibold text-lg">No Jobs Found</p>
                  <p>Your job list is empty. Create a new job.</p>
                </div>
              </div>
            )}
          </>
        )}
      </TabbedPages>
      {/* <div className="h-full w-full ">
        <div className="flex items-center justify-between px-4 w-full bg-white">
          <div className="flex gap-x-3">
            <button
              className={`${
                pageIndex === 0
                  ? "border-b-4 border-gurugeeks-orangeLight text-gurugeeks-orangeLight"
                  : ""
              } h-14 `}
              onClick={() => {
                setPageIndex(0);
              }}
            >{`Active Jobs (${
              activeJobs ? activeJobs?.length : "0"
            }) `}</button>
            <button
              className={`${
                pageIndex === 1
                  ? "border-b-4 border-gurugeeks-orangeLight text-gurugeeks-orangeLight"
                  : ""
              } h-14 `}
              onClick={() => {
                setPageIndex(1);
              }}
            >{`Inactive Jobs (${
              inActiveJobs ? inActiveJobs?.length : "0"
            }) `}</button>
          </div>
          <div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            
          </div>
        </div>

        {isLoading ? (
          <>
            <div className="h-full w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : (
          <>{pageOutPut()}</>
        )}
      </div> */}
      {openModal[MODALS.RECRUITMENT.CREATE_JOB] && <AddJobModal />}
      {openModal[MODALS.RECRUITMENT.JOB_LINK] && <Joblink id={jobId} />}
    </>
  );
};

export default Jobs;

// allJobs && (
//   <div className="mt-4 px-4 grid grid-cols-4">
//     {allJobs
//       ?.filter((item) => item.is_active === false)
//       .map(({ title, contract_type, location }, index) => (
//         <div key={index} className="mb-6">
//           <JobCard
//             title={title}
//             department={"N/A"}
//             contract_type={contract_type}
//             location={location}
//             applicant_number={"N/A"}
//           />
//         </div>
//       ))}
//   </div>
// ) : (
//   <div className="mt-4 px-4 grid grid-cols-4">
//     {allJobs.map(({ title, contract_type, location }, index) => (
//       <div key={index} className="mb-6">
//         <JobCard
//           title={title}
//           department={"N/A"}
//           contract_type={contract_type}
//           location={location}
//           applicant_number={"N/A"}
//         />
//       </div>
//     ))}
//   </div>
// )
