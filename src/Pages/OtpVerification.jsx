import React, { useRef, useState, useEffect } from 'react';
import logo from '../Images/image.png';
import img from '../Images/image-login.png';
import { Link,useNavigate } from 'react-router-dom';
import { HiArrowLongLeft } from "react-icons/hi2";
import axios from 'axios';


function OtpVerification() {
    const [code, setCode] = useState(["","","","",""]);
    const inputRefs = useRef([])
    
    const navigate = useNavigate();
  
    const handleChange = (index, value) => {
      const newCode = [...code];
  
      // Handle pasted content
      if (value.length > 1) {
        const pastedCode = value.slice(0, 6).split("");
        for (let i = 0; i < 6; i++) {
          newCode[i] = pastedCode[i] || "";
        }
        setCode(newCode);
  
        // Focus on the last non-empty input or the first empty one
        const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
        const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
        inputRefs.current[focusIndex].focus();
      } else {
        newCode[index] = value;
        setCode(newCode);
  
        // Move focus to the next input field if value is entered
        if (value && index < 5) {
          inputRefs.current[index + 1].focus();
        }
      }
    };

    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const verificationCode = code.join("");
      try {
        console.log(verificationCode)
        const response = await axios.post("http://localhost:8080/api/auth/verify-email", {code:verificationCode}, {withCredentials:true});
        console.log(response.data)
        navigate("/acctCreate");
      } catch (error) {
        console.log(error);
      }
    };

    // Auto submit when all fields are filled
	// useEffect(() => {
	// 	if (code.every((digit) => digit !== "")) {
	// 		handleSubmit(new Event("submit"));
	// 	}
	// }, [code]);
  
  return (
    <>
     <div className="Ot-ver">
     <div className="Login">
        <img src={img} alt="" className="login-img" />

        <div className="form-login Otp">
          <div className="log">
            <img src={logo} alt="" />
            <h2>GetReKuitd</h2>
          </div>

         <p className='back'><Link to='/login'>
         <HiArrowLongLeft />
         Go Back</Link></p>
          
          <div className="Otp-code">
            <div className="otp-verification">
              <h2>Verify your Account</h2>
              <div style={{
                textAlign:'center'
              }}>
              <p>We’ve sent a 6 digit code to your email</p>
              <h3 style={{
                fontSize:'16px'
              }}>mikesangel@gmail.com</h3>
              </div>

              <form onSubmit={handleSubmit} className="otp-form">
                <p>Enter Otp</p>
                <div className="otp-inputs">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type='text'
                    maxLength='6'
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
                </div>
                
                <button type="submit" className="verify-btn">Proceed</button>
              </form>

              <p className="resend-otp">Resend OTP In 40 seconds.</p>
            </div>
          </div>   
        </div>
      </div> 
    </div>  
    </>
  );
}

export default OtpVerification;
