import React from "react";
import Navbar from "../Components/Navbar";
import payment from '../Images/Payment.gif'

function PaymentSuccess() {

  return (
    <>
      <div className="pay">
        <Navbar />
      </div>
      <div className="pay-grid">
        <img src={payment} alt="" />
       <h1>Payment made successfully</h1>
       <p>We’ve received your subscription successfully. Proceed to your dashboard to track your automated job processes</p>
       <div className="buttons">
        <button style={{
            color:'black',
            backgroundColor:'#F2F7FF'
        }}>Just Resume Review</button>
        <button style={{
            backgroundColor:'#111D63'
        }}> Proceed to dashboard</button>
       </div>
      </div>
    </>
  );
}

export default PaymentSuccess;
