import React, { useState } from "react";
import * as XLSX from "xlsx";
import MiddleModalContainer from "../../../../MiddleModalContainer";

function ExcelImporter() {
  const [excelData, setExcelData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0]; // Assuming only one sheet is present
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      if (validateColumns(jsonData[0])) {
        const headers = jsonData[0];
        const excelData = jsonData.slice(1).map((row) => {
          const rowData = {};
          headers.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });
        setExcelData(excelData);
        setErrorMessage("");
      } else {
        setExcelData(null);
        setErrorMessage(
          "The uploaded Excel file does not contain the expected columns."
        );
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const validateColumns = (headerRow) => {
    // Define the expected column headers
    const expectedColumns = ["Column1", "Column2", "Column3"]; // Example: Adjust according to your specific columns

    // Check if all expected columns are present in the header row
    return expectedColumns.every((column) => headerRow.includes(column));
  };

  return (
    <MiddleModalContainer title="Import Asset">
      <div className="px-8 py-4">
        <h2 className="mb-4 text-gray-500">Excel Importer</h2>
        <input
          type="file"
          accept=".xlsx*" // Accept CSVfiles
          onChange={handleFileChange}
        />
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        {excelData && Array.isArray(excelData) && excelData.length > 0 ? (
          <table>
            <thead>
              <tr>
                {Object.keys(excelData[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="mt-8 text-red-600 italic font-light">
            No data to display
          </div>
        )}
      </div>
    </MiddleModalContainer>
  );
}

export default ExcelImporter;
