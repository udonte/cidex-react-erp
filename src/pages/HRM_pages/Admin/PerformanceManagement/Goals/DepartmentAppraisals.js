import React, { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { MODALS } from "../../../../../constants/modals.constant";
import { selectModalsSlice } from "../../../../../features/common/modals/modals.selectors";
import { openModalByName } from "../../../../../features/common/modals/modals.slice";
import {
  BreadCrumbs,
  Button,
  TabbedPages,
  TableContainer,
  TableRowItem,
} from "../../../../../components/HRM_components";
import ProgressBar from "../../../../../components/HRM_components/_common/ProgressBar";
import TableViewToggleButton from "../../../../../components/HRM_components/_common/TableViewToggleButton";
import Appraisals from "../../../../../components/HRM_components/Admin/performance/goals/Appraisals";
import BarChart from "../../../../../components/HRM_components/Admin/performance/goals/BarChart";
import Feedbacks from "../../../../../components/HRM_components/Admin/performance/goals/Feedbacks";
import FeedbackModal from "../../../../../components/HRM_components/Admin/performance/goals/FeedbackModal";

const DepartmentAppraisals = () => {
  const openModal = useSelector(selectModalsSlice);
  const dispatch = useDispatch();
  const breadcrumbItems = [
    "Performance",
    "Goals",
    "Departments",
    "Cloud Department",
  ];

  const tabsHeader = ["Appraisal", "Self Assessments"];
  const [tabIndex, setTabIndex] = useState(0);
  const [listView, setListView] = useState(true);

  const changeTab = (index) => {
    setTabIndex(index);
  };
  const handleListViewToggle = () => {
    setListView((prevState) => !prevState);
  };
  const tableHeader = ["Name", "Review Progress", "Current Status", ""];
  const [showReviews, setShowReviews] = useState(false);

  const openFeedBackModal = () => {
    dispatch(openModalByName(MODALS.PERFORMANCE.FEEDBACKS));
  };

  const tabbedPages = () => {
    if (tabIndex === 0) {
      return (
        <>
          <div className="relative">
            <TableContainer tableHeader={tableHeader}>
              <TableRowItem>
                <td
                  onClick={() => setShowReviews(!showReviews)}
                  className="h-[90px] cursor-pointer"
                >
                  Devon Lane
                </td>
                <td
                  className="cursor-pointer"
                  onClick={() => setShowReviews(!showReviews)}
                >
                  <div className="h-2 w-[120px] m-auto">
                    <ProgressBar data={5} completed={2} />
                  </div>
                </td>
                <td
                  className="cursor-pointer"
                  onClick={() => setShowReviews(!showReviews)}
                >
                  Awaiting 2 Reviews
                </td>
                {showReviews ? (
                  <td>
                    <TableViewToggleButton
                      activeState={listView}
                      handleOnClick={handleListViewToggle}
                      leftIcon={
                        <div className="flex items-center justify-center px-2 gap-x-1">
                          <p>
                            <AiOutlineStar />
                          </p>
                          <p> Rating</p>
                        </div>
                      }
                      rightIcon={
                        <div className="flex items-center justify-center gap-x-1">
                          <p>
                            <BsFillBarChartLineFill />
                          </p>
                          <p>Chart</p>
                        </div>
                      }
                    />
                  </td>
                ) : (
                  <td>
                    <div className="w-[180px]"></div>
                  </td>
                )}
              </TableRowItem>
              {showReviews && (
                <>
                  {listView ? (
                    <Appraisals openFeedBackModal={openFeedBackModal} />
                  ) : (
                    <div className="w-full flex items-start h-[450px] absolute p-6 bg-white">
                      <div className=" bg-white w-[60%]">
                        <BarChart />
                      </div>
                      <div>
                        <Feedbacks openFeedBackModal={openFeedBackModal} />
                      </div>
                    </div>
                  )}
                </>
              )}
            </TableContainer>
          </div>
        </>
      );
    } else {
      return <div>4</div>;
    }
  };

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <div className="flex justify-between items-center px-6 py-4 mt-2 bg-white ">
        <h1 className="text-xl font-bold">Complete Project Raven to 90%</h1>
        <p className=" text-gurugeeks-dark-600">Cycle</p>
      </div>
      <TabbedPages
        tabIndex={tabIndex}
        setTabIndex={changeTab}
        rightComponent={
          <>
            <div className="flex items-center gap-x-2">
              <h1 className=" text-2xl">
                Q2
                <span className=" text-gurugeeks-dark-600"> April - June</span>
              </h1>
              <FaChevronDown />
            </div>
          </>
        }
        tabsHeader={tabsHeader}
      >
        {tabbedPages()}
      </TabbedPages>
      <FeedbackModal
        width={"sm"}
        isOpen={openModal[MODALS.PERFORMANCE.FEEDBACKS]}
      />
    </div>
  );
};

export default DepartmentAppraisals;
