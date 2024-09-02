import React from "react"

const LoginDescription = () => {
        return (
                <div className="flex justify-between items-start mb-10">
                        <div className="flex flex-col space-y-3 h-full">
                                <h1 className="text-[24px] font-bold">
                                        Welcome back to EXCEED!
                                </h1>
                                <h2 className="text-gurugeeks-dark-500">
                                        Enter your details to Sign in!{" "}
                                </h2>
                        </div>
                        <img
                                className="mt-3"
                                src={process.env.PUBLIC_URL + "/images/exceed_logo.png"}
                                alt="companySvgLogo"
                        />
                </div>
        )
}

export default LoginDescription