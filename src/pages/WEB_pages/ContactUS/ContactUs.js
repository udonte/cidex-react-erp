import React from "react";
import Input from "../../../components/WEB_components/Input.jsx";
import Contact from "../../../assets/landingPage/Contact-us.png";
import Button from "../../../components/WEB_components/Button.jsx";
import { ImInfinite } from "react-icons/im";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Footer from "../LandingPage/Footer/Footer.js";

const ContactUs = () => {
  return (
    <div className="pt-[90px] ">
      <div className="flex sm:flex-col md:flex-col lg:flex-row px-40 w-full mt-20">
        <div className="p-4  w-[50%] ">
          <div className=" w-[400px]">
            <div className=" w-80">
              <h1 className="text-5xl text-left font-semi-bold">
                Get in touch with us
              </h1>
            </div>

            <div>
              <Input
                type="text"
                label="First Name"
                placeholder="Enter Your First"
              />

              <Input
                type="text"
                label="Last Name"
                placeholder="Enter Your First"
              />
              <Input
                type="email"
                label="Email Address"
                placeholder="Enter a valid email address"
              />
              <Input
                inputClassName="h-32 "
                type="text"
                label="Message"
                placeholder="enter your message here"
              />

              <Button className="w-full px-6 py-3 text-lg justify-center mt-5">
                {" "}
                Send message
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

export default ContactUs;
