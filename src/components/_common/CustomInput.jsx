import React from "react";

const CustomInput = ({ label = '', type = 'text', placeholder = '', name = '', onChange = ()=> undefined  , register, ...extraProps}) => {
  return (
    <div>
      {label && <label className="font-medium">{label}</label>}
      <input
        className="h-[56px] w-full border-2 rounded-lg shadow-sm px-6 my-2"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
         {...(register && { ...register(name) })}
         {...extraProps}
      />
      
    </div>
  );
};

export default CustomInput;
