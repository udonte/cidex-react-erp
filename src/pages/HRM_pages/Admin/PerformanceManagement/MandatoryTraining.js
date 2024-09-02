import React, { useEffect, useState } from "react";
import { selectModalsSlice } from "../../../../features/common/modals/modals.selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMandatoryTraining } from "../../../../features/HRM_features/performance/mandatoryTraining/mandatory.slice";
import { selectMandatoryTraining } from "../../../../features/HRM_features/performance/mandatoryTraining/mandatory.selector";
import { MODALS } from "../../../../constants/modals.constant";
import { ImBooks } from "react-icons/im";
import Spinner from "../../../../components/_common/Spinner";
import CourseList from "../../../../components/HRM_components/Admin/mandatoryTraining/CourseList";
import Submission from "../../../../components/HRM_components/Admin/mandatoryTraining/Submission";
import AddCourseModal from "../../../../components/HRM_components/Admin/mandatoryTraining/Modals/AddCourseModal";
import ImportCourseModal from "../../../../components/HRM_components/Admin/mandatoryTraining/Modals/ImportCourseModal";
import Breadcrumbs from "../../../../components/HRM_components/_common/BreadCrumbs";
import {
  Button,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../components/HRM_components";
import { openModalByName } from "../../../../features/common/modals/modals.slice";

const MandatoryTraining = () => {
  const dispatch = useDispatch();
  const tableHeader = ["Course Title", "Resource", "Links"];
  const { courses, isLoading } = useSelector(selectMandatoryTraining);
  const openCourseModal = useSelector(selectModalsSlice);
  const breadcrumbItems = ["Mandatory Training", "Course"];
  const tabHeader = ["Course List", "Submission"];
  const [tabIndex, setTabIndex] = useState(0);
  const changeTab = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    dispatch(fetchMandatoryTraining());
  }, [dispatch]);

  const output = () => {
    if (tabIndex === 0) {
      if (courses?.length > 0) {
        return (
          <TableContainer tableHeader={tableHeader}>
            {courses.map((course, index) => {
              return (
                <TableRowItem>
                  <td className="pl-8 truncate">{course.title}</td>
                  <td className="pl-6">{course.resource}</td>
                  <td className="truncate">{course.link}</td>
                </TableRowItem>
              );
            })}
          </TableContainer>
        );
      } else {
        return (
          <div className="w-full h-[300px] flex items-center justify-center text-gurugeeks-dark-500">
            <div className="flex flex-col items-center justify-center">
              <ImBooks className="text-[80px]" />
              <p className=" font-semibold text-lg">No courses added yet</p>
              <p>Your course list is empty. Create a new project.</p>
            </div>
          </div>
        );
      }
    } else if (tabIndex === 1) {
      return (
        <div>
          <Submission />
        </div>
      );
    }
  };

  return (
    <div>
      <Breadcrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <TabbedPages
        tabsHeader={tabHeader}
        setTabIndex={changeTab}
        tabIndex={tabIndex}
        rightComponent={
          <Button
            onClick={() => {
              dispatch(openModalByName(MODALS.PERFORMANCE.ADD_COURSE));
            }}
          >
            Add Course
          </Button>
        }
      >
        {isLoading ? (
          <>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Spinner className={"text-[80px] text-gurugeeks-orange-700"} />
            </div>
          </>
        ) : (
          <main className="w-full h-full px-6">{output()}</main>
        )}
      </TabbedPages>
      <div>
        <AddCourseModal
          isOpen={openCourseModal[MODALS.PERFORMANCE.ADD_COURSE]}
        />
      </div>
      <div>
        {openCourseModal[MODALS.PERFORMANCE.IMPORT_COURSE] && (
          <ImportCourseModal />
        )}
      </div>
    </div>
  );
};

export default MandatoryTraining;
