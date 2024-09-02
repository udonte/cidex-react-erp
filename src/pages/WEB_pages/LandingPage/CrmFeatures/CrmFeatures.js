import React, { useState } from "react";

import Tabs from "../../../../components/WEB_components/TabsCrm";
import Button from "../../../../components/WEB_components/Button";

import Salemgt from "../../../../assets/landingPage/crm/Sales-M.png";
import Leadmgt from "../../../../assets/landingPage/crm/Lead-M.png";
import Icon1 from "../../../../assets/landingPage/crm/ColorSwatchOutline.png";
import CustomerHelpDesk from "../../../../assets/landingPage/crm/Cus-H.png";
import CustomerService from "../../../../assets/landingPage/crm/Cus-S.png";

import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { BsEnvelopeOpen } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { MdManageAccounts } from "react-icons/md";

const CrmFeatures = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabsHeader = [
    "Sales Management",
    "Lead Management",
    "Customer Helpdesk",
    "Customer Service",
  ];
  const changeTab = (index) => {
    setTabIndex(index);
  };

  const RightDesign = ({ header, text, image, alt }) => {
    return (
      <div className=" mt-20 flex gap-6 ">
        <div className="w-[60%]">
          <img src={image} alt={alt} />
        </div>

        <div className=" flex items-center w-[40%]">
          <div className="flex  flex-col  text-left gap-5">
            <h1 className="text-4xl font-semibold">{header}</h1>
            <p className="font-light text-[16px]">{text}</p>
            <div>
              <Button color="secondary" size="md">
                Request Demo
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LeftDesign = ({ header, text, image, alt }) => {
    return (
      <div className=" mt-20 flex flex-row-reverse gap-6 ">
        <div className="w-[60%]">
          <img src={image} alt={alt} />
        </div>

        <div className=" flex items-center w-[40%]">
          <div className="flex  flex-col  text-left gap-5">
            <h1 className="text-4xl font-semibold">{header}</h1>
            <p className="font-light text-[16px]">{text}</p>
            <div>
              <Button color="secondary" size="md">
                Request Demo
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CrmCards = ({ headerText, descriptionText, icon }) => {
    return (
      <div className=" flex flex-col text-left  gap-4 w-[324px] px-7 py-12 hover:shadow-lg hover:rounded-[15%]">
        <div className="flex items-center justify-center bg-white shadow-lg rounded-[100%]  h-[72px] w-[72px] mb-5 text-gurugeeks-green-600 text-center">
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
            header="Sales Management"
            text="From invoicing to sales order tracking, Exceed offers a suite of modules to maintain sales records and track payments."
            image={Salemgt}
            alt="Employee Management"
          />
        </div>
      );
    } else if (tabIndex === 1) {
      return (
        <div>
          <RightDesign
            header="Lead Management"
            text="Manage and assign leads to the right sales team members based on predefined criteria, optimizing response times and conversion rates."
            image={Leadmgt}
            alt="Employee Management"
          />
        </div>
      );
    } else if (tabIndex === 2) {
      return (
        <div>
          <RightDesign
            header="Customer Helpdesk"
            text="Effortlessly manage customer interactions across various channels, such as emails, and chats, to
            deliver unmatched customer service."
            image={CustomerHelpDesk}
            alt="Employee Management"
          />
        </div>
      );
    } else if (tabIndex === 3) {
      return (
        <div>
          <LeftDesign
            header="Customer Service"
            text="Turbocharge your response rate and reduce turnaround time on customer inquiries and concerns with our smart customer service management system which optimizes workflows and automates routine tasks, ensuring that every customer is satisfied."
            image={CustomerService}
            alt="Employee Management"
          />
        </div>
      );
    }
  };



  return (
    <div className="py-20 ">
      <div className=" flex flex-col items-center px-20 py-20 bg-gray-100">
        <div className="text-center flex flex-col justify-center gap-3 w-[800px]  py-10">
          <p className="text-lg text-gurugeeks-green-600">
            The complete HR package in one platform
          </p>
          <h1 className="text-4xl text-center font-bold">
            CRM Features Highlight
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
            <p className="text-lg text-gurugeeks-green-600">
              The complete HR package in one platform
            </p>
            <h1 className="text-4xl text-center font-bold">
              Other CRM Features
            </h1>
          </div>
        </div>

        <div className=" flex flex-wrap justify-center gap-20">
          <CrmCards
            icon={<HiMiniArrowsRightLeft size={24}/>}
            headerText="Inventory Control"
            descriptionText="Seamlessly manage and  track your inventory database, monitor product returns, and update your product stock levels with ease."
          />

          <CrmCards
            icon={<BsEnvelopeOpen size={24} />}
            headerText="Email Campaign"
            descriptionText="Drive conversions with our powerful Email Campaign feature. Craft engaging emails, track performance, and watch your Customer relationships flourish."
          />

          <CrmCards
            icon={<img src={Icon1}  alt="icon"/>}
            headerText="Lead Segmentation"
            descriptionText="Tailor your strategies and win over your leads with precision through lead segmentation based on industry, preferences, and more."
          />

          <CrmCards
            icon={<HiOutlineDocumentReport size={24} />}
            headerText="Reporting  and Analytics"
            descriptionText="Make informed decisions with real-time data and  reports. Track email open and bounce rate and more to gain a competitive edge and optimize your strategies for success."
          />

          <CrmCards
            icon={<MdOutlineDashboardCustomize size={24} />}
            headerText="Client Subscription Management"
            descriptionText="Empower customer service reps to effortlessly manage client subscriptions, troubleshoot issues, and swiftly resolve errors."
          />

          <CrmCards
            icon={<MdManageAccounts size={24} />}
            headerText="Customer Information Management"
            descriptionText="Easily compile, update & track customer data, ensuring smooth and consistent sales operation, keeping you on top of your customer interactions at all times"
          />
        </div>
      </div>
    </div>
  );
};

export default CrmFeatures;
