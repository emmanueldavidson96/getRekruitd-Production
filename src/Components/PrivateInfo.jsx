import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {IoIosArrowForward } from "react-icons/io";


const PrivateInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');



  const handlePhoneChange = (value) => {
    setPhoneNumber(value);


    if (value.length < 10) {
      setError('Phone number is too short');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }}

    


  return (
    <>
    <div className="update-phonenumber">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <PhoneInput className='ipt'
            country={'ng'} 
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter phone number"
            inputClass={`phone-input ${error ? 'input-error' : ''}`}
            inputStyle={{
              width:'70%',
              paddingLeft: '50px',
              fontSize: '13px',
              marginBottom: '10px',
              border: "0px",
              fontFamily:'sharp sans',

            }}
          />
        </div>

        {error && <p className="error">{error}</p>}
      </form>
      <div className="update-btn">
        <p>Update phone number</p>
      </div>
    </div>
    <div className="update-password">
      <p>update password</p>
      <IoIosArrowForward/>
    </div>
    <div className="reume-pdf" style={{
      padding:'30px'
    }}>
      <h3 style={{
        padding:'10px 0'
      }}>resume</h3>
      <div className="resume-link">

        <div className="resume">
          <p className='pdf'>PDF</p>
          <div className="resume-name">
            <p>Sean Paul pdf</p>
            <p>last reviewded 3/10/24</p>
          </div>
          <div className="resume-btn">
            <p>remove</p>
            <p>review</p>
          </div>
        </div>

        <div className="resume">
          <p className='pdf'>PDF</p>
          <div className="resume-name">
            <p>Sean Paul pdf</p>
            <p>last reviewded 3/10/24</p>
          </div>
          <div className="resume-btn">
            <p>remove</p>
            <p>review</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivateInfo;
