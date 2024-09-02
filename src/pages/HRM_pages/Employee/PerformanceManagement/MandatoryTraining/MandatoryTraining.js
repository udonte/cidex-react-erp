import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import {
  Button,
  Spinner,
  TableContainer,
  TableRowItem,
  TopTab,
} from "../../../../../components/HRM_components";
import { ImBooks } from "react-icons/im";
import Breadcrumbs from "../../../../../components/HRM_components/_common/BreadCrumbs";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../../constants/modals.constant";
import { fetchMandatoryTraining } from "../../../../../features/HRM_features/performance/mandatoryTraining/mandatory.slice";
import { selectMandatoryTraining } from "../../../../../features/HRM_features/performance/mandatoryTraining/mandatory.selector";
import SubmitCertificateModal from "../../../../../components/HRM_components/Employee/PerformanceManagement/SubmitCertificateModal";
import ProgressBar from "../../../../../components/HRM_components/_common/ProgressBar";

const MandatoryTraining = () => {
  const dispatch = useDispatch();
  const tableHeader = [
    "Course Title",
    "Resource",
    "Links",
    "Certificate",
    "Status",
  ];
  const { courses, isLoading } = useSelector(selectMandatoryTraining);
  const openCourseModal = useSelector(selectModalsSlice);
  const breadcrumbItems = ["Mandatory Training", "Course"];

  useEffect(() => {
    dispatch(fetchMandatoryTraining());
  }, [dispatch]);

  return (
    <div>
      <Breadcrumbs breadcrumbItems={breadcrumbItems} />

      <TopTab
        rightComponent={
          <div>
            <div className="w-[120px] h-[8px]">
              <ProgressBar data={5} completed={5} />
            </div>
          </div>
        }
      ></TopTab>

      {isLoading ? (
        <>
          <div className="h-[500px] w-full flex items-center justify-center">
            <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
          </div>
        </>
      ) : (
        <main className="w-full h-full px-6">
          {courses?.length > 0 ? (
            <TableContainer tableHeader={tableHeader}>
              {courses.map((course, index) => {
                return (
                  <TableRowItem
                    onClick={() => {
                      dispatch(
                        openModalByName(MODALS.PERFORMANCE.SUBMIT_CERTIFICATE)
                      );
                    }}
                  >
                    <td className="pl-8 truncate">{course.title}</td>
                    <td className="pl-6">{course.resource}</td>
                    <td className="truncate">{course.link}</td>
                    <td className="truncate pl-8">--</td>
                    <td className="truncate pl-8">--</td>
                  </TableRowItem>
                );
              })}
            </TableContainer>
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center text-gurugeeks-dark-500">
              <div className="flex flex-col items-center justify-center">
                <ImBooks className="text-[80px]" />
                <p className=" font-semibold text-lg">No courses added yet</p>
                <p>Your course list is empty. Create a new project.</p>
              </div>
            </div>
          )}
        </main>
      )}
      <div>
        <SubmitCertificateModal
          isOpen={openCourseModal[MODALS.PERFORMANCE.SUBMIT_CERTIFICATE]}
        />
      </div>
    </div>
  );
};

export default MandatoryTraining;
