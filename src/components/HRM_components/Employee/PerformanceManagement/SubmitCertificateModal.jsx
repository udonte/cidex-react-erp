import React, { useState } from "react";
import Modal from "../../_common/ModalContainer/ModalConatiner";
import AWS from "aws-sdk";

function SubmitCertificateModal({ isOpen }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadToS3 = async () => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      region: "your-s3-bucket-region",
    });

    const params = {
      Bucket: "your-s3-bucket-name",
      Key: selectedFile.name,
      Body: selectedFile,
      ContentType: selectedFile.type,
    };

    try {
      const data = await s3.upload(params).promise();

      // Send the URL to the backend
      sendUrlToBackend(data.Location);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const sendUrlToBackend = (url) => {
    // Send the URL to your backend API
    fetch("/upload-certificate-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ certificateUrl: url }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send URL to backend");
        }
        return response.json();
      })
      .then((data) => {
      })
      .catch((error) => {
      });
  };
  return (
    <div>
      <Modal width="sm" isOpen={isOpen}>
        <div>
          <h2>Upload Certificate</h2>
          <input type="file" onChange={handleFileChange} />
          <button onClick={uploadToS3}>Upload</button>
        </div>
      </Modal>
    </div>
  );
}

export default SubmitCertificateModal;
