import React, { useState } from "react";
import "../../../index.css"; // Import CSS file for transitions

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-gray-600">
              {activeIndex === index ? "-" : "+"}
            </div>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "open" : "closed"
            }`}
          >
            <div className="p-4 border-t border-gray-300">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
