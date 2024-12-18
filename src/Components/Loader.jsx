import React from 'react';
import { motion } from 'framer-motion';

const CircularLoader = () => {
  const circleRadius = 50; // Adjust to control the size of the circle

  return (
    <div className="circular-loader">
      <motion.div
        className="dot"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          width: `${circleRadius * 2}px`,
          height: `${circleRadius * 2}px`,
        }}
      >
        <motion.div
          className="rolling-dot"
          style={{
            width: '15px',  
            height: '15px',
            backgroundColor: 'blue', 
            borderRadius: '50%',
            position: 'absolute',
            top: 0,
            left: `${circleRadius}px`, 
          }}
        />
      </motion.div>
    </div>
  );
};

export default CircularLoader;
