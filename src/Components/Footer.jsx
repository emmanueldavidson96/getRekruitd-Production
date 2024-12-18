import React from 'react';
import logo from '../Images/image.png'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-grid">
    <div className="log">   
    <img src={logo} alt="" />
    <p>GetReKuitd</p>
                </div>
    <div className="link-a">
        <h2>SUPPORT</h2>
        <p>About us</p>
        <p>Privacy Policy</p>
        <p>Terms of Condition</p>
    </div>
    <div className="link-a">
        <h2>GET STARTED</h2>
        <p>Review Your Resume</p>
    </div>

</div>
<p className='foot-para'>© 2024 GetreKruited. All rights reserved.</p>
</div>

    </>
  )
}

export default Footer