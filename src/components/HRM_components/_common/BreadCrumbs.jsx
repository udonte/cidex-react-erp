import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbItems }) => {
  const image = process.env.PUBLIC_URL;
  const navigate = useNavigate();
  return (
    <div className="flex items-center mb-2 px-4 bg-white h-12">
      <div className="flex items-center gap-x-2 mr-2">
        <img src={image + "/images/HRM/LetterE.png"} alt="bread-crumb" />
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
            <p onClick={() => navigate(-1)} className="hover:underline">
              {item}
            </p>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
