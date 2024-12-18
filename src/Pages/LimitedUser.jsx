import React from 'react';
import Navbar from '../Components/Navbar';
import limi from '../Images/limit.png';
import { motion } from 'framer-motion';

function LimitedUser() {
  return (
    <>
      <div className="limited">
        <Navbar />
        <div className="limited-info">
          <motion.img 
            src={limi} 
            alt="limit" 
            animate={{ scale: [1, 1.1, 1] }}  // Scaling animation
            transition={{
              duration: 2,  // Duration of the animation loop
              repeat: Infinity,  // Infinite loop
              repeatType: 'loop' // Loop type
            }} 
          />
          <h1>We noticed you’ve reviewed a resume initially!</h1>
          <p style={{
            fontFamily: 'semibold'
          }}>Would you love to review another resume at an extra charge or apply for a tailored job with the previous resume?</p>
          
          <div className="buttons">
            <button style={{
              background: '#F2F7FF',
              color: 'black',
              margin: '15px'
            }}>Apply for a tailor job</button>
            <button style={{
              backgroundColor: '#111d63',
              color: 'white'
            }}>Review another job</button>
          </div>
          <p style={{ fontSize: '13px' }}>
            Review previous resume
          </p>
        </div>
      </div>
    </>
  )
}

export default LimitedUser;
