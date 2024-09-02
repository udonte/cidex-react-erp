import React, { useState } from "react";
import TabbedPages from "../../_common/TabbedPages";
import MiddleModalContainer from "../../_common/MiddleModalContainer/MiddleModalContainer";
import PricePlanCard from "./PriceCard";

const ChangePlan = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  };

  const tabLabels = ["Monthly", "Annually"];

  const pricePlans = [
    {
      name: "Starter Plan",
      audience: "For Startups",
      amount: {
        naira: "N5000",
        dollar: "$5.99",
        pounds: "£3.99",
      },
      description: "Manage Your Team And Captue Sales",
      features: [
        "From 1 - 10 Users",
        "Smart Recruitment Hub",
        "Talent Pool",
        "Collaborative Hiring",
        "Enhanced Employee Profiles",
        "Leave Application Management",
        "Attendance Automation",
        "Policy and Document Oasis",
        "Sales and Invoicing Management",
      ],
    },
    {
      name: "Gold",
      audience: "For Medium Scale Businesses",
      amount: {
        naira: "N11,000",
        dollar: "$11.99",
        pounds: "£8.99",
      },
      description: "The Future of Business CRM",
      features: [
        "From 1 - 10 Users",
        "Smart Recruitment Hub",
        "Talent Pool",
        "Collaborative Hiring",
        "Enhanced Employee Profiles",
        "Leave Application Management",
        "Attendance Automation",
        "Policy and Document Oasis",
        "Sales and Invoicing Management",
      ],
    },
    {
      name: "Enterprise ",
      audience: "Large Scale Businesses",
      amount: {
        naira: "N16,890",
        dollar: "$16.99",
        pounds: "£13.99",
      },
      description: "The Ultimate Enterprise Management Suite",
      features: [
        "From 1 - 10 Users",
        "Smart Recruitment Hub",
        "Talent Pool",
        "Collaborative Hiring",
        "Enhanced Employee Profiles",
        "Leave Application Management",
        "Attendance Automation",
        "Policy and Document Oasis",
        "Sales and Invoicing Management",
      ],
    },
  ];

  const pageOutput = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          // price cards container
          <div className="flex justify-between items-start gap-4 mt-4">
            {/* price cards */}
            {pricePlans.map((plan, index) => (
              <PricePlanCard key={index} {...plan} />
            ))}
          </div>
        );
      case 1:
        return (
          <div className="flex justify-between items-start gap-4 mt-4">
            {/* price cards */}
            {pricePlans.map((plan, index) => (
              <PricePlanCard key={index} {...plan} />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MiddleModalContainer title="Suitable Plan for your businesses">
      <div className="bg-white px-8 py-4">
        <div className="px-6 py-6">
          {/* TabbedPages component */}
          <TabbedPages
            tabIndex={activeTabIndex}
            tabsHeader={tabLabels}
            setTabIndex={handleTabChange}
          >
            <>{pageOutput()}</>
          </TabbedPages>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default ChangePlan;
