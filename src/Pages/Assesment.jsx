import React, { useState } from 'react';
import AssesmentComponent from '../Components/AssesmentComponent'; 
import CvUploadComponent from '../Components/CvUploadComponent'; 
import img from '../Images/image-login.png';
import logo from '../Images/image.png';
import { CiCircleCheck } from "react-icons/ci";

function Assesment() {
  const [activeSection, setActiveSection] = useState('needAssessment'); 

  return (
    <>
      <div className="grid-view">
        <img src={img} alt="background" />
        <div className="grid-text">
          <div className="log">
            <img src={logo} alt="logo" />
            <h2>GetReKuitd</h2>
          </div>

         
          <div className="linked-titles">
            <p 
              onClick={() => setActiveSection('needAssessment')} 
              style={activeSection === 'needAssessment' ? activeLink : inactiveLink} 
            >
               <span><CiCircleCheck /></span>
              Need Assessment
            </p>
            <p 
              onClick={() => setActiveSection('cvUpload')} 
              style={activeSection === 'cvUpload' ? activeLink : inactiveLink} 
            >
                <span><CiCircleCheck /></span>
              CV Upload
            </p>
          </div>

        
          <div className="need">
            {activeSection === 'needAssessment' && <AssesmentComponent />}  
            {activeSection === 'cvUpload' && <CvUploadComponent />}  
          </div>
        </div>
      </div>
    </>
  );
}


const activeLink = {
  color: '#36a1c5',
  borderBottom: '2px solid #36a1c5',
  backgroundColor: '#F3F8FF',
};

const inactiveLink = {
  color: '#000',  
  backgroundColor: 'transparent',
};

export default Assesment;
