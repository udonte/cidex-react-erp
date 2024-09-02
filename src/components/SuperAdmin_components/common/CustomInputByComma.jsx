import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const CustomInputByComma = ({ label = "Label", handleInputByCommaChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [wordArray, setWordArray] = useState([]);

  // const handleChange = (e) => {
  //   e.value;
  // };

  const handleKeyDown = (event) => {
    // Check if the pressed key is a comma
    if (event.key === "," && inputValue.trim() !== "") {
      // Extract words after each comma and add to the array
      const words = inputValue
        .toLowerCase()
        .trim()
        .split(",")
        .map((word) => word.trim());

      // Check if the words are not already in the array
      const uniqueWords = words.filter((word) => !wordArray.includes(word));

      // Add unique words to the array
      setWordArray([...wordArray, ...uniqueWords]);
      handleInputByCommaChange(wordArray);

      // Clear the input field
      //   setInputValue("");
    }
  };

  const handleDelete = (index) => {
    // Remove the word and the comma after it at the specified index
    const deletedWord = wordArray[index];
    const updatedArray = wordArray.filter((_, i) => i !== index);
    setWordArray(updatedArray);

    // Update the input value by removing the deleted word and comma after it
    setInputValue((prevInputValue) => {
      const regex = new RegExp(`\\b${deletedWord}\\b,?`, "g");
      return prevInputValue.replace(regex, "").trim();
    });
  };

  return (
    <div>
      <label htmlFor="location" className="font-semibold">
        {label}{" "}
        <span className="text-xs text-gray-400 font-normal">
          Enter comma(,) after each activty
        </span>
      </label>
      <input
        className={`p-3 w-full min-h-14 border-2 bg-slate-50 rounded-md`}
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Meeting, Planning, Calling"
      />
      <div className="flex flex-wrap w-full items-center gap-x-3">
        {wordArray.map((word, index) => (
          <>
            <div
              className="border capitalize flex items-center my-2 gap-x-2 py-1 px-2 rounded-lg bg-gray-200"
              key={index}
            >
              {word}
              <button onClick={() => handleDelete(index)}>
                <CgClose />
              </button>
            </div>
            {/* {index < wordArray.length - 1 ? ", " : ""} */}
          </>
        ))}
      </div>
    </div>
  );
};

export default CustomInputByComma;
