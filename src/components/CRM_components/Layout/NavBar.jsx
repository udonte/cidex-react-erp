import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiBell, BiMenu } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
// import logo from "../../assets/index";
// import { selectUserInfo } from "../../../../features/auth/auth.selector";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const user = useSelector(selectUserInfo);
  const [showDropMan, setShowDropDown] = useState(false);

  // const handleToggle = () => {
  //   dispatch(toggleSidebar());
  // };
  return (
    <div className=" relative bg-white px-6 h-16 w-full flex justify-between items-center border-b border-gray-200 shadow-md">
      <div className="flex items-center">
        <div className="h-[34px] w-[50px]">
          {/* <img className="" src={logo} alt="Logo" /> */}
        </div>
        <div className="ml-[200px]">Title</div>
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <div
          onClick={() => {
            setShowDropDown(!showDropMan);
          }}
          className="h-8 w-8 border-2 rounded-md text-gurugeeks-text text-[22px] justify-center items-center flex hover:border-gurugeeks-grayDark-100"
        >
          <BiMenu />
        </div>
        <div className="h-8 w-8 border-2 rounded-md text-gurugeeks-text text-[22px] justify-center items-center flex">
          <BiBell />
        </div>
        {showDropMan ? (
          <div className="absolute top-[60px] border bg-white h-[100px] w-[200px] rounded-md shadow-lg flex justify-between items-center p-3">
            <Link to="/">
              <div className="border-2 p-2 rounded-lg hover:border-gurugeeks-orange-300 cursor-pointer">
                <p className="text-[25px] font-bold text-gurugeeks-orange-300 ">
                  HRM
                </p>
              </div>
            </Link>
            <Link to="/CRM">
              <div className="border-2 p-2 rounded-lg hover:border-green-500 cursor-pointer">
                <p className="text-[25px] font-bold text-green-500 ">CRM</p>
              </div>
            </Link>
          </div>
        ) : null}

        <div className="flex justify-center items-center gap-x-3">
          <div className="h-8 w-8 border-2 rounded-md text-gurugeeks-text text-[22px] justify-center items-center flex">
            <FaUser />
          </div>
          <div>
            {/* <p className="font-bold text-gurugeeks-text">
              {user?.company_name}
            </p> */}
            <p className="font-semibold text-[12px] text-gurugeeks-text-2">
              HR Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
