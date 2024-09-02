import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CRMBreadcrumbs = ({ breadcrumbItems }) => {
  return (
    <div className="flex items-center px-4 bg-white h-12">
      <div className="flex items-center gap-x-2 mr-2">
        <img
          src={process.env.PUBLIC_URL + "/images/HRM/LetterE.png"}
          alt="bread-crumb"
        />{" "}
        <FaChevronRight />
      </div>
      {breadcrumbItems?.map((item, index) => (
        <React.Fragment key={item}>
          {index > 0 && (
            <span className="mx-2">
              <FaChevronRight />
            </span>
          )}
          {index === breadcrumbItems.length - 1 ? (
            <span className="font-semibold">{item}</span>
          ) : (
            <a href="/" className="hover:underline">
              {item}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CRMBreadcrumbs;
