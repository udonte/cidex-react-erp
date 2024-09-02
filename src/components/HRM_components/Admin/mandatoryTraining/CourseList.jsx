import React from "react";
import { useDispatch } from "react-redux";
import { openModalByName } from "../../../../features/common/modals/modals.slice";
import { MODALS } from "../../../../constants/modals.constant";
import TopTab from "../../_common/TopTab";
import Button from "../../_common/Button/Button";
import TableContainer from "../../_common/Table/TableContainer";
import TableRowItem from "../../_common/Table/TableRowItem";

const CourseList = ({ courses }) => {
  const tableHeader = ["Course Title", "Phone", "Links"];
  const dispatch = useDispatch();
  const openCourseModal = (name) => {
    dispatch(openModalByName(name));
  };

  return (
    <div>
      <TopTab
        leftComponent={<h1 className="text-lg font-bold">Courses</h1>}
        rightComponent={
          <div className="flex items-center gap-x-3">
            <Button
              onClick={() => openCourseModal(MODALS.PERFORMANCE.ADD_COURSE)}
              color={"secondary"}
            >
              Add Course
            </Button>
            <Button
              onClick={() => openCourseModal(MODALS.PERFORMANCE.IMPORT_COURSE)}
              color={"primary"}
            >
              Import Course
            </Button>
          </div>
        }
      />
      <div className="px-3 w-full">
        <TableContainer tableHeader={tableHeader}>
          {courses.map((course, index) => {
            return (
              <TableRowItem>
                <td className="px-3 truncate">{course.title}</td>
                <td className="">{course.resource}</td>
                <td className="truncate">{course.links}</td>
              </TableRowItem>
            );
          })}
        </TableContainer>
      </div>
    </div>
  );
};

export default CourseList;
