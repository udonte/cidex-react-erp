import React, { useState } from "react";
import {
  FaArchive,
  FaEnvelope,
  FaPhone,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import NameTag from "../../_common/NameTag";
import StatusPill from "../../_common/StatusPill";
import Button from "../../_common/Button/Button";
import CheckboxDropDown from "../../_common/CheckboxDropdown";
import Checkbox from "../../_common/Checkbox";
import DotOptions from "../../../HRM_components/_common/DotOptions";
import DotOptionButton from "../../../_common/DotOptionButton";

const EmployeeCard = ({
  is_active,
  name,
  department,
  date_hired,
  email,
  phone_number,
  designation,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dotOptions = [
    {
      text: "Delete",
      icon: <FaTrash />,
      callBack: (id) => {
        // dispatch(deleteAssetById(id))
        //   .unwrap()
        //   .then((payload) => {
        //     console.log(payload);
        //     if (payload.data.id && payload.data.created_at) {
        //       dispatch(closeAllModals());
        //       dispatch(fetchAssets());
        //     }
        //   });
      },
    },
    {
      text: "Archive",
      icon: <FaArchive />,
      callBack: (id) => {
        // navigate(`/HRM/asset/${encryptId(id)}`);
      },
    },
  ];

  const handleDotOptionClick = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div
      className={`w-[300px] max-h-[400px] py-6 px-8 m-6 hover:bg-gurugeeks-dark-100 cursor-pointer border-t-2 shadow-lg rounded-xl`}
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <Checkbox />
        </div>
        <div
          onClick={() => handleDotOptionClick()}
          className="relative w-[80px]"
        >
          <div className="flex items-center justify-center w-full">
            <button className="action-button flex justify-center items-center">
              <DotOptionButton />
            </button>
          </div>
          {showDropDown && (
            <div
              onMouseLeave={() => {
                setShowDropDown(!showDropDown);
              }}
              className="absolute z-50 top-[40px]  w-fit  min-w-max right-[4px] border rounded bg-white shadow-lg"
            >
              {dotOptions?.map((item, index) => (
                <div
                  onClick={() => {
                    // item.callBack(id);
                  }}
                  key={index}
                  className=" px-6 py-3 gap-x-3 w-full min-w-max  flex items-center shrink-0 hover:bg-gurugeeks-dark-100"
                >
                  {item.icon} <p className="text-left">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center flex-col items-center my-10">
        <div className="relative">
          <div className="h-[65px] w-[65px] flex items-center justify-center rounded-full bg-slate-400 shadow-lg">
            <NameTag firstName={name} size={"xl"} />
          </div>
          <div className="absolute z-[1px] bottom-2 left-6">
            <StatusPill
              text={is_active ? "active" : "inActive"}
              status={is_active ? "active" : "inActive"}
            />
          </div>
        </div>
        <p className=" text-xl capitalize mt-4 text-gray-700">
          {name ? name : "N/A"}
        </p>
        <p className="truncate text-gray-500">{email ? email : "N/A"}</p>
        <p className="text-gray-400 pb-2 border-b-[1px] w-full text-center">
          {designation ? designation : "N/A"}
        </p>
      </div>
      <div className="flex justify-between items-center pb-2">
        <div>
          <p className="text-xs text-gray-400">Date Hired</p>
          <p className="text-gray-600">{date_hired ? date_hired : "N/A"}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Phone</p>
          <p className="text-gray-600">{phone_number ? phone_number : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
