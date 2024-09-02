import React from "react";
import { Link } from "react-router-dom";
import { FaCircleArrowRight, FaCircleArrowLeft  } from "react-icons/fa6";

import Button from "../../../../components/WEB_components/Button";
import Heroimage from "../../../../assets/landingPage/HeroImage.png";
import Car1 from "../../../../assets/landingPage/Carousal_1.png";
import Car2 from "../../../../assets/landingPage/Carousal_2.png";
import Car3 from "../../../../assets/landingPage/Carousal_3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <FaCircleArrowRight />,
    prevArrow: <FaCircleArrowLeft />
  };

  return (
    <>
      <div className="w-full my-10">
        <div className=" flex flex-col items-center">
          <div className="text-center flex flex-col justify-center  gap-8 w-[800px]  py-10">
            <h1 className="text-4xl text-center font-bold">
              Your All-in-One HRM and CRM Solution
            </h1>
            <p className="text-lg ">
              Exceed is designed to automate HR tasks, nurture and manage your
              entire workforce. exceptional customer experience.
            </p>
            <div className="flex items-center justify-center gap-5">
              <Link to='/web/freedemo'>
                <Button color="secondary" size="lg">
                  Get Started
                </Button>
              </Link>
             
              <Button size="lg">Get Free Demo</Button>
            </div>
          </div>
        </div>

        {/* Carousal */}

        <div className="">
          <div className="mt-10 w-[1080px] mx-auto  relative">
            {/* Existing image */}

            <img src={Heroimage} alt="Existing" className="w-full h-auto" />

            {/* Carousel */}

            <div className="absolute top-[295px] left-[545px] transform -translate-x-1/2 -translate-y-1/2 w-[80%] ">
              {/* You can repeat this div for each carousel item */}

              <Slider {...settings}>
                <img src={Car1} alt="Carousel 1" className="h-full" />
                <img src={Car2} alt="Carousel 2" className="h-full" />
                <img src={Car3} alt="Carousel 3" className="h-full" />
              </Slider>

              {/*  Add more carousel items as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
