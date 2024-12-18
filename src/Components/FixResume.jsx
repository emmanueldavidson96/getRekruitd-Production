import React from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { VscWand } from "react-icons/vsc";
import { AiOutlineClose } from 'react-icons/ai';

function FixResume({ onClose }) {
  return (
    <>

    <div className="fix-resume">

      <div className="first">
        <div className="header-texts">
            <h4>Fix Resume</h4>
          <p>Get professional with AI-generated fix in seconds</p>
        </div>
        <div className="para-head">
          <h3 style={{ fontSize: '15px', color: '#233BC9' }}>From your Resume</h3>
          <span>
            <IoIosArrowDropleft />
            <IoIosArrowDropright />
          </span>
        </div>
        <div className="para">
          <p>Led the creation of precise wireframes, user journey, user flow, and interactive prototypes for Nestx's Website, facilitating effective communication of design concepts and product requirements.</p>
        </div>
        <div className="buttons">
          <button style={{ width: '150px', height: '50px' }}>modify</button>
          <p style={{ color: '#233BC9', fontSize: '14px' }}>Modification history</p>
        </div>
      </div>
      <div className="side-second-seg">
        <div className="icon-aside">    <AiOutlineClose size={25} onClick={onClose} style={{ cursor: 'pointer' }} /></div>
        <div className="text-suggested">
          <h3>Suggested Points</h3>
          <p> Directed the creation of precise wireframes, user flows, and interactive prototypes for NestX Website, fostering clear communication of design concepts and product needs; instrumental in ensuring effective collaboration among design and development teams.</p>
          <div> <VscWand /> <p style={{ color: '#A3B2C6' }}>Use this</p></div>
          <p> Orchestrated the development of detailed wireframes, user journeys, and interactive prototypes for Chekker's Website, enhancing design communication and aligning with product requirements; facilitated seamless understanding of design concepts and product specifications.</p>
          <div> <VscWand /> <p style={{ color: '#A3B2C6' }}>Use this</p></div>
        </div>
        <div className="side-text-section">
          <p>2 more strong resume bullet points were generated. But they're for Pro users <span style={{ color: '#233BC9', fontFamily: 'semibold' }}>Unlock them instantly</span>.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default FixResume;
