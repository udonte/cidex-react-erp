import React, { useState } from "react";
import { FaFile, FaTimesCircle } from "react-icons/fa";
import MiddleModalContainer from "../../common/MiddleModalContainer";

const ImportContacts = () => {
  const [page, setPage] = useState(0);

  const [selectedFilePage0, setSelectedFilePage0] = useState(null);
  const [uploadProgressPage0, setUploadProgressPage0] = useState(0);
  const [uploadingPage0, setUploadingPage0] = useState(false);

  const [selectedFilePage1, setSelectedFilePage1] = useState(null);
  const [uploadProgressPage1, setUploadProgressPage1] = useState(0);
  const [uploadingPage1, setUploadingPage1] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (page === 0) {
      setSelectedFilePage0(file);
      setUploadProgressPage0(0);
    } else if (page === 1) {
      setSelectedFilePage1(file);
      setUploadProgressPage1(0);
    }
  };

  const handleCancelUpload = () => {
    if (page === 0) {
      setSelectedFilePage0(null);
      setUploadProgressPage0(0);
    } else if (page === 1) {
      setSelectedFilePage1(null);
      setUploadProgressPage1(0);
    }
  };

  const handleUpload = async () => {
    try {
      // Set the uploading state based on the current page
      if (page === 0) {
        setUploadingPage0(true);
      } else if (page === 1) {
        setUploadingPage1(true);
      }

      // Simulating a file upload with a delay
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Update the progress based on the current page
        if (page === 0) {
          setUploadProgressPage0(progress);
        } else if (page === 1) {
          setUploadProgressPage1(progress);
        }
      }

      // Perform the actual file upload here using an API
      // Once the upload is complete, reset the states based on the current page
      if (page === 0) {
        setSelectedFilePage0(null);
        setUploadProgressPage0(0);
        setUploadingPage0(false);
      } else if (page === 1) {
        setSelectedFilePage1(null);
        setUploadProgressPage1(0);
        setUploadingPage1(false);
      }

      // You can perform any other actions after a successful upload
    } catch (error) {
      // Handle error, display a message, or retry the upload
      console.error("Error uploading file:", error);

      // Reset the states on error based on the current page
      if (page === 0) {
        setSelectedFilePage0(null);
        setUploadProgressPage0(0);
        setUploadingPage0(false);
      } else if (page === 1) {
        setSelectedFilePage1(null);
        setUploadProgressPage1(0);
        setUploadingPage1(false);
      }
    }
  };

  const pageOutput = () => {
    const selectedFile = page === 0 ? selectedFilePage0 : selectedFilePage1;
    const uploadProgress =
      page === 0 ? uploadProgressPage0 : uploadProgressPage1;
    const uploading = page === 0 ? uploadingPage0 : uploadingPage1;

    return (
      <div className="border-2 border-b-gray-200 h-[70%]">
        <h1 className="bg-gray-100 px-4 py-3 font-bold text-gray-500">
          {page === 0 ? "CSV Contacts Import" : "Contacts Import"}
        </h1>

        <div className="px-4 py-3">
          {selectedFile ? (
            <div className="flex items-center space-x-2">
              <FaFile className="border-gray-500 h-full" />
              <div className="flex items-center border-r-2 border-gray-300 p-4">
                <div className="relative flex items-center">
                  <div
                    className="absolute top-0 bottom-0 left-0 right-0 bg-green-200 rounded-md"
                    style={{ width: `${uploadProgress}%` }}
                  />
                  <span className="text-gray-500 px-2 mr-6 truncate">
                    {selectedFile.name}
                  </span>
                  <div className="absolute top-0 bottom-0 right-0 ml-4 px-2 cursor-pointer">
                    <FaTimesCircle
                      onClick={handleCancelUpload}
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleUpload}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
          ) : (
            <form>
              <p className="text-gray-500 mb-2">
                {page === 0
                  ? "Import up to 1000 assets from CSV file"
                  : "Import assets from .xls, etc."}
              </p>
              <label className="cursor-pointer flex items-center space-x-2 border border-gray-300 rounded-md w-fit ">
                <div className="flex items-center border-r-2 border-gray-300 p-4">
                  <FaFile className="border-gray-500 h-full" />
                </div>
                <span className="text-gray-500 px-2">Upload File</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept={page === 0 ? ".csv" : ".pdf,.doc,.docx,.txt,image/*"}
                />
              </label>
            </form>
          )}
        </div>
      </div>
    );
  };

  return (
    <MiddleModalContainer>
      <div className="bg-white px-8 py-4 w-[850px] h-[620px]">
        <div className="flex items-center gap-x-8 border-b-2 border-b-gray-200 mb-8 ">
          <button
            onClick={() => {
              setPage(0);
            }}
            className={`py-2 ${
              page === 0 ? "border-b-4 border-gurugeeks-green-700" : ""
            }`}
          >
            Import From CSV
          </button>
          <button
            onClick={() => {
              setPage(1);
            }}
            className={`py-2 ${
              page !== 0 ? "border-b-4 border-gurugeeks-green-700" : ""
            }`}
          >
            Import From Others
          </button>
        </div>

        <div className="h-full">{pageOutput()}</div>
      </div>
    </MiddleModalContainer>
  );
};

export default ImportContacts;
