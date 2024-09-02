import React from "react";
import { useDispatch } from "react-redux";
import { FaChevronRight } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { closeAllModals } from "../../../../features/common/modals/modals.slice";

const Modal = ({ isOpen, title, children, width = "lg" }) => {
  const widths = {
    sm: "w-[40%]",
    md: "w-1/2",
    lg: "w-[817px]",
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
        className={`fixed inset-y-0 right-0 z-50 ${widths[width]} bg-white shadow-md overflow-y-auto`}
        style={modalStyle}
      >
        {/* Header Section */}

        <div className="bg-white rounded-xl px-10  z-50 ">
          <div className="flex justify-between items-center py-6 border-b-[1px]">
            <div className="w-full">
              <h1 className="font-normal text-2xl">
                {title ? title : "Add Title"}
              </h1>
            </div>
            {/* <div
              className=" h-10 w-10 rounded-full z-50 bg-[#EFEFEF] flex items-center justify-center"
              onClick={closeModals}
            >
              <CgClose />
            </div> */}
          </div>
        </div>

        {/* -----//--------------------//------------------ */}

        {/* children Section */}
        <div className="h-full px-10 ">
          {/* Modal content goes here */}
          {children}
        </div>
        <div
          onClick={() => {
            dispatch(closeAllModals());
          }}
          className={`${
            isOpen
              ? " cursor-pointer flex justify-center items-center h-[40px] shadow-md w-[40px] bg-white absolute -left-[3%] top-[50%] rounded-full text-gurugeeks-text"
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

export default Modal;
