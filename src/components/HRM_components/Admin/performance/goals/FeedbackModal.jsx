import React, { useState } from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";
import Modal from "../../../_common/ModalContainer/ModalConatiner";
import TabbedPages from "../../../_common/TabbedPages";

const FeedbackModal = ({ isOpen, width }) => {
  const tabsHeader = ["Metrics", "Remark"];
  const [tabIndex, setTabIndex] = useState(0);
  const feedbacks = [
    "Communication",
    "Technical Skills",
    "Teamwork",
    "Organization ",
    "Time Management ",
  ];

  const pageOutput = () => {
    if (tabIndex === 0) {
      return (
        <div>
          <div className="bg-[#EAF1F3] rounded mt-[200px] overflow-y-scroll">
            <p className="center p-1 text-center">
              Only your Team manager and Admin will see your assessment{" "}
            </p>
          </div>
          {feedbacks.map((feedback, index) => {
            return <FeedbackRating feedback={feedback} key={index} />;
          })}
        </div>
      );
    } else if (tabIndex) {
      return <div>rwe</div>;
    }
  };

  const changeTab = (index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <Modal width={width} isOpen={isOpen}>
        <TabbedPages
          setTabIndex={changeTab}
          tabIndex={tabIndex}
          tabsHeader={tabsHeader}
        >
          <div className="flex flex-col justify-center px-8 py-2 h-[90%] overflow-y-scroll">
            {pageOutput()}
          </div>
        </TabbedPages>
      </Modal>
    </div>
  );
};

const FeedbackRating = ({ feedback }) => {
  return (
    <div className="my-4 space-y-5">
      <div className="border rounded-lg w-fit ">
        <div className="flex items-center p-1 gap-x-2 font-semibold text-lg ">
          <div className="flex items-center gap-x-1">
            <FaStar className=" text-yellow-300" /> <p>3.4</p>
          </div>
          <p>{feedback}</p>
          <FaChevronDown />
        </div>
      </div>
      <div>
        <p className="font-bold">Feedback</p>
        <p className="">
          <i>
            Please, take a moment to rate your teammate’s performance based on
            key performance indicators (KPIs). Your Feedback is valuable for our
            performance management process. Thank You!
          </i>
        </p>
      </div>
    </div>
  );
};

export default FeedbackModal;
