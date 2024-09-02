import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

const PricePlanCard = ({ name, audience, amount, description, features }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("naira");
  const [currentPlan, setCurrentPlan] = useState(false);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleChoosePlan = () => {
    setCurrentPlan(!currentPlan); // Toggle the state
  };

  return (
    <div className="w-[400px] shadow-xl rounded-lg p-2 border-[1px] border-gray-100">
      <div className=" flex flex-col gap-3 px-6 py-4">
        {/* price header */}
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-orange-700 text-lg">{name}</h2>
          <span className="text-xs text-gray-400">{audience}</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            className={`border-2 rounded-md py-1 px-2 ${
              selectedCurrency === "naira"
                ? "border-[1px] border-orange-700 text-orange-700"
                : ""
            }`}
            onClick={() => handleCurrencyChange("naira")}
          >
            NGN
          </button>
          <button
            className={`border-2 rounded-md py-1 px-2 ${
              selectedCurrency === "dollar"
                ? "border-[1px] border-orange-700 text-orange-700"
                : ""
            }`}
            onClick={() => handleCurrencyChange("dollar")}
          >
            USD
          </button>
          <button
            className={`border-2 rounded-md py-1 px-2 ${
              selectedCurrency === "pounds"
                ? "border-[1px] border-orange-700 text-orange-700"
                : ""
            }`}
            onClick={() => handleCurrencyChange("pounds")}
          >
            GBP
          </button>
        </div>
        <span className="font-bold text-xl text-gray-700">
          {amount[selectedCurrency]}
        </span>
        <p className="text-gray-400">{description}</p>
        <button
          className={`rounded-md px-4 py-2 text-sm ${
            currentPlan
              ? "bg-orange-700 text-gray-100 text-sm"
              : "border-[1px] border-gray-500"
          }`}
          onClick={handleChoosePlan}
        >
          {currentPlan ? "Current Plan" : "Upgrade Plan"}
        </button>
      </div>
      <div className="w-full border-gray-300 border-b-[1px]"></div>
      <div className="flex flex-col gap-2 p-6">
        <p className="font-bold text-sm text-gray-500">Key Features</p>
        <ul className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 pl-2">
              <GiCheckMark color={"orange"} />{" "}
              <span className="text-sm font-light text-gray-500">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricePlanCard;
