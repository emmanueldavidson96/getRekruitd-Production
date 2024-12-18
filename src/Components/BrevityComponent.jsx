import React from 'react';
import ban from '../Images/ban.png';
import { MdLock } from 'react-icons/md';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { FaCheck } from "react-icons/fa6";

function BrevityComponent() {
  return (
    <>
    <p style={{
        padding:'10px 0'
    }}> 
We analyzed your resume's length, depth and word choice, which give an indication of how concise and to the port your resume is.
    </p>    
    <div className="impact-card">

      <div className="ic">
        <img src={ban} alt="" />
        <div className="ic-text">
          <h4>Resume Length</h4>
          <p>Ensure your resume's word count is the right length</p>
        </div>
        <button>
        <p>fix it</p>
        <TfiArrowCircleRight />
       </button>        
      </div>

      <div className="ic">
        <FaCheck style={{
          color:'green',
          fontSize:'21px'
        }}/>
        <div className="ic-text">
          <h4>Use of bullet points</h4>
          <p>You have a great use of bulet poiosh</p>
        </div>
        <button>
        <p>fix it</p>
        <TfiArrowCircleRight />
       </button>        
      </div>

      <div className="ic">
      <MdLock style={{
        fontSize:'23px',
        color:'#8F919B'
       }}/>
        <div className="ic-text">
          <h4>Bulletpoint Length Analysis</h4>
          <p>Available for pro sections only</p>
        </div>
        <button>
        <p>fix it</p>
        <TfiArrowCircleRight />
       </button>        
      </div>

      <div className="ic">
      <MdLock style={{
        fontSize:'23px',
        color:'#8F919B'
       }}/>
        <div className="ic-text">
          <h4>Filler Words Found</h4>
          <p>You should remove some ambigous words from your resume</p>
        </div>
        <button>
        <p>fix it</p>
        <TfiArrowCircleRight />
       </button>        
      </div>

    </div>

    </>
  )
}

export default BrevityComponent