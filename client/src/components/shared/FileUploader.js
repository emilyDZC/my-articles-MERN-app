import React, { useRef } from "react";

const FileUploader = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    let imgFormObj = new FormData();
    imgFormObj.append("name", e.target.files[0]);
    imgFormObj.append("file", e.target.files[0]);
    console.log(imgFormObj);
    onFileSelect(imgFormObj);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      />
    </div>
  );
};

export default FileUploader;
