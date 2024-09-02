import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import SubscriptionForm from "./features/SubscriptionForm";
import { MdMoreVert } from "react-icons/md";
import DotOptions from "../../../components/HRM_components/_common/DotOptions";
import {
  FaEdit,
  FaEye,
  FaFileAlt,
  FaNotesMedical,
  FaTrash,
} from "react-icons/fa";
import DotOptionButton from "../../../components/_common/DotOptionButton";

const AdminSettings = () => {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [showAllSubscriptions, setShowAllSubscriptions] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);

  const handleShowSubscriptions = () => {
    setShowAllSubscriptions(false);
    setShowSubscriptionForm(true);
  };

  const handleCreatePlan = (formData) => {
    // Add the new subscription to the list
    setSubscriptions([...subscriptions, formData]);
    // Show all subscriptions
    setShowAllSubscriptions(true);
    setShowSubscriptionForm(false);
  };

  const subOptions = [
    { text: "View Plan", icon: <FaEye />, callback: () => {} },
    { text: "Edit Plan", icon: <FaEdit />, callback: () => {} },
    { text: "Publish Plan", icon: <FaFileAlt />, callback: () => {} },
    { text: "Delete Plan", icon: <FaTrash />, callback: () => {} },
  ];

  return (
    <div className="py-6 px-6">
      <div className="flex items-center justify-between bg-white p-6 rounded-md">
        <h1 className="font-bold text-[1.3rem]">Settings</h1>
      </div>
      <div className="border-b-gray-300 border w-full mt-8">
        <p className="border-b-orange-700 border-2 w-fit">Subscription</p>
      </div>
      <div className="mt-4">
        {/* All Subscription */}
        {showAllSubscriptions && (
          <div className="flex items-center gap-4 p-4">
            {/* add subscription */}
            <div className="border-dashed border border-gray-400 w-[200px] h-[150px] flex items-center justify-center gap-2 rounded-lg">
              <div
                className="flex flex-col justify-center items-center cursor-pointer  hover:text-gurugeeks-orange-700"
                onClick={handleShowSubscriptions}
              >
                <IoIosAddCircleOutline size={40} color={"#9ca3af99"} />
                <p className="text-xs">Add Plan</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* List of subscriptions */}
              {subscriptions.map((subscription, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 shadow hover:bg-orange-50 bg-white py-2 px-4 rounded-lg w-[200px] h-[150px] "
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-orange-700">
                      {subscription.tier_name}
                    </p>
                    <div className="cursor-pointer hover:text-orange-700">
                      {/* <DotOptions
                        dotOptions={subOptions}
                    
                      /> */}
                      <MdMoreVert />;
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">
                    <p>{subscription.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-xs">
                    <p className="border border-gray-400 py-1 px-2 rounded">
                      {subscription.type_of_plan}
                    </p>
                    {/* <p className="border border-gray-400 py-1 px-2 rounded">
                      Yearly
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Subscription Form */}
        {showSubscriptionForm && (
          <SubscriptionForm onCreatePlan={handleCreatePlan} />
        )}
      </div>
    </div>
  );
};

export default AdminSettings;
