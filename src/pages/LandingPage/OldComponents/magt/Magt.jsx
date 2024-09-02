import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Tasks from '../../../../assets/landingPage/tasks.png';
// import Analytics from '../../../assets/landingPage/analytics.PNG';

const magt = () => {
  return (
    <div className="flex flex-col gap-10 md:py-24 md:px-24 md:gap-y-32 py-16 px-8 bg-green-200" id="management">
  <div className="flex flex-col lg:flex-row">
    <div className="hrm__mgt-image sm:mr-0 lg:mr-10 p-10 bg-gray-50 rounded-lg ">
      <img src={Tasks} alt="meeting" />
    </div>
    <div className="hrm__mgt-content mr-0 flex-1 flex flex-col items-start justify-start gap-[20px]">
      <h3 className="font-bold text-2xl lg:text-4xl text-[#C55514B2]">
        Customer Information Management
      </h3>
      <p className="font-normal text-base lg:text-xl text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim nec, proin faucibus nibh et sagittis a.
        Lacinia purus ac amet pellentesque aliquam enim.
      </p>
      <button
        className="bg-[#C55514B2] rounded-lg text-white text-base lg:text-xl py-2 px-4 outline-none focus:outline-none"
        type="button"
      >
        Learn More
      </button>
    </div>
  </div>
  <div className="flex flex-col lg:flex-row ">
    <div className="hrm__mgt-content sm:mr-0 lg:mr-10 flex-1 flex flex-col items-start justify-start gap-4">
      <h3 className="font-bold text-2xl lg:text-4xl text-[#C55514B2]">
        Sales Process Management
      </h3>
      <p className="font-normal text-base lg:text-xl text-gray-800 my-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim nec, proin faucibus nibh et sagittis a.
        Lacinia purus ac amet pellentesque aliquam enim.
        <div className="hrm__mgt-learn-more my-8">
        <p className="text-[#C55514B2] font-bold text-base lg:text-xl flex items-center">
          Learn More <HiArrowNarrowRight className="ml-1" color="rgba(197, 85, 20, 0.7)" size={20} />
        </p>
      </div>
      </p>
    </div>

    <div className="hrm__mgt-image p-10 bg-gray-50 rounded-lg">
      <img src={Tasks} alt="meeting" />
    </div>
  </div>
</div>

  )
}

export default magt