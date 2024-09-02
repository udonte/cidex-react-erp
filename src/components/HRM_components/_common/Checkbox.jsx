import React from "react";
const Checkbox = ({ onClick, checked, name, className }) => {
  return (
    <div className={`z-30 mb-6 ${className}`}>
      <label className="container1">
        <input
          type="checkbox"
          checked={checked}
          onChange={onClick}
          className="text-center  bg-green-700 checked:text-green-400"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};


export default Checkbox;
