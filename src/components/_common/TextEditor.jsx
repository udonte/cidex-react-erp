// src/components/TextEditor.js
import React, { useState, useEffect } from "react";

const TextEditor = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // You can handle the content change here, e.g., save to state or perform other actions.
  }, [content]);

  const handleBoldClick = () => {
    document.execCommand("bold", false, null);
  };

  const handleItalicClick = () => {
    document.execCommand("italic", false, null);
  };

  const handleUnderlineClick = () => {
    document.execCommand("underline", false, null);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 border rounded">
      <div className="flex mb-4">
        <button
          className="mr-2 px-2 py-1 border rounded"
          onClick={handleBoldClick}
        >
          Bold
        </button>
        <button
          className="mr-2 px-2 py-1 border rounded"
          onClick={handleItalicClick}
        >
          Italic
        </button>
        <button
          className="px-2 py-1 border rounded"
          onClick={handleUnderlineClick}
        >
          Underline
        </button>
      </div>
      <div
        contentEditable
        value={content}
        className="border p-2 rounded bg-white"
        onInput={handleContentChange}
      />
    </div>
  );
};

export default TextEditor;
