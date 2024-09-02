import React, { useState } from "react";
import RowItems from "./RowItems";
import TabbedPages from "../../../_common/TabbedPages";

const ActiveCourses = () => {
  const tabsHeader = ["Not Started (1)", "In Progress (3)", "Completed"];
  const [tabIndex, setTabIndex] = useState(0);
  const inProgress = {
    text: "In Progress",
    status: "pending",
  };
  const notInProgress = {
    text: "Not Started",
    status: "inActive",
  };
  const completed = {
    text: "Completed",
    status: "active",
  };

  const tabbedOutput = () => {
    switch (tabIndex) {
      case 0:
        return <RowItems progress={notInProgress} />;
      case 1:
        return <RowItems progress={inProgress} />;
      case 2:
        return <RowItems progress={completed} />;

      default:
        break;
    }
  };

  const changeTab = (i) => {
    setTabIndex(i);
  };

  return (
    <div>
      <TabbedPages
        setTabIndex={changeTab}
        tabIndex={tabIndex}
        tabsHeader={tabsHeader}
      >
        {tabbedOutput()}
      </TabbedPages>
    </div>
  );
};

export default ActiveCourses;
