import React, { useState } from 'react';
import CvUploadComponent from './CvUploadComponent';
import ResumeView from './ResumeView';

function ParentComponent() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile); // This will save the uploaded file in state
  };

  return (
    <div>
      <CvUploadComponent onFileUpload={handleFileUpload} />
      {file && <ResumeView file={file} />} {/* Pass the file to ResumeView */}
    </div>
  );
}

export default ParentComponent;
