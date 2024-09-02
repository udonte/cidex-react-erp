import React from "react";
import about_exceed from "../../../../assets/landingPage/about-us.png";


const AboutExceed = () => {
  return (
    <div className="my-32 px-32">
      <div className="flex">
        <div className="w-full pr-10">
          <h1 className="text-4xl font-bold mb-10">About Exceed</h1>
          <p className="font-light text-[16px] pr-16 text-landing-page-text">
            To build a successful business, it will require an effective
            management of your team and your customer relationships. Exceed
            Software Application provides a central place to drive up the speed
            of HR tasks and still manage customer interactions & your sales
            pipeline. <br /> <br /> Exceed combines the benefits of Human
            Resource Management and Customer Relationship Management (CRM) into
            one unified platform. <br /> <br /> Gurugeeks Exceed is designed to
            enhance the efficiency of your HR Team as well as your digital
            employee experience, yet building a stronger customer relationships
            with your clients, nuturing your potential and new customers leading
            to a brilliant customer service, retention and improved sales
            performance.
          </p>
        </div>
        <div className="w-full ">
          <img 
          src={about_exceed}
          alt="about Exceed"
          className="w-full"
          />
        </div>
      </div>
    </div>
  );
}; 

export default AboutExceed;
