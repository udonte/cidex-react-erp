import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm">
      {children}
    </div>
  );
};

export default Modal;
