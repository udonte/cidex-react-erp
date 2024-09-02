import React from "react";

import TalenPic from "../../../../assets/landingPage/hiring_talentpool.png";
import Insights from "../../../../assets/landingPage/insights.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hiring = () => {
  return (
    <div
      className="hrm__hiring flex flex-col gap-12 md:py-16 md:px-24 lg:gap-y-[8rem]  py-16 px-8"
      id="home"
    >
      <div className="hrm__hiring-onboarding flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="hrm__hiring-content flex-1 flex flex-col flex-wrap items-start justify-start mr-8">
          <h3 className="font-bold text-4xl lg:text-5xl text-gray-800">
            Hiring &amp; Onboarding
          </h3>
          <p className="font-normal text-base lg:text-xl text-gray-800 mt-4">
            BambooHR helps you quickly find, hire, and onboard the best talent.
            With our powerful applicant tracking system and proactive onboarding
            tasks, you can create a compelling candidate experience and better
            first days for new hires.
          </p>
          <button className="bg-[#C55514B2] rounded-lg text-white font-bold text-base lg:text-xl py-4 px-6 mt-6 outline-none">
            Request Demo
          </button>
        </div>
        <div className="hrm__hiring-image flex-1">
          <img className="w-full" src={TalenPic} alt="meeting" />
        </div>
      </div>

      <div className="hrm__hiring-onboarding flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="hrm__hiring-content flex-1 flex flex-col flex-wrap items-start justify-start mr-8">
          <h3 className="font-bold text-4xl lg:text-5xl text-gray-800">
            Employee Experience &amp; Performance
          </h3>
          <p className="font-normal text-base lg:text-xl text-gray-800 mt-4">
            BambooHR helps you quickly find, hire, and onboard the best talent.
            With our powerful applicant tracking system and proactive onboarding
            tasks, you can create a compelling candidate experience and better
            first days for new hires.
          </p>
          <div className="hrm__hiring-learn-more mt-6">
            <p className="text-[#C55514B2] font-bold text-base lg:text-xl flex items-center">
              Learn More
              <HiArrowNarrowRight
                color="rgba(197, 85, 20, 0.7)"
                size={20}
                className="ml-1"
              />
            </p>
          </div>
        </div>
        <div className="hrm__hiring-image flex-1">
          <div className="hrm__hiring-insights-box bg-[#C55514B2] shadow-md rounded-lg w-full py-2 px-6 mb-8">
            <span className="font-medium text-base lg:text-xl text-white">
              Insights
            </span>
            <p className="font-bold text-base lg:text-xl text-white">
              Performance Tracker
            </p>
          </div>
          <img className="w-full" src={Insights} alt="weekly" />
        </div>
      </div>
    </div>
  );
};

export default Hiring;
