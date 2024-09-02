import React from "react";
// import ChatClose from "../../../../assets/landingPage/chat.png";
// import ChatOpen from "../../../../assets/landingPage/chat-close.png";
// import ChatBg from "../../../../assets/landingPage/chat-bg.png";
import { ImInfinite } from "react-icons/im";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  
  // const [showChat, setShowChat] = useState(false);

  // const toggleChatVisibility = () => {
  //   setShowChat(!showChat);
  // };


  return (
    <section className="py-10">
      <div className="flex justify-center items-center w-full ">
        <div className="w-fit p-3 text-right">
          <p className="text-xs font-light">
            2023 Gurugeeks. All rights reserved.
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
      {/* <div className={ `right-14 bottom-52 ${showChat ? " " : "hidden" } fixed shadow-2xl w-[380px] h-[320px] `}>
        <div className=" bg-gurugeeks-green-600 px-8 py-4 rounded-t-[15px]">
          <h1 className="font-normal text-md text-white  "> Chat with Exceed Support</h1>
        </div>

        <div style={{backgroundImage:`url(${ChatBg})`}} className=" h-full rounded-b-[15px] bg-cover bg-no-repeat "></div>
      </div> */}

      {/* Hiding for now */}
      {/* <button
      type="button"
      onClick={toggleChatVisibility}
      
      className="bottom-14 right-14 fixed">
       {showChat ? (
            <img src={ChatClose} alt="chat icon" />
       ):(<img src={ChatOpen} alt="chat icon" /> )
       }
      </button> */}
    </section>
  );
};

export default Footer;
