import React, { useState } from 'react';
import { SlCloudUpload } from "react-icons/sl";
import dropbox from '../Images/dropbox.png';
import drive from '../Images/drive.png';
import { useNavigate } from 'react-router-dom';


function CvUploadComponent() {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      if (files[0].type !== "application/pdf") {
        setError('Only PDF files are supported');
        setFile(null); 
      } else {
        setFile(files[0]);
        setError(''); 
      }
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== "application/pdf") {
      setError('Only PDF files are supported');
      setFile(null);
    } else {
      setFile(selectedFile);
      setError('');
    }
  };

  return (
    <div className="cv">
      <div 
        className={`drag-area ${dragActive ? 'active' : ''}`} 
        onDragEnter={handleDragEnter} 
        onDragLeave={handleDragLeave} 
        onDragOver={handleDragOver} 
        onDrop={handleDrop}
      >
        <div className="icon-upload">
          <SlCloudUpload />
        </div>
    
        <h2>Drag and upload your resume here, or browse</h2>
        <p>Only PDF files are supported</p>

        <input 
          type="file" 
          accept=".pdf" 
          onChange={handleFileSelect} 
          style={{ display: 'none' }} 
          id="file-upload"
        />

        {file && <p>Selected file: {file.name}</p>}
        {error && <p className="error-message">{error}</p>} {/* Error message here */}
      </div>
      
      <p>or Copy and Paste</p>
      
      <div className="icons">
        <img 
          src={dropbox} 
          alt="Dropbox" 
          onClick={() => document.getElementById('file-upload').click()} 
          style={{ cursor: 'pointer' }} 
        />
        <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">
          <img src={drive} alt="Google Drive" />
        </a>
      </div>
      
      <div className="buttons">
        <button>Back</button>
        <button onClick={() => navigate("/Resumefeedback")}>Proceed</button>
      </div>
    </div>
  );
}

export default CvUploadComponent;
