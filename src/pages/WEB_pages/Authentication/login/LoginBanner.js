import React from "react"


const LoginBanner = () => {
        return (
                <>
                        <div className=" hidden md:block col-span-1 bg-[#EBEBEB] text-center">
                                <div
                                        className="flex items-end w-full h-full p-[70px] bg-no-repeat bg-center bg-cover"
                                        style={{ backgroundImage: `url('/images/login_img.png')` }}
                                >
                                        <div className="text-white text-left space-y-3">
                                                <p className=" font-bold text-xl">You are welcome to EXCEED</p>
                                                <p className=" font-light text-sm w-[90%]">
                                                        Utilize the awesome features of Exceed into optimizing your
                                                        businesses with seamless integration of CRM and HRM tools
                                                        simultaneously.
                                                </p>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default LoginBanner