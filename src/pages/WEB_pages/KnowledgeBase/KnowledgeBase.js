import React from "react";
import Exceed from "../../../assets/landingPage/ExceedLogo.png";
import KnowledgeBasebg from "../../../assets/landingPage/bg-KnowledgeBase.png";
import Button from "../../../components/WEB_components/Button.jsx";
import Input from "../../../components/WEB_components/Input.jsx";
import { IoSearch } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import Faq from "./../LandingPage/Faq/Faq.js";
import Footer from "./../LandingPage/Footer/Footer"



const KnowledgeBase = () => {
  return (
    <div className="pt-[90px] ">
      <div
        className=" flex flex-col  gap-10 justify-center items-center"
        style={{
          backgroundImage: `url(${KnowledgeBasebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "250px",
        }}>
        <h1 className="text-3xl text-center font-normal">How can we help?</h1>
        <div className="relative h-[56px] w-[662px] ">
          <IoSearch className="absolute left-3 top-8 text-[26px] " />
          <Input className="" type="text" placeholder="           Search for the knowledge base" />

          <Button size="lg" className="absolute top-6 right-2">
            {" "}
            Search
          </Button>

          {/* className="absolute h-full flex items-center justify-center top-2 right-2 text-gray-500 focus:outline-none"> */}
        </div>
      </div>


      <div className="p-[138px]">
        <div className=" flex flex-col justify-between shadow-md p-5 w-[298px] h-[285px]">
          <div>
            <div className=" p-10 border mb-2">
              <img src={Exceed} alt="Exceed Logo" />
            </div>
            <p className="font-normal text-md">Exceed product manual</p>
          </div>

          <div className="flex justify-between text-gurugeeks-orangeLight">
            <p className="font-normal text-sm">Download manual</p>
            <FiDownload />
          </div>
        </div>
      </div>

      <Faq/>
      <Footer/>

    </div>
  );
};

export default KnowledgeBase;
