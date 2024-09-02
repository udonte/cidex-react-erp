import React, { useState } from "react";
import "../../../../index.css";

const LeadSegment = () => {
  const [showButton, setShowButton] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (value) => {
    let updatedCheckedItems = [...checkedItems];
    if (updatedCheckedItems.includes(value)) {
      // Remove item if it's already checked
      updatedCheckedItems = updatedCheckedItems.filter(
        (item) => item !== value
      );
    } else {
      // Add item if it's not checked
      updatedCheckedItems.push(value);
    }

    setCheckedItems(updatedCheckedItems);

    // Toggle the button visibility based on whether any checkbox is checked
    setShowButton(updatedCheckedItems.length > 0);
  };

  return (
    <div className={`button-container ${showButton ? "show" : ""}`}>
      {/* Show the button only when showButton is true */}
      <button className="animated-button" onClick={toggleButton}>
        Click Me!
      </button>

      {/* Button to toggle showButton state */}
      <button className="toggle-button" onClick={toggleButton}>
        Toggle Button
      </button>
    </div>
  );
};

export default LeadSegment;
