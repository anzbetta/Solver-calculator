import { useState } from "react";

export default function UploadFile({ onFileSelect }) {
  const [fileName, setFileName] = useState("No file selected");

  function handleChange(e) {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  }

  return (
    <div className="upload-file">
      <h3>Upload your file (optional)</h3>

      <label className="file-input-wrapper">
        <input
          type="file"
          accept=".txt"
          onChange={handleChange}
        />

        <span className="file-button">
          Choose file
        </span>

        <span className="file-text">
          {fileName}
        </span>
      </label>
    </div>
  );
}
