import React, { useState } from "react";
import MiddleModalContainer from "../../../_common/MiddleModalContainer/MiddleModalContainer";
import TabbedPages from "../../../_common/TabbedPages";

const ImportCourseModal = () => {
  const tabsHeader = ["Import from xls", "Import from Others"];
  const [tabIndex, setTabIndex] = useState(0);
  const changeTab = (index) => {
    setTabIndex(index);
  };
  const tabOutput = () => {
    if (tabIndex === 0) {
      return (
        <div className="w-[450px] border my-6">
          <div className="h-[34px] px-3 flex items-center bg-[#F8F8F8]">
            CSV Contacts Import
          </div>
          <div className="p-3">
            <p className="py-2">Import upto 1000 contacts from xls,csv etc. </p>
            <div className="py-2">
              <input type="file" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-[450px] border my-6">
          <div className="h-[34px] px-3 flex items-center bg-[#F8F8F8]">
            CSV Contacts Import
          </div>
          <div className="p-3">
            <p className="py-2">Import others </p>
            <div className="py-2">
              <input type="file" />
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <MiddleModalContainer>
        <div className="p-6">
          <TabbedPages
            tabsHeader={tabsHeader}
            tabIndex={tabIndex}
            setTabIndex={changeTab}
          >
            {tabOutput()}
          </TabbedPages>
        </div>
      </MiddleModalContainer>
    </div>
  );
};

export default ImportCourseModal;
