import React, { useState } from "react";
import { TbTicket } from "react-icons/tb";
import Tabs from "../../../../components/WEB_components/TabsHrm";
import Employeemgt from "../../../../assets/landingPage/hrm/HrmEmpMngt.png";
import Learningmgt from "../../../../assets/landingPage/hrm/learning.png";    
import Timesheetmgt from "../../../../assets/landingPage/hrm/Timesheet.png";
import Performancemgt from "../../../../assets/landingPage/hrm/performance-m.png";

import { IoAnalyticsSharp,IoDocumentsOutline} from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { RxCountdownTimer } from "react-icons/rx";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";

import RightDesign from "./RightDesign";
import LeftDesign from "./LeftDesign";

const HrmFeatures = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabsHeader = [
    "Employee Management",
    "Learning & Development  ",
    "Timesheet Management",
    "Performance Management",
  ];
  const changeTab = (index) => {
    setTabIndex(index);
  };

  const HrmCards = ({ headerText, descriptionText, icon }) => {
    return (
      <div className=" flex flex-col text-left  gap-4 w-[324px] px-7 py-12 hover:shadow-lg hover:rounded-[15%]">
        <div className="flex items-center justify-center bg-white shadow-lg rounded-[100%]  h-[72px] w-[72px] mb-5 text-gurugeeks-orange-600 text-center">
          {" "}
          {icon}
        </div>
        <h1 className="text-lg font-medium">{headerText}</h1>
        <p className="font-light text-[14px]"> {descriptionText}</p>
      </div>
    );
  };

  const pagesOutput = () => {
    if (tabIndex === 0) {
      return (
        <div>
          <RightDesign
            header="Employee Management"
            text="Automate recurring tasks to effortlessly oversee every aspect of your workforce's journey from recruitment, onboarding to retirement and save time on repetitive tasks."
            image={Employeemgt}
            alt="Employee Management"
          />
        </div>
      );
    } else if (tabIndex === 1) {
      return (
        <div>
          <RightDesign
            header="Learning & Development"
            text="Exceed allows employee to take over of their career and personal growth through course management, progress, tracking and developement tools to deliver the best learning experience"
            image={Learningmgt}
            alt="Employee Management"
          />
        </div>
      );
    } else if (tabIndex === 2) {
      return (
        <div>
          <RightDesign
            header="Timesheet Management"
            text="Make every our count with Exceed's noval Timesheet Management feature. Our smooth and easy approval process allows dfor "
            image={ Timesheetmgt }
            alt="Emplyee Management"
          />
        </div>
      );
    } else if (tabIndex === 3) {
      return (
        <div>
          <LeftDesign
            header="Performance Management"
            text="Fire up employee performance with our robust toolkit where you can set custom KPIs, rate, and track employee performance to align with company goals. With the added feature that empowers your employees to complete mandatory trainings, professional courses, and upload certifications seamlessly and efficiently."
            image={Performancemgt}
            alt="Performance Management"
          />
        </div>
      );
    }
  };

  return (
    <div className="">
      <div className=" flex flex-col items-center px-20 py-20 bg-gray-100">
        <div className="text-center flex flex-col justify-center gap-3 w-[800px]  py-10">
          <p className="text-lg text-gurugeeks-orange-600">
            The complete HR package in one platform
          </p>
          <h1 className="text-4xl text-center font-bold">
            HRM Features Highlight
          </h1>
        </div>

          <Tabs
            tabIndex={tabIndex}
            setTabIndex={changeTab}
            tabsHeader={tabsHeader}>
            {pagesOutput()}
          </Tabs>

      </div>


        <div className="py-20">
          <div className=" flex flex-col items-center">
            <div className="text-center flex flex-col justify-center gap-3 w-[800px]  py-10">
              <p className="text-lg text-gurugeeks-orange-600">
                The complete HR package in one platform
              </p>
              <h1 className="text-4xl text-center font-bold">
                Other HRM Features
              </h1>
            </div>
          </div>

          <div className=" flex flex-wrap justify-center gap-20">
            <HrmCards
              icon={<TbTicket size={24}/>}
              headerText="Helpdesk Ticketing"
              descriptionText=" Your all-in-one solution for seamless IT support, procurement, logistics, and facility management. Chuck out the clumsy paper work process with our cutting-edge Helpdesk Ticketing feature."
            />

            <HrmCards
              icon={<IoAnalyticsSharp size={24} />}
              headerText="Report & Analytics"
              descriptionText="Efficiently analyze employee turnover, demographics, activity, attendance, training compliance, and pay ranges for informed workforce management."
            />

            <HrmCards
              icon={<IoDocumentsOutline size={24} />}
              headerText="Policy and Document Oasis"
              descriptionText="Centralize your HR-related documents for easy access and sharing. Your repository for employee handbooks, policies, and more."
            />

            <HrmCards
              icon={<TfiReload size={24} />}
              headerText="Asset Intelligence"
              descriptionText="Maximize your company assets with a symphony of features to track Asset details, location, status, upload product manual, warranties, receipts, track maintenance management etc"
            />

            <HrmCards
              icon={<RxCountdownTimer size={24} />}
              headerText="Employee Self-Service"
              descriptionText="Place the power in the hands of your employees with access to their own easy-to-use interface, allowing them to make leave requests, track and manage their learning & development etc."
            />

            <HrmCards
              icon={<HiMiniArrowsRightLeft size={24}/>}
              headerText="Chat & Collaboration"
              descriptionText="Experience the future of collaborative work with our chat feature, redefining how teams work together for a truly enriching experience."
            />
          </div>
        </div>
    </div>
  );
};

export default HrmFeatures;
