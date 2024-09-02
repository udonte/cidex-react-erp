import React from "react";
import { IoIosClose } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { LuFileLock } from "react-icons/lu";
import Spinner from "../../../../../components/_common/Spinner";
const ConfirmationModal = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
  action,
  isLoading,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-3/4 sm:w-1/2 md:w-1/3">
        <IoIosClose
          className="w-[30px] h-[30px] absolute right-5 mb-3 text-black font-bold bg-gray-200 rounded-xl cursor-pointer"
          onClick={onCancel}
        />
        <div className="mt-10 flex justify-center flex-col items-center">
          <div className="w-[80px] h-[80px]  bg-red-300 rounded-[50%] flex justify-center items-center">
            {action == "Delete" ? (
              <RiDeleteBin5Fill size={50} />
            ) : (
              <LuFileLock size={50} />
            )}
          </div>
          <h4 className="text-[14px] mt-4 text-gray-500 font-[400] text-center">
            {message}
          </h4>
        </div>
        <div className="absolute top-20 left-40 w-30% h-20% bg-blue-200"></div>
        <div className="flex justify-between gap-4 w-full mt-5">
          <button
            className="px-4 py-2 w-full bg-gray-200 text-black rounded hover:bg-gray-600"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 w-full bg-gurugeeks-orange-700 text-white rounded hover:bg-gurugeeks-orange-100"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-full text-center">
                <Spinner />
              </div>
            ) : (
              " Confirm"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
