import React, { useState } from "react";
import RowItems from "./RowItems";
import TabbedPages from "../../../_common/TabbedPages";

const SturdyRequest = () => {
  const tabsHeader = [`Request (${0}) `, "On Hold", "Rejected"];

  const [tabIndex, setTabIndex] = useState(0);

  const tabbedOutput = () => {
    switch (tabIndex) {
      case 0:
        return <RowItems />;
      case 1:
        return <RowItems />;
      case 2:
        return <RowItems />;

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

export default SturdyRequest;
