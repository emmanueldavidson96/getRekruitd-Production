import React, { useState } from 'react';
import img from '../Images/image-login.png';
import logo from '../Images/image.png';
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import gge from '../Images/gge.png';
import lkd from '../Images/lkd.png';
import { Link, useNavigate } from 'react-router-dom'; 
import { IoPersonOutline } from "react-icons/io5";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { HiArrowLongLeft } from "react-icons/hi2";
import axios from 'axios';

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const navigate = useNavigate();
  
  const handleSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/api/auth/register", {
      email:email,
      password:password,
      firstName:firstName,
      lastName:lastName,
      phoneNumber:phoneNumber
    }, {withCredentials:true})
    console.log(response.data);
    console.log(email, password, firstName, lastName, phoneNumber)
    navigate("/login")
  }
  
  return (
    <>
      <div className="Login">
        <img src={img} alt="" className="login-img" />
        <div className="form-login">
          <div className="log">
            <img src={logo} alt="" />
            <h2>GetReKuitd</h2>
          </div>
          <p className='back'><Link to='/login'>
         <HiArrowLongLeft />
         Go Back</Link></p>

          <div className="text">
            <h2>Create Account</h2>
            <p>Your Dream Job Awaits - Let's Get Started</p>
          </div>

          <div className="link-btn">
            <button className="btn">
              <img src={gge} alt="" />
              <h3>Google</h3>
            </button>
            <button className="btn">
              <img src={lkd} alt="" />
              <h3>LinkedIn</h3>
            </button>
          </div>

          <p className="cont">or continue with</p>

          <form onSubmit={handleSubmitHandler}>
            <div className="input-container">
              <MdOutlineMailOutline className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}                
              />             
            </div>
            

            <div className="create-acct">
              <div>
                <div className="input-container">
                  <IoPersonOutline className='icon' />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                
              </div>

              <div>
                <div className="input-container">
                  <IoPersonOutline className='icon' />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}                   
                  />
                </div>
                
              </div>
            </div>

            <div className="input-container">
              <PhoneInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e)}
                country={'us'} // default countr
                enableAreaCodes={true}
                enableTerritories={true}
                inputStyle={{
                  width: '350px',
                  paddingLeft: '50px',
                  fontSize: '16px',
                  marginBottom: '10px',
                  border: "0px",
                }}
              />
             
            </div>
          

            <div className="input-container">
              <MdLockOutline className="icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}                
              />              
            </div>           


            <button type="submit">Create Account</button>
            <button type="button" className="sign-in">
              <Link to='/login'>Login Instead</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Sign;
