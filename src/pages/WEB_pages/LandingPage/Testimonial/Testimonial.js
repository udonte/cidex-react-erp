import React from "react";
import Slider from "react-slick";
import Avater1 from "../../../../assets/landingPage/tst1.png"
import Avater2 from "../../../../assets/landingPage/tst2.png"
import Avater3 from "../../../../assets/landingPage/tst3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bgtestimonial from "../../../../assets/landingPage/testimonial.png";

// import CardCarousel from "./CardCarousal";

const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const data = [
    {
      Name: "George",
      Review:
        "Our team has been using this HRM/CRM solution for over a year now, and it has completely transformed the way we operate. ",
      Role: "Frontend",
      image: Avater1
    },

    {
      Name: "Pomile",
      Review:
        "The HRM module streamlines recruitment, onboarding, and performance evaluations, while the CRM side enhances our client interactions",
      Role: "Backtend",
      image: Avater2
    },

    {
      Name: "Abolore",
      Review:
        "For our organization, this SaaS product offers a complete solution that seamlessly combines HRM and CRM functionalities.",
      Role: "Business Developement",
      image: Avater3
    },

    {
      Name: "Abolore",
      Review:
        "For our organization, this SaaS product offers a complete solution that seamlessly combines HRM and CRM functionalities.",
      Role: "Business Developement",
      image: Avater3
    }

    
  ];
  return (
    <div>
      <div
        className="my-20  flex  flex-col gap-10 justify-center bg-cover bg-no-repeat h-[530px]"
        style={{ backgroundImage: `url(${Bgtestimonial})` }}>
        <h1 className="text-4xl font-bold text-center text-white">
          What our client are saying about us
        </h1>

        <Slider {...settings} className="mx-[170px]">
          {data.map((d) => {
            return (
              <div className= "bg-white p-11 rounded-2xl ">
                <div className="text-md h-[150px] font-light ">{d.Review}</div>

                <div className="flex gap-8 mt-5 items-center">
                  <div  >
                    <img className="rounded-full w-10"  src={d.image} alt="Avater text" />
                  </div>
                  
                  <div>
                    <div className="text-gurugeeks-green-600 text-lg font-bold">
                      {d.Name}
                    </div>
                    <div className="font-light text-xs"> {d.Role} </div>
                  </div>
                </div>
              </div>
            );
          })}
          
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
