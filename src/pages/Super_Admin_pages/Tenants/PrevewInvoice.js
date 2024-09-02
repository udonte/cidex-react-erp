import React, { useState } from "react";
import exceedLogo from "../../../assets/exceed.png";
import { MiddleModalContainer } from "../../../components/SuperAdmin_components";
import { FaCheck } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { Button } from "../../../components/HRM_components";

const PreviewInvoice = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("naira");
  const [currentPlan, setCurrentPlan] = useState(false);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleChoosePlan = () => {
    setCurrentPlan(!currentPlan); // Toggle the state
  };

  const plan = {
    name: "Premium Plan",
    audience: "For Start-Ups / Small Businesses",
    amount: {
      naira: "25000",
      dollar: "70",
      pounds: "55",
    },
    description: "Manage Your team and capture sales.",
    user_size: "(1-10 Users)",
    features: [
      "Unlimited projects",
      "Team collaboration tools",
      "Priority customer support",
      "Advanced analytics",
      "Custom branding",
    ],
  };

  return (
    <MiddleModalContainer title="Preview Plan">
      <div className="p-8">
        {/* container */}
        <div className="flex items-center gap-8 ">
          {/* card */}
          <div className="w-[400px] shadow-xl border border-orange-700 border- rounded-lg p-2 ">
            <div className=" flex flex-col gap-4 px-4 py-2">
              {/* price header */}
              <div className="flex items-center gap-4">
                <h2 className="font-bold text-orange-700 text-lg">
                  {plan.name}
                </h2>
                <span className="text-xs text-gray-400">{plan.audience}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className={`border-2 rounded-md py-1 px-2 text-xs ${
                    selectedCurrency === "naira"
                      ? "border-[1px] border-orange-700 text-orange-700"
                      : ""
                  }`}
                  onClick={() => handleCurrencyChange("naira")}
                >
                  NGN
                </button>
                <button
                  className={`border-2 rounded-md py-1 px-2 text-xs ${
                    selectedCurrency === "dollar"
                      ? "border-[1px] border-orange-700 text-orange-700"
                      : ""
                  }`}
                  onClick={() => handleCurrencyChange("dollar")}
                >
                  USD
                </button>
              </div>
              <span className="font-bold text-2xl text-gray-700">
                {plan.amount[selectedCurrency]}
                <span className="font-normal text-gray-400 text-xs">
                  /month
                </span>
              </span>
              <div>
                <p className="text-gray-400">{plan.description}</p>
                <p className="text-gurugeeks-orange-700 text-sm">
                  {plan.user_size}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button color={"gray"}>Start Free Trial</Button>
                <Button>Subscribe Now</Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-6 px-3 mb-4">
              <ul className="flex flex-col gap-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 pl-2">
                    <GiCheckMark color={"#CC3333"} />{" "}
                    <span className="text-sm font-light text-gray-500">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MiddleModalContainer>
  );
};

export default PreviewInvoice;
