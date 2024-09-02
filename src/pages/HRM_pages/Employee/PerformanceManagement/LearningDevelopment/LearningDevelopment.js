import React, { useState } from "react";
import {
  BreadCrumbs,
  Button,
  FilterTab,
  TabbedPages,
  TopTab,
} from "../../../../../components/HRM_components";
import NewCourse from "./NewCourse";
import Archive from "./Archive";
import EmployeeAddCoursesModal from "../Modals/EmployeeAddCoursesModal";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { useSelector } from "react-redux";
import { MODALS } from "../../../../../constants/modals.constant";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";

const LearningDevelopment = () => {
  const breadcrumbItems = ["Performance", "Learning & Development"];
  const [pageIndex, setPageIndex] = useState(0);
  const openModal = useSelector(selectModalsSlice);
  const dispatch = useDispatch();

  const handlePage = (index) => {
    setPageIndex(index);
  };

  const pageOutput = () => {
    switch (pageIndex) {
      case 0:
        return (
          <div>
            <NewCourse />
          </div>
        );

      case 1:
        return (
          <div>
            <Archive />
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <BreadCrumbs breadcrumbItems={breadcrumbItems} />
        <TopTab
          rightComponent={
            <Button
              onClick={() => {
                dispatch(
                  openModalByName(MODALS.PERFORMANCE.EMPLOYEE_ADD_COURSE)
                );
              }}
            >
              Add Course
            </Button>
          }
          leftComponent={
            <>
              <div>
                <p className=" text-lg font-semibold">Library</p>
                <p>0 Courses</p>
              </div>
            </>
          }
        />
        <FilterTab filter={true} search={true} sort={true} />

        <main>
          <TabbedPages
            tabIndex={pageIndex}
            setTabIndex={handlePage}
            tabsHeader={["New Courses", "Archive"]}
          >
            {pageOutput()}
          </TabbedPages>
        </main>
        {
          <EmployeeAddCoursesModal
            isOpen={openModal[MODALS.PERFORMANCE.EMPLOYEE_ADD_COURSE]}
          />
        }
      </div>
    </div>
  );
};

export default LearningDevelopment;
