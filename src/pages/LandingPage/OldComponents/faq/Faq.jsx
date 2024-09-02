import React, { useState } from "react";
import SingleQuestion from "./singleQuestion";
import faqimage from "../../../../assets/faq-image.png";
import data from "./data";

const Faq = () => {
  const [questions] = useState(data);
  return (
    <div className="md:py-16 md:px-24 lg:gap-y-4 py-16 px-8" id="faq">
      <div className="hrm__faq-container mx-auto bg-white rounded-md w-full lg:max-w-[70%] grid">
        <h3 className="font-semibold text-3xl lg:text-5xl text-[#C55514B2] text-center ">
          Frequently Asked Questions
        </h3>
        <p className="font-normal text-xl lg:text-2xl text-[#667085] my-[40px] text-center">
          Everything you need to know about the product and billing
        </p>
        <section className="w-full mx-auto mt-[20px]">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })} 
        </section>
      </div>

      <div className="hrm__faq-more-container flex items-center justify-center flex-col py-8 px-8 lg:p-32 bg-gray-50 rounded-xl gap-2 mt-12">
        <img src={faqimage} alt="faq-people" width={300} />
        <h2 className="font-medium text-base lg:text-2xl text-gray-800">
          Still have questions?
        </h2>
        <p className="font-normal text-base lg:text-xl text-gray-600 mb-8 text-center">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="bg-orange-500 border border-orange-500 shadow-sm rounded-md text-white text-base lg:text-lg px-4 py-2">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Faq;
