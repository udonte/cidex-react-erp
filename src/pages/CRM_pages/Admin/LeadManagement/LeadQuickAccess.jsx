import React from "react";

const LeadQuickAccess = () => {
  return (
    <div>
      <div className="bg-white border-y-2">
        <div className="p-6 flex justify-between items-center">
          {/* HEADER */}
          <div className="space-y-2 relative">
            <h1 className=" text-xl font-semibold">
              High Probability Conversion
            </h1>
            <div className="flex flex-col gap-x-2">
              <p className="font-semibold">
                4<span className="mx-2 text-xs font-normal">Results</span>
              </p>
              <div className=" bg-white flex items-center gap-2 text-xs py-2">
                <p>Privacy: </p>
                <FiUsers />
                <p className="text-xs flex items-center">Everyone</p>
              </div>
              <div className=" bg-white flex items-center gap-2 text-xs py-2">
                <p>Manager: </p>
                <img src={Avatar} alt="profile" width={20} />
                <p className="text-xs flex items-center">
                  Patrick Doe <span className="text-gray-400"> (Me)</span>
                </p>
                <p className="text-xs cursor-pointer text-gurugeeks-green-700 flex items-center">
                  change
                  <RiArrowDropDownLine />
                </p>
              </div>
            </div>
          </div>

          {/* EMAIL AND CALL */}
          <div className="flex gap-x-3 items-center">
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2 border-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <AiOutlineMail />
              <p>Email</p>
              <RiArrowDropDownLine size={25} />
            </div>
            <div className="flex items-center gap-2 rounded-full px-4 py-2 border-2 hover:bg-gray-200 cursor-pointer">
              <IoMdCall />
              <p>Call</p>
            </div>
            <div className="flex items-center gap-2 rounded-full cursor-pointer">
              <MdMoreHoriz size={25} />
            </div>
          </div>

          {showDropDown && (
            <div className="z-5 top-60 right-40 absolute w-[200px]">
              {" "}
              <CustomDropdown
                placeHolder="Send Actions"
                label=""
                options={emailActions}
                onSelect={handleDropDownSelect}
              />
            </div>
          )}

          {/* END OF EMAIL AND CALL */}
        </div>
      </div>
      {/* QUICK ACCESS */}
      <div className="flex flex-col items-start justify-center w-full bg-white gap-2">
        <div className="px-2 bg-white flex items-center py-2">
          <Checkbox /> <p className="text-xs">Quick Access</p>
        </div>
      </div>
      {/*END OF QUICK ACCESS */}
    </div>
  );
};

export default LeadQuickAccess;
