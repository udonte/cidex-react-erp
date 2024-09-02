import React from "react";
import { FaCalendar } from "react-icons/fa";
import { MdAddTask, MdOutlineEventNote, MdOutlineStar } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
// import {
//   CompanyDirectory,
//   Expenses,
//   FAQ,
//   MyProfile,
//   OrganizationChat,
//   RequestTimeOff,
//   Timesheet,
//   Trainings,
// } from "../../../../assets";

// const WidgetCard = ({ icon, title, children, className }) => {
//   return (
//     <div className={`bg-white rounded shadow-md h-fit w-full ${className}`}>
//       <div className="h-[75px] border-b-2 flex items-center px-3 gap-x-3">
//         {icon}
//         <p className=" text-[20px] font-semibold">{title}</p>
//       </div>
//       <div>{children}</div>
//     </div>
//   );
// };

// const shortcuts = [
//   { icon: RequestTimeOff, text: "Request Time off" },
//   { icon: OrganizationChat, text: "Organization chart" },
//   { icon: CompanyDirectory, text: "Company Directory" },
//   { icon: Trainings, text: "Trainings" },
//   { icon: MyProfile, text: "My Profile" },
//   { icon: FAQ, text: "FAQ" },
//   { icon: Timesheet, text: "Fill Timesheet" },
//   { icon: Expenses, text: "Expenses" },
// ];

const Dashboard = () => {
  return (
    <div className="p-6">
      Dashboard
      {/* <div className="grid grid-cols-3 gap-6">
        <WidgetCard
          className={"col-span-3"}
          icon={
            <MdOutlineStar className="text-[24px] text-[#B8541B] font-semibold" />
          }
          title={"Shortcuts"}
        >
          <div className="grid grid-cols-4 p-6 gap-10">
            {shortcuts.map((item, index) => (
              <div className="flex items-center gap-x-3 justify-center col-span-1 w-[210px] h-[60px] border rounded">
                <img className="" src={item.icon} alt={item.text} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </WidgetCard>
        
        <WidgetCard
          className={"col-span-1"}
          icon={
            <MdAddTask className="text-[24px] text-[#B8541B] font-semibold" />
          }
          title={"Task"}
        >
          <div className="p-3 space-y-2">
            {Array(3)
              .fill()
              .map(() => (
                <div className="border rounded h-[140px] w-full p-3 space-y-2">
                  <div className="p-1 w-fit rounded font-semibold bg-[#CBE9FC]">
                    No due date
                  </div>
                  <p className="text-[18px] font-semibold">
                    Please select equipment for your new hire
                  </p>
                  <div>
                    <p className=" text-gurugeeks-text">Name</p>
                    <p>Phillipe Betrand</p>
                  </div>
                </div>
              ))}
          </div>
        </WidgetCard>
        <WidgetCard
          className={"col-span-1"}
          icon={
            <TfiAnnouncement className="text-[24px] text-[#B8541B] font-semibold" />
          }
          title={"Announcement"}
        >
          {Array(4)
            .fill()
            .map(() => (
              <div className="px-6 py-4 border-b-2">
                <p className="font-semibold">Let’s get moving</p>
                <p className="text-sm">
                  Encouraging all employees to keep working...
                </p>
                <p className=" text-[#3C59E7]">11 Aug 4;30 pm</p>
              </div>
            ))}
        </WidgetCard>
        <WidgetCard
          className={"col-span-1"}
          icon={
            <MdOutlineEventNote className="text-[24px] text-[#B8541B] font-semibold" />
          }
          title={"Upcoming Event"}
        >
          {Array(3)
            .fill()
            .map(() => (
              <div className="px-6 py-4 border-b-2">
                <p className=" text-[#3C59E7] mb-2">Find ways to give back</p>
                <p className="text-lg">Nov 21 - Jan 31</p>
                <div className="flex items-center gap-x-2 text-[#3C59E7]">
                  <FaCalendar />
                  <p>Add to calendar</p>
                </div>
              </div>
            ))}
          <div className="px-6 py-4 border-b-2">
            <div className="flex items-center justify-end gap-x-2 text-[#3C59E7]">
              <FaCalendar />
              <p>Add to calendar</p>
            </div>
          </div>
        </WidgetCard>
        <WidgetCard className={"col-span-1"} title={"Trainings"}>
          {Array(4)
            .fill()
            .map(() => (
              <div className="p-6 border-b">
                <p>Gurugeeks work from home policy</p>
                <div className="flex items-center gap-x-2 text-[#3C59E7]">
                  <FaCalendar />
                  <p>Due Aug 21,2023</p>
                </div>
              </div>
            ))}
        </WidgetCard>
        <WidgetCard className={"col-span-1"} title={"New Hires"}></WidgetCard>
        <WidgetCard className={"col-span-1"} title={"Leave Report"}>
          {Array(4)
            .fill()
            .map(() => (
              <div className="p-6 border-b">
                <div className="flex items-center gap-x-2 text-[#3C59E7]">
                  <FaCalendar />
                  <p>Sick Leave</p>
                </div>
                <p>Available 30 Days</p>
              </div>
            ))}
          <div>
            <div className="flex items-center justify-center p-5 gap-x-2 text-[#3C59E7]">
              <FaCalendar />
              <p>Request Time off</p>
            </div>
          </div>
        </WidgetCard>
        <WidgetCard
          className={"col-span-1"}
          title={"Upcoming Event"}
        ></WidgetCard>
        <WidgetCard
          className={"col-span-2"}
          title={"Upcoming Event"}
        ></WidgetCard>
      </div>
      <div></div>
      <div></div> */}
    </div>
  );
};

export default Dashboard;
