import React from "react"
import Spinner from "../../../../components/_common/Spinner"
import Button from "../../../../components/WEB_components/Button"
import { useNavigate } from "react-router-dom";

const LoginFooter = ({ isLoading }) => {
        const navigate = useNavigate();
        return (
                <>
                        <div className="my-[40px]">
                                <Button
                                        className="mb-2 w-full h-[56px] flex justify-center items-center bg-gurugeeks-orange-500 hover:bg-gurugeeks-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                >
                                        {isLoading ? <Spinner /> : "Log in"}
                                </Button>{" "}
                                <p className=" text-gurugeeks-dark-600 text-center">
                                        Forgot Password?
                                        <span
                                                onClick={() => navigate("/web/forgot-password")}
                                                className="font-bold cursor-pointer text-gurugeeks-orangeLight hover:text-gurugeeks-orange-700 pl-4"
                                        >
                                                Reset password
                                        </span>
                                </p>
                        </div>
                        <p className=" text-gurugeeks-dark-600 text-center">
                                Don’t have an account yet?{" "}
                                <span
                                        onClick={() => navigate("/web/sign-up")}
                                        className="font-bold cursor-pointer text-gurugeeks-orangeLight hover:text-gurugeeks-orange-700 pl-4"
                                >
                                        Sign up
                                </span>
                        </p>
                </>
        )
}

export default LoginFooter