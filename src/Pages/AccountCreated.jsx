import React from 'react';
import img from '../Images/image-login.png'
import logo from '../Images/image.png'
import check from '../Images/check.png'
import { useNavigate } from 'react-router-dom';


function AccountCreated() {
  const navigate = useNavigate()
  return (
    <>
      <div className="Login">
        <img src={img} alt="" className="login-img" />

        <div className="form-login crte">
        <div className="log">
            <img src={logo} alt="" />
            <h2>GetReKuitd</h2>
          </div>
          <img src={check} alt="" />
          <div className="congrat-text">
            <h2>Congratulations, your account
            has been created successfully!</h2>
            <p>Kickstart Your Dream Career Journey</p>
            <button onClick={() => navigate("/dashboard")}>Proceed</button>
          </div>
         </div>
    </div>  
    </>
  )
}

export default AccountCreated