import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import email from '../Images/group6.png';
import call from '../Images/phone.png';
import pad from '../Images/Padlock.png';
import Email from '../Components/Email'; 
import Phone from '../Components/Phone'; 
import Otp from '../Components/OtpVer';   
import ResetPassword from '../Components/ResetPassword';

function ForgotPassword() {
  const [currentStep, setCurrentStep] = useState(1);  
  const [method, setMethod] = useState("");          
  
  const handleChoice = (choice) => {
    setMethod(choice);
    setCurrentStep(2);  
  };

  const handleSubmit = () => {
    setCurrentStep(3); 
  };

  const handleOtpSubmit = () => {
    setCurrentStep(4); 
  };

  const handlePasswordResetSubmit = () => {
    console.log('Password successfully reset');
  };

  return (
    <>
      <div className="forgot-pass">
        <div className="pass-flex">

          <div className="requirements">
            <button className='link-back' style={{backgroundColor:'#3FA3EC',padding:'20px 30px'}}><Link style={{color:'white'}}to='/login'>Go back</Link></button>
            <div className="re">
            <img src={pad} alt="Padlock" />
            <h2>Forgot Password?</h2>
            <p>Reset your password</p>
            </div>
            
          </div>

          <div className="God-abeg">
            {currentStep === 1 && (
              <>
                <div className="require-info">
                  <p>Choose your reset option preference</p>
                  
                  <div className="req-card" onClick={() => handleChoice('email')}>
                    <img src={email} alt="Email Icon" />
                    <div className="req-text">
                      <h2>Reset Via Email Address</h2>
                      <p>You will be required to enter the email address associated with your account</p>
                    </div>
                  </div>

                  <div className="req-card" onClick={() => handleChoice('phone')}>
                    <img src={call} alt="Phone Icon" />
                    <div className="req-text">
                      <h2>Reset Via Phone Number</h2>
                      <p>You will be required to enter the phone number associated with your account</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {currentStep === 2 && method === 'email' && (
              <Email onSubmit={handleSubmit} />
            )}

            {currentStep === 2 && method === 'phone' && (
              <Phone onSubmit={handleSubmit} />
            )}

            {currentStep === 3 && (
              <Otp onSubmit={handleOtpSubmit} /> 
            )}

            {currentStep === 4 && (
              <ResetPassword onSubmit={handlePasswordResetSubmit} /> 
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
