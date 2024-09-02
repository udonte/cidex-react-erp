import React from "react";
import { RiPriceTag2Fill } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

const PricingPlan = () => {
  return (
    <div className="flex flex-col items-center ">
      <p className="bg-[#F9DEDC] rounded-[16px] p-[10px] font-medium text-base leading-5 text-center text-gray-700">
        Pricing Plans
      </p>

      <h2 className="font-semibold text-4xl leading-tight text-center tracking-tighter text-orange-400 mt-[20px]">
        Plans for all sizes
      </h2>
      <span className="font-normal text-[20px] leading-relaxed text-center text-gray-700 mt-[20px]">
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </span>
      <div className="flex items-center gap-2 mt-[40px]">
        <div className="flex justify-end items-center bg-[#E98862] rounded-[12px] w-[44px] h-[22px]">
          <div className="rounded-[50%] shadow-md bg-white w-[22px] h-[22px]"></div>
        </div>
        <p className="font-medium text-base leading-6 text-gray-700">
          Annual pricing (save 20%)
        </p>
      </div>

      <div className="flex items-center md:py-20 md:px-18 lg:gap-y-4  py-16 px-8">
        <div className="flex justify-center items-start gap-6 md:gap-8 md:flex-wrap lg:gap-6 flex-col md:flex-row">
          <div className="flex flex-col items-center justify-start w-full md:w-[280px] bg-white border-[1px] border-gray-200 shadow-lg rounded-[16px] p-8">
            <div>
              <RiPriceTag2Fill />
            </div>
            <p className=" font-semibold text-[20px] leading-7 text-[#C55514B2]">
              Basic Plan
            </p>
            <h2 className="font-semibold text-[36px] leading-[60px] text-center tracking-tighter text-gray-900">
              $10/month
            </h2>
            <span className="font-normal text-16 leading-24 text-center text-gray-500">
              Bill anually.
            </span>
            <div className="flex justify-center items-center gap-4 flex-col mt-[30px]">
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
            </div>
            <div className="bg-[#F9FAFB] p-6 w-full mt-[20px]">
              <button className="bg-[#C55514B2] border w-full border-[] shadow-[#1018280D] rounded-[8px] p-2 text-white">
                Get started
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-full md:w-[280px] bg-white border-[1px] border-gray-200 shadow-lg rounded-[16px] p-8">
            <div>
              <RiPriceTag2Fill />
            </div>
            <p className=" font-semibold text-[20px] leading-7 text-[#C55514B2]">
              Basic Plan
            </p>
            <h2 className="font-semibold text-[36px] leading-[60px] text-center tracking-tighter text-gray-900">
              $10/month
            </h2>
            <span className="font-normal text-16 leading-24 text-center text-gray-500">
              Bill anually.
            </span>
            <div className="flex justify-center items-center gap-4 flex-col mt-[30px]">
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
            </div>
            <div className="bg-[#F9FAFB] p-6 w-full mt-[20px]">
              <button className="bg-[#C55514B2] border w-full border-[] shadow-[#1018280D] rounded-[8px] p-2 text-white">
                Get started
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-full md:w-[280px] bg-white border-[1px] border-gray-200 shadow-lg rounded-[16px] p-8">
            <div>
              <RiPriceTag2Fill />
            </div>
            <p className=" font-semibold text-[20px] leading-7 text-[#C55514B2]">
              Basic Plan
            </p>
            <h2 className="font-semibold text-[36px] leading-[60px] text-center tracking-tighter text-gray-900">
              $10/month
            </h2>
            <span className="font-normal text-16 leading-24 text-center text-gray-500">
              Bill anually.
            </span>
            <div className="flex justify-center items-center gap-4 flex-col mt-[30px]">
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
            </div>
            <div className="bg-[#F9FAFB] p-6 w-full mt-[20px]">
              <button className="bg-[#C55514B2] border w-full border-[] shadow-[#1018280D] rounded-[8px] p-2 text-white">
                Get started
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-full md:w-[280px] bg-white border-[1px] border-gray-200 shadow-lg rounded-[16px] p-8">
            <div>
              <RiPriceTag2Fill />
            </div>
            <p className=" font-semibold text-[20px] leading-7 text-[#C55514B2]">
              Basic Plan
            </p>
            <h2 className="font-semibold text-[36px] leading-[60px] text-center tracking-tighter text-gray-900">
              $10/month
            </h2>
            <span className="font-normal text-16 leading-24 text-center text-gray-500">
              Bill anually.
            </span>
            <div className="flex justify-center items-center gap-4 flex-col mt-[30px]">
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
              <div className="flex items-start gap-2">
                <AiOutlineCheck className="bg-[#F9DEDC] rounded-[50%] w-[24px] h-[24px] p-[4px]" />
                <p className="font-normal text-16 leading-24 text-gray-500">
                  Access to all basic features
                </p>
              </div>
            </div>
            <div className="bg-[#F9FAFB] p-6 w-full mt-[20px]">
              <button className="bg-[#C55514B2] border w-full border-[] shadow-[#1018280D] rounded-[8px] p-2 text-white">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
