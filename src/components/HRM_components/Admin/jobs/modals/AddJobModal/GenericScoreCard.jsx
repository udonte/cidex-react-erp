import { useState } from "react";
import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineMinusCircle } from 'react-icons/ai'

const GenericScoreCard = () => {

  const [sectionList, setSectionList] = useState([{ id: 0, options: [{ id: 0, value: '' }], collapsed: false }]);

  const handleInputChange = (sectionIndex, optionIndex, value) => {
    const updatedSections = [...sectionList];
    updatedSections[sectionIndex].options[optionIndex].value = value;
    setSectionList(updatedSections);
  };

  const handleAddOption = (sectionIndex) => {
    const newOption = { id: sectionList[sectionIndex].options.length, value: '' };
    const updatedSections = [...sectionList];
    updatedSections[sectionIndex].options.push(newOption);
    setSectionList(updatedSections);
  };

  const handleRemoveOption = (sectionIndex, optionIndex) => {
    const updatedSections = [...sectionList];
    updatedSections[sectionIndex].options = updatedSections[sectionIndex].options.filter((_, i) => i !== optionIndex);
    setSectionList(updatedSections);
  };

  const handleAddSection = () => {
    const newSection = { id: sectionList.length, options: [{ id: 0, value: '' }], collapsed: false };
    setSectionList([...sectionList, newSection]);
  };

  const handleRemoveSection = (sectionIndex) => {
    const updatedSections = sectionList.filter((_, i) => i !== sectionIndex);
    setSectionList(updatedSections);
  };

  const handleToggleSection = (sectionIndex) => {
    const updatedSections = [...sectionList];
    updatedSections[sectionIndex].collapsed = !updatedSections[sectionIndex].collapsed;
    setSectionList(updatedSections);
  };

  return (
    <>
      {sectionList.map((section, sectionIndex) => (
        <div key={section.id} className="mb-10">
          <form className="border p-6 rounded ">
            <div className="flex justify-between items-center">
              <h1 className="mb-5 text-lg font-bold" >
                Section {section.id + 1}
              </h1>

              <div className="flex justify-between">
              <button
                  type="button"
                  onClick={() => handleToggleSection (sectionIndex)}
                  className="text-gray-500 flex justify-between items-center"
                >
                <span className="pr-2 font-bold"> <AiOutlineMinusCircle size='24' /></span>
                </button>

                <button
                  type="button"
                  onClick={() => handleRemoveSection(sectionIndex)}
                  className="text-red-500 flex justify-between items-center"
                >
                <span className="pr-2 font-bold"> <RiDeleteBin5Line size='24' /></span>
                </button>

               
              </div>

            
            </div>



            {!section.collapsed && (
              <>
                <label className="text-xs font-bold text-gray-500">Section Title</label>
                <input
                  type="text"
                  className="block w-full p-4 mb-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Personal Opinion"
                />

                {section.options.map((option, optionIndex) => (
                  <div key={option.id}>
                    <label className="text-xs font-bold text-gray-500">Option {optionIndex + 1}</label>
                    <div className="flex justify-between items-center">
                      <input
                        type="text"
                        value={option.value}
                        onChange={(e) => handleInputChange(sectionIndex, optionIndex, e.target.value)}
                        className="w-full p-4 mr-10 mb-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        className="text-red-500 pb-10"
                        onClick={() => handleRemoveOption(sectionIndex, optionIndex)}
                      >
                        <RiDeleteBin5Line size="24" />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => handleAddOption(sectionIndex)}
                  className="text-blue-300 flex justify-between items-center"
                >
                  <span className="pr-2 font-bold"> <AiOutlinePlus size='20' /></span> Add Field
                </button>
              </>
            )}
          </form>

        </div>
      ))}

      <button
        type="button"
        onClick={handleAddSection}
        className="text-blue-300 flex justify-between items-center"
      >
        <span className="pr-2 font-bold"> <AiOutlinePlus size='20' /></span> Add New Block
      </button>

    </>
  );
};

export default GenericScoreCard;
