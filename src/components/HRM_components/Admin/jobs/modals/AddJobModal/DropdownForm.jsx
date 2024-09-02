import React, { useState } from 'react';
import GenericScoreCard from './GenericScoreCard';

const DropdownForm = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  let selectedComponent;
  switch (selectedValue) {
    case 'option1':
      selectedComponent = <GenericScoreCard />;
      break;
    case 'option2':
      selectedComponent = "";
      break;
      default:
      selectedComponent = null;

  }

  return (
    <div className='overflow-y-scroll h-[500px]'>   
      <select  value={selectedValue} onChange={handleSelectChange}
      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-red-500 focus:border-blue-500"
      >
        <option value="">Select an option</option>
        <option value="option1">Generic Scorecard</option>
        <option value="">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedComponent}
    </div>
  );
};

export default DropdownForm;