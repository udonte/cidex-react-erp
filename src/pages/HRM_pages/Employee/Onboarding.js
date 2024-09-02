import React from "react";
import FullNameTag from "../../../components/HRM_components/_common/FullNameTag";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import ProgressBar from "../../../components/HRM_components/_common/ProgressBar";
import { StatusPill } from "../../../components/HRM_components";

const Onboarding = () => {
  return (
    <div className="flex m-6 gap-x-6">
      <div className="w-[65%] space-y-6">
        <div className="h-[200px] bg-white w-full p-3">
          <h1 className=" font-medium text-lg my-3">Your Profile</h1>
          <FullNameTag size={"lg"} firstName="Fred" lastName="Boak" />
          <div className="pl-10 my-3">
            <p className="flex items-center gap-x-3 my-1">
              <IoMdMail className="text-[24px]" />
              Gbolahanaded@gurugeeksroyalty.biz
            </p>
            <p className="flex items-center gap-x-3 my-1">
              <FaPhone className="text-[24px]" /> +2346781097652
            </p>
          </div>
        </div>
        <div className="bg-white p-3">
          <h1 className="font-medium text-lg">Your onboarding progress</h1>
          <div className="flex items-center justify-start gap-x-2">
            <p className="text-sm">1/10</p>
            <div className="w-[140px] h-2">
              <ProgressBar data={5} completed={2} />
            </div>
          </div>
        </div>
        <div className="bg-white p-3">
          <h1 className="font-medium text-lg">Task to be Done</h1>
          <p className="text-sm">
            Below is the list of task you will need to complete as part of your
            onboarding journey.
          </p>
          <div>
            <div className="p-3">
              <h1 className="font-medium text-lg">Tasks</h1>
              <div className="p-3 border-2 rounded-md my-6">
                <StatusPill text={"New"} status={"active"} />
                <h1 className="my-3">Personal Details</h1>
              </div>
              <div className="p-3 border-2 rounded-md my-6">
                <StatusPill text={"New"} status={"active"} />
                <h1 className="my-3">Banking Details</h1>
              </div>
              <div className="p-3 border-2 rounded-md my-6">
                <StatusPill text={"New"} status={"active"} />
                <h1 className="my-3">Emergency Contact</h1>
              </div>
              <div className="p-3 border-2 rounded-md my-6">
                <StatusPill text={"New"} status={"active"} />
                <h1 className="my-3">About Me</h1>
              </div>
              <div className="p-3 border-2 rounded-md my-6">
                <StatusPill text={"New"} status={"active"} />
                <h1 className="my-3">Certificates</h1>
              </div>
              <div className="p-3 border-2 rounded-md my-6">
                <StatusPill text={"New"} status={"active"} />
                <h1 className="my-3"> Mandatory Trainings</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%]">
        <div className="">
          <h1 className=" font-medium text-lg">Get to know your colleageus</h1>
          <p className="text-sm">
            Here are a few people from your department so that you can get
            familiar with them prior to your first day
          </p>
          <div className="bg-white p-3 my-6 rounded-sm">
            <FullNameTag size={"lg"} firstName="Fred" lastName="Boak" />
            <div className="pl-10 my-3">
              <p className="flex items-center gap-x-3 my-1">
                <IoMdMail className="text-[24px]" />
                Gbolahanaded@gurugeeksroyalty.biz
              </p>
              <p className="flex items-center gap-x-3 my-1">
                <FaPhone className="text-[24px]" /> +2346781097652
              </p>
              <p className="my-2 text-gurugeeks-green-600">View Profile</p>
            </div>
          </div>
          <div className="bg-white p-3 my-6 rounded-sm">
            <FullNameTag size={"lg"} firstName="Fred" lastName="Boak" />
            <div className="pl-10 my-3">
              <p className="flex items-center gap-x-3 my-1">
                <IoMdMail className="text-[24px]" />
                Gbolahanaded@gurugeeksroyalty.biz
              </p>
              <p className="flex items-center gap-x-3 my-1">
                <FaPhone className="text-[24px]" /> +2346781097652
              </p>
              <p className="my-2 text-gurugeeks-green-600">View Profile</p>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h1 className=" font-medium text-lg">YOUR MANAGER</h1>
          <div className="bg-white p-3 my-6 rounded-sm">
            <FullNameTag size={"lg"} firstName="Fred" lastName="Boak" />
            <div className="pl-10 my-3">
              <p className="flex items-center gap-x-3 my-1">
                <IoMdMail className="text-[24px]" />
                Gbolahanaded@gurugeeksroyalty.biz
              </p>
              <p className="flex items-center gap-x-3 my-1">
                <FaPhone className="text-[24px]" /> +2346781097652
              </p>
              <p className="my-2 text-gurugeeks-green-600">View Profile</p>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h1 className=" font-medium text-lg">PEOPLE IN YOUR DEPARTMENT</h1>
          <div className="bg-white p-3 my-6 rounded-sm">
            <FullNameTag size={"lg"} firstName="Fred" lastName="Boak" />
            <div className="pl-10 my-3">
              <p className="flex items-center gap-x-3 my-1">
                <IoMdMail className="text-[24px]" />
                Gbolahanaded@gurugeeksroyalty.biz
              </p>
              <p className="flex items-center gap-x-3 my-1">
                <FaPhone className="text-[24px]" /> +2346781097652
              </p>
              <p className="my-2 text-gurugeeks-green-600">View Profile</p>
            </div>
          </div>
          <div className="bg-white p-3 my-6 rounded-sm">
            <FullNameTag size={"lg"} firstName="Fred" lastName="Boak" />
            <div className="pl-10 my-3">
              <p className="flex items-center gap-x-3 my-1">
                <IoMdMail className="text-[24px]" />
                Gbolahanaded@gurugeeksroyalty.biz
              </p>
              <p className="flex items-center gap-x-3 my-1">
                <FaPhone className="text-[24px]" /> +2346781097652
              </p>
              <p className="my-2 text-gurugeeks-green-600">View Profile</p>
            </div>
          </div>
          <div className="bg-white p-3 my-6 rounded-sm">
            <FullNameTag size={"lg"} firstName="Fred" lastName="Boak" />
            <div className="pl-10 my-3">
              <p className="flex items-center gap-x-3 my-1">
                <IoMdMail className="text-[24px]" />
                Gbolahanaded@gurugeeksroyalty.biz
              </p>
              <p className="flex items-center gap-x-3 my-1">
                <FaPhone className="text-[24px]" /> +2346781097652
              </p>
              <p className="my-2 text-gurugeeks-green-600">View Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
