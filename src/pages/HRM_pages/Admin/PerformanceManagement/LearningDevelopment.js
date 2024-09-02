import React, { useState } from "react";
import AvatarPill from "../../../../components/HRM_components/Admin/performance/learningAndDevlopment/AvartarPill";
import StarRating from "../../../../components/HRM_components/Admin/jobs/StartRating";
import NewCourses from "../../../../components/HRM_components/Admin/performance/learningAndDevlopment/NewCourses";
import ActiveCourses from "../../../../components/HRM_components/Admin/performance/learningAndDevlopment/ActiveCourses";
import Archive from "../../../../components/HRM_components/Admin/performance/learningAndDevlopment/Archive";
import SturdyRequest from "../../../../components/HRM_components/Admin/performance/learningAndDevlopment/SturdyRequest";
import { BreadCrumbs, Button } from "../../../../components/HRM_components";

const LearningDevelopment = () => {
  const breadcrumbItems = ["Performance", "Learning & Development"];
  const [pageIndex, setPageIndex] = useState(0);
  const image = process.env.PUBLIC_URL;

  const avatar = [
    { src: image + "/images/HRM/avatar1.png", alt: "Avatar 1" },
    { src: image + "/images/HRM/avatar2.png", alt: "Avatar 2" },
    { src: image + "/images/HRM/avatar3.png", alt: "Avatar 3" },
    { src: image + "/images/HRM/avatar4.png", alt: "Avatar 4" },
  ];

  const topCardContent = [
    {
      title: "New Courses",
      number: 1,
      component: (
        <div className=" text-gurugeeks-dark-600">
          <p>Added 8 minutes ago</p>
          <p className="text-xs">8 minutes ago</p>
        </div>
      ),
    },
    {
      title: "Active Courses",
      number: 4,
      component: (
        <div className="flex gap-x-3 h-full items-center ">
          <p className=" text-gurugeeks-dark-600">Employees Studying</p>
          <AvatarPill avatars={avatar} />
        </div>
      ),
    },
    {
      title: "Archive",
      number: 32,
      component: <StarRating />,
    },
    {
      title: "Study Request",
      number: 0,
      component: <p className=" text-gurugeeks-dark-600">No Request</p>,
    },
  ];

  const pageOutput = () => {
    switch (pageIndex) {
      case 0:
        return (
          <div>
            <NewCourses />
          </div>
        );
      case 1:
        return (
          <div>
            <ActiveCourses />
          </div>
        );
      case 2:
        return (
          <div>
            <Archive />
          </div>
        );
      case 3:
        return (
          <div>
            <SturdyRequest />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      {/* <Button
        size={"sm"}
        color="secondary"
        className="text-orange-700 font-bold"
      >
        Export Data
      </Button> */}
      <main>
        <div className="flex w-full justify-between items-center my-6 px-6 gap-x-4">
          {topCardContent.map(({ title, number, component }, index) => (
            <div
              onClick={() => {
                setPageIndex(index);
              }}
              className="w-full"
              key={index}
            >
              <div
                className={`${
                  pageIndex === index
                    ? "border-[#EF831E]"
                    : "border-transparent"
                } p-4 h-[130px] w-full border-2  bg-white rounded-lg cursor-pointer hover:border-2 hover:border-[#ef831e62]`}
              >
                <div className="flex h-[50%] justify-between text-xl font-medium capitalize">
                  <h1>{title}</h1>
                  <h1>{number}</h1>
                </div>
                <div className="h-[50%] flex items-center">{component}</div>
              </div>
            </div>
          ))}
        </div>
        <div>{pageOutput()}</div>
      </main>
    </div>
  );
};

export default LearningDevelopment;
