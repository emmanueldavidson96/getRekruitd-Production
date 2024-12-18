import React, { useState, useEffect } from 'react';
import img from '../Images/image-login.png';
import logo from '../Images/image.png';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importing icons
import gge from '../Images/gge.png';
import lkd from '../Images/lkd.png';
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const loginUserHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/api/auth/login", {
      email:email,
      password: password
    }, {withCredentials:true})

    console.log(response.data);
    navigate("/otpVerify");

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
          <p className='back'><Link to='/'>
         <HiArrowLongLeft />
         Go Back</Link></p>
          <div className="text">
            <h2>Log in to your Account</h2>
            <p>Welcome back! Let's Get You Back On Track</p>
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

          <form onSubmit={loginUserHandler}>
            {/* Email Field */}
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"  
                value={email}
                onChange={(e) => setEmail(e.target.value)}             
              />
            </div>
            

            {/* Password Field */}
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"  
                value={password}
                onChange={(e) => setPassword(e.target.value)}              
              />
            </div>
            

            <div className="form-info">
              <div className="check">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p><Link to='/forgotpass'>Forgot password?</Link></p>
            </div>

            <button type="submit" >Login</button>
            <button type="button" className="sign-in">
              <Link to="/sign">Create Account Instead</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
