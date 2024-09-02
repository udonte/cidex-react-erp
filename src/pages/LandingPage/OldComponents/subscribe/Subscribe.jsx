import React from "react";
import Logo from "../../../../assets/logo.png";

const Subscribe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-LandingPage_bg border-b border-white md:py-16 md:px-24 lg:gap-y-4  py-16 px-8">
      <div className="hrm__subscribe-content flex flex-col gap-4 mr-16">
        <div className="hrm__subscribe-company flex items-center">
          <img src={Logo} alt="logo" width={40} />
          <h2 className="font-normal text-base leading-6 text-gray-800 ml-1">
            Gurugeeks
          </h2>
        </div>
        <p className="font-normal text-base leading-6 text-gray-700">
          Gurugeeks Royalty is a multinational conglomerate company which offers
          solutions in the area of IT/Telecoms.
        </p>
      </div>

      <div className="w-full flex lg:flex-row my-4">
        <input
          type="email"
          placeholder="Your Email Address"
          className="flex-2 w-full min-h-12 font-normal text-lg leading-6 border border-gray-400 p-4 outline-none text-gray-600 rounded-l-md"
        />
        <button
          type="button"
          className="flex-1 w-full min-h-12 font-normal text-[8px] bg-gradient-to-r from-orange-400 to-yellow-500 text-white cursor-pointer outline-none border-none rounded-r-md px-9"
        >
          Get free demo
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
