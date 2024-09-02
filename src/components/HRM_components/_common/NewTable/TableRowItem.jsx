import React from "react";

const TableRowItem = ({
  rowData,
  isChecked,
  handleCheckboxChange,
  showCheckbox = false, // New prop for showing checkbox, default is false
  dotOptions, // New prop for dot options
}) => {
  return (
    <tr>
      {/* Checkbox (if showCheckbox is true) */}
      {showCheckbox && (
        <td>
          <Checkbox handleOnchange={handleCheckboxChange} checked={isChecked} />
        </td>
      )}
      {/* Render the row data */}
      {rowData.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
      {/* Dot options */}
      {dotOptions && <td>{/* Render your dot options component here */}</td>}
    </tr>
  );
};

export default TableRowItem;
