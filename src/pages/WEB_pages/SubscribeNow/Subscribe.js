import React,{useState} from "react";
import Input from "../../../components/WEB_components/Input.jsx";
import Contact from "../../../assets/landingPage/Contact-us.png";
import ExceedLogo from "../../../assets/landingPage/ExceedLogo.png";
import Button from "../../../components/WEB_components/Button.jsx";
import { ImInfinite } from "react-icons/im";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Footer from "../LandingPage/Footer/Footer"

import { BiHide, BiShow } from "react-icons/bi";


const Subscribe = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="pt-[90px] ">
      <div className="flex sm:flex-col md:flex-col lg:flex-row px-40 w-full mt-20">
        <div className="p-4  w-[50%] ">
          <div className=" w-[400px]">
            <div className=" flex justify-between items-center mb-10">
              <div>
                <h1 className="text-2xl text-left w-60 font-semibold mb-2">
                  Create an Account
                </h1>
                <p className="font-light"> And Let's started!</p>
              </div>
              

              <img src={ExceedLogo} alt="Our Logo"/>
              
            </div>

            <div>
              <Input
                type="text"
                label="Company Name"
                placeholder="Company's Name"
              />
              <Input
                type="email"
                label="Email Address"
                placeholder="Company's email"
              />
               <div>
                <label className="font-medium">Password</label>
                <div className="relative h-[56px] w-full">
                  <input
                    className="h-full w-full border-2 rounded-lg shadow-sm px-6 my-2"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    name="password"
                    
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
              </div>
              <Input
                type="password"
                label="confirm pssword"
                placeholder="***********"
              />

              <Button className="w-full px-6 py-3 text-lg justify-center mt-5">
                {" "}
               Sign Up
              </Button>

              
            </div>
          </div>
        </div>

        <div className=" p-4 w-[50%]">
          <div className="">
            <div>
              <div className="flex justify-center items-center w-full ">
                <div className="w-fit p-3 text-right">
                  <p className="text-xs font-light">
                    You can contact us on social media:
                  </p>
                </div>

                <div className="flex cursor-pointer gap-7 w-fit p-3">
                  <FaYoutube size={24} />
                  <ImInfinite size={24} />
                  <FaXTwitter size={24} />
                  <FaInstagram size={24} />
                  <FaLinkedinIn size={24} />
                </div>
              </div>

              <div className="w-fit p-3 text-right">
                <p className="text-xs font-light">
                  You can contact us on social media:{" "}
                  <a href="." className="text-green-400 underline text-bold">
                    Customersupport@exceed.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              {" "}
              <img src={Contact} alt="Contact us" />{" "}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Subscribe;
