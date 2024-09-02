import React from "react";
import { useDispatch } from "react-redux";
import { CgClose } from "react-icons/cg";
import { closeAllModals } from "../features/common/modals/modals.slice";

const MiddleModalContainer = ({ children, title = "Title" }) => {
  const dispatch = useDispatch();

  const closeModals = () => {
    dispatch(closeAllModals());
  };
  return (
    <div className="fixed inset-0    flex items-center justify-center">
      <div
        onClick={closeModals}
        className="-z-10 fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex justify-center items-center"
      ></div>
      <div className="bg-white rounded-xl z-50">
        <div className="flex justify-between items-center h-16 px-8 border-b-2">
          <div className="w-full">
            <h1 className="font-bold text-2xl">{title}</h1>
          </div>
          <div
            className=" h-10 w-10 rounded-full bg-[#EFEFEF] flex items-center justify-center"
            onClick={closeModals}
          >
            <CgClose />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MiddleModalContainer;
