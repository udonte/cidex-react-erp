import React from 'react';
import meeting from '../../../../assets/landingPage/meeting.png';

const Stat = () => {
  return (
    <div className="hrm__stat flex flex-col md:py-16 md:px-24 lg:gap-y-4  py-16 px-8" id="home">
  <div className="hrm__stat-top-content">
    <span className="small__text font-semibold text-base lg:text-lg text-[#C55514B2]">
      Launch faster
    </span>
    <h2 className="font-semibold text-xl lg:text-3xl text-gray-900">
      Management software that brings it all together
    </h2>
    <p className="font-normal text-base lg:text-xl text-gray-600 mt-4">
      Whether you’ve got a small team or a fully distributed workforce around the world, our software gives you a single system to run everything you need to hire, pay, and manage your team.
    </p>
  </div>

  <div className="flex lg:flex-row flex-col">
    <div className="flex-1 flex justify-center md:justify-start items-center flex-wrap mt-8 md:mt-0 gap-2 md:gap-8 lg:gap-16 lg:mr-16">
      <div className="flex items-center flex-col gap-3 w-full md:w-40 h-40 lg:w-50 lg:h-50 text-center">
        <h3 className="font-semibold text-3xl lg:text-4xl text-[#C55514B2]">
          4,000+
        </h3>
        <p className="font-medium text-base lg:text-[18px] text-gray-900">
          Global customers
        </p>
        <div className="stat__description font-normal text-[0.7rem] lg:text-[1rem] text-gray-600">
          We’ve helped over 4,000 amazing global companies.
        </div>
      </div>
      <div className="flex items-center flex-col gap-3 w-full md:w-40 h-40 lg:w-50 lg:h-50 text-center">
        <h3 className="font-semibold text-3xl lg:text-4xl text-[#C55514B2]">
          4,000+
        </h3>
        <p className="font-medium text-base lg:text-[18px] text-gray-900">
          Global customers
        </p>
        <div className="stat__description font-normal text-[0.7rem] lg:text-[1rem] text-gray-600">
          We’ve helped over 4,000 amazing global companies.
        </div>
      </div>
      <div className="flex items-center flex-col gap-3 w-full md:w-40 h-40 lg:w-50 lg:h-50 text-center">
        <h3 className="font-semibold text-3xl lg:text-4xl text-[#C55514B2]">
          4,000+
        </h3>
        <p className="font-medium text-base lg:text-[18px] text-gray-900">
          Global customers
        </p>
        <div className="stat__description font-normal text-[0.7rem] lg:text-[1rem] text-gray-600">
          We’ve helped over 4,000 amazing global companies.
        </div>
      </div>
      <div className="flex items-center flex-col gap-3 w-full md:w-40 h-40 lg:w-50 lg:h-50 text-center">
        <h3 className="font-semibold text-3xl lg:text-4xl text-[#C55514B2]">
          4,000+
        </h3>
        <p className="font-medium text-base lg:text-[18px] text-gray-900">
          Global customers
        </p>
        <div className="stat__description font-normal text-[0.7rem] lg:text-[1rem] text-gray-600">
          We’ve helped over 4,000 amazing global companies.
        </div>
      </div>
    </div>

    <div className="hrm__stat-image flex-1 flex justify-center items-center">
      <img className="w-full" src={meeting} alt="meeting" />
    </div>
  </div>
</div>

  )
}

export default Stat