import React from "react";
import { useDispatch } from "react-redux";
import { FaChevronRight } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { closeAllModals } from "../../../../features/common/modals/modals.slice";

const SideModalContainer = ({ isOpen, title, children, width = "md" }) => {
  const widths = {
    sm: "w-[40%]",
    md: "w-1/2",
    lg: "w-[65%]",
  };
  const dispatch = useDispatch();
  const closeModals = () => {
    dispatch(closeAllModals());
  };
  const modalStyle = {
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.5s ease-in-out",
  };

  // const overlayStyle = {
  //   display: isOpen ? "visible" : "hidden",
  //   opacity: isOpen ? 1 : 0,
  //   transition: "opacity 0.5s ease-in-out",
  // };

  return (
    <div className="relative h-full w-full">
      <div
        className={`fixed inset-y-0 right-0 z-50 ${widths[width]}  bg-white shadow-md`}
        style={modalStyle}
      >
        <div className="bg-white rounded-xl z-50">
          <div className="flex justify-between items-center h-16 px-8 border-b-2">
            <div className="w-full">
              <h1 className="font-bold text-2xl">
                {title ? title : "Add Title"}
              </h1>
            </div>
            <div
              className=" h-10 w-10 rounded-full bg-[#EFEFEF] flex items-center justify-center"
              onClick={closeModals}
            >
              <CgClose />
            </div>
          </div>
        </div>
        <div className="h-full">
          {/* Modal content goes here */}
          {children}
        </div>
        <div
          onClick={() => {
            dispatch(closeAllModals());
          }}
          className={`${
            isOpen
              ? " cursor-pointer flex justify-center items-center h-[40px] w-[40px] bg-white absolute -left-[3%] top-[50%] rounded-full text-gurugeeks-text"
              : "hidden"
          }`}
        >
          <FaChevronRight />
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(closeAllModals());
        }}
        className={`inset-0 bg-black backdrop-blur fixed ${
          isOpen ? "block opacity-60  backdrop-blur" : "opacity-0 hidden -z-10"
        }`}
      ></div>
    </div>
  );
};

export default SideModalContainer;
