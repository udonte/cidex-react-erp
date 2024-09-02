import React from "react";

import {
  Hero,
  AboutExceed,
  HrmFeatures,
  CrmFeatures,
  Testimonial,
  Pricing,
  AppFeatures,
  Faq,
  Footer,
  GetInTouch,
} from "./index";
// import headerImage from "../../assets/landingPage/heroImage1.png";
// import headerImage2 from "../../assets/landingPage/heroImage2.png";

function HomePage() {
  return (
    <div className="pt-[90px] border w-full" id='home'> 
      
      <Hero />
      <div  id='about-us'>
        <AboutExceed />
      </div>
      <div id='features'></div>
      <HrmFeatures />
      <CrmFeatures />
      
      <div id='reviews'></div>
      <Testimonial />

      <div id='pricing'></div>
        <Pricing />

        <AppFeatures />  

      <div id="contact"></div>
        <GetInTouch />

        <div id='faq'></div>
      <Faq />
      <Footer />

      {/*     
      <div className="bg-green-200">
        <header>
          <div
            className="flex flex-col md:flex-row md:py-16 md:px-24  py-16 px-8"
            id="home"
          > 
            <div className="flex-1 flex justify-center items-start flex-col mr-5">
              <h1 className="font-semibold text-3xl lg:text-5xl text-gray-800">
                Our software is designed to simplify and automate your
                <span className="text-[#C55514B2]">HR management</span> tasks
              </h1>
              <p className="font-normal text-xl lg:text-2xl text-gray-800 mt-6">
                Set goals, track progress, and provide timely feedback to
                enhance employee performance and engagement
              </p> 
              <div className="hrm__header-content__input flex flex-row items-center my-8">
                <input
                  className="flex-2 w-full h-12 px-4 border border-gray-400 rounded-l-md text-base text-gray-600 outline-none"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button
                  className="flex-0.6 w-40 h-12 bg-gradient-to-r from-orange-500 to-[#C55514B2] text-white font-medium text-base rounded-r-md px-4 cursor-pointer focus:outline-none"
                  type="button"
                >
                  Get free demo
                </button>
              </div>
            </div>
            <div className="hrm__header-image flex-0.5 flex justify-center items-center">
              <img className="relative w-full" src={headerImage} alt="Header" />
              <img
                alt="Header"
                src={headerImage2}
                className="absolute -bottom-[250px] right-[300px]"
              />
            </div>
          </div>
        </header>
      </div> 

     

       <section>
        <Stat />
      </section>

      <Hiring />
      <Magt />
      <ClientReview />
      <Faq />
      <section id="pricing">
        <PricingPlan />
      </section>
      <Subscribe />
      <Footer />
      <Copyright /> */}
    </div>
  );
}

export default HomePage;
