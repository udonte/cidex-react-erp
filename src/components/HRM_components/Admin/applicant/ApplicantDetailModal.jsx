import React, { useState } from "react";
import TabbedPages from "../../_common/TabbedPages";
import Modal from "../../_common/ModalContainer/ModalConatiner";
import ApplicantDetails from "../../../../pages/HRM_pages/Admin/Recruitment/Applicants/Details/ApplicantDetails";
import Resume from "../../../../pages/HRM_pages/Admin/Recruitment/Applicants/Details/Resume";
import Interviews from "../../../../pages/HRM_pages/Admin/Recruitment/Applicants/Details/Interviews";
import PipeLine from "../../../../pages/HRM_pages/Admin/Recruitment/Applicants/Details/PipeLine";
import ScoreCard from "../jobs/modals/AddJobModal/ScoreCard";
import ScoreCardRating from "../../../../pages/HRM_pages/Admin/Recruitment/Applicants/Details/ScoreCardRating";
import ScheduleInterview from "../jobs/ScheduleInterview";
import CustomDropdown from "../../_common/CustomDropDown";
import Button from "../../_common/Button/Button";
import { CiCalendar } from "react-icons/ci";
import FullNameTag from "../../_common/FullNameTag";
import { FaAngleDown } from "react-icons/fa";
import MoveCandidate from "../jobs/MoveCandidate";

const ApplicantDetailModal = ({ isOpen, applicantData, setApplicantData }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showScheduleForm, setShowSchduleForm] = useState(false);
  const [showMoveCandidate, setShowMoveCandidate] = useState(false);

  const tabsHeader = [
    "Details",
    "Files",
    "Interviews",
    "Pipepline",
    "Scorecard",
  ];

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const handleMoveSelection = (selectedOption) => {
    if (selectedOption === "new") {
      return;
    } else if (selectedOption === "screening") {
      return;
    }
  };

  const handleActionsSelection = (selectedOption) => {
    if (selectedOption === "talentPool") {
      return;
    } else if (selectedOption === "delete") {
      return;
    }
  };

  const moveActions = [
    { value: "new", label: "New" },
    { value: "screening", label: "Screening" },
    { value: "interview", label: "Interview" },
    { value: "offer", label: "Offer" },
    { value: "hired", label: "hired" },
  ];

  const actions = [
    { value: "talentPool", label: "Move to Talent pool" },
    { value: "delete", label: "Delete" },
    { value: "disqualify", label: "Disqualify" },
  ];

  const tabbedPages = () => {
    if (tabIndex === 0) {
      return (
        <div>
          <ApplicantDetails
            applicantData={applicantData}
            setApplicantData={setApplicantData}
          />
        </div>
      );
    } else if (tabIndex === 1) {
      return (
        <div>
          <Resume />
        </div>
      );
    } else if (tabIndex === 2) {
      return (
        <div>
          <Interviews applicantData={applicantData} />
        </div>
      );
    } else if (tabIndex === 3) {
      return (
        <div>
          <PipeLine applicantData={applicantData} />
        </div>
      );
    } else if (tabIndex === 4) {
      return (
        <div>
          <ScoreCardRating />
        </div>
      );
    }
  };

  return (
    <>
      <Modal title={"Candidate Details"} isOpen={isOpen}>
        <div className="w-full bg-gurugeeks-grayLight-400 py-4 px-2">
          <div className="flex item-center gap-2 h-[80px] py-4 px-2 rounded-md">
            <div className="mr-auto">
              <FullNameTag
                size={"lg"}
                firstName={applicantData?.applicant.first_name}
                lastName={applicantData?.applicant.last_name}
              />
            </div>

            {/* schedule */}
            <div className="relative">
              <Button
                className={"h-14"}
                size={""}
                onClick={() => {
                  setShowSchduleForm(!showScheduleForm);
                }}
              >
                Schedule Interview <CiCalendar />
              </Button>
              {showScheduleForm && (
                <div className="absolute z-20">
                  <ScheduleInterview
                    setShowcheduleForm={setShowSchduleForm}
                    applicantData={applicantData}
                  />
                </div>
              )}
            </div>

            {/* move candidate */}
            <div className="w-[200px] h-10">
              <CustomDropdown
                placeHolder={"Move to"}
                options={moveActions}
                onSelect={(selectedOption) => {
                  handleMoveSelection(selectedOption);
                }}
              />
            </div>

            {/* actions */}
            <div className="w-[150px]">
              <CustomDropdown
                placeHolder={"Actions"}
                options={actions}
                onSelect={(selectedOption) => {
                  handleActionsSelection(selectedOption);
                }}
              />
            </div>
          </div>
        </div>
        <TabbedPages
          tabIndex={tabIndex}
          setTabIndex={changeTab}
          tabsHeader={tabsHeader}
        >
          <div className="p-6">{tabbedPages()}</div>
        </TabbedPages>
      </Modal>
    </>
  );
};

export default ApplicantDetailModal;
