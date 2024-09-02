import React from "react";

const CallToAction = () => {
  return (
    <div className="border border-white text-white flex items-center flex-col md:py-16 md:px-24 lg:gap-y-4  py-16 px-8 gap-8">
      <div className="hrm__cta-content">
        <h3 className="font-bold text-4xl lg:text-6xl text-orange-500 text-center">
          Get a demo on demand
        </h3>
        <p className="font-normal text-xl lg:text-2xl text-center text-gray-700">
          See how our HRM software can help you manage all your employee data
          and operations in one place, and easily grow your business from 2 to
          3,000 employees.
        </p>
      </div>
      <div className="hrm__cta-btn">
        <button className="bg-orange-500 rounded-lg font-semibold text-xl lg:text-2xl px-8 py-6 border-none outline-none cursor-pointer">
          Request a Live Demo
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
