import React from "react";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

const PasswordInput = ({label="Password", placeholder = '', name = 'password', value = '', onChange=()=> null , register, ...extraProps}) =>{
                const [showPassword, setShowPassword] = useState(false);
        const togglePasswordVisibility = () => setShowPassword(!showPassword);
        return (
                             <>
                                <label className="font-medium">{label}</label>
                                <div className="relative h-[56px] w-full pb-3">
                                        <input
                                                className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2"
                                                type={showPassword ? "text" : "password"}
                                                
                                                name={name}
                                                onChange={onChange}
                                                placeholder={placeholder ?? "**********"}
                                                {...extraProps}
                                                  {...(register && { ...register(name) })}


                                        />
                                        <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute h-full flex items-center justify-center top-2 right-2 text-gray-500 focus:outline-none"
                                        >
                                                {showPassword ? (
                                                        <BiHide className="text-[26px] " />
                                                ) : (
                                                        <BiShow className="text-[26px] " />
                                                )}
                                        </button>
                                </div>
                               
                        </>
        )
}

export default PasswordInput