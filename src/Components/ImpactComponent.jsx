import React from 'react';
import ban from '../Images/ban.png'
import { MdLock } from "react-icons/md";
import { TfiArrowCircleRight } from "react-icons/tfi";

function ImpactComponent() {
  return (
    <>
    <p style={{
        padding:'10px 0'
    }}> 
    Your resume's impact score is made up of the following components. You can click on any section to see where you went wrong and steps to improve.
    </p>
    <div className="impact-card">
      <div className="ic">

       <img src={ban} alt="" />

       <div className="ic-text">
        <h4>Quantify Impact</h4>
        <p>Add more numbers and metrics</p>
       </div>
       <button>
        <p>fix it</p>
        <TfiArrowCircleRight />

       </button>
      </div>

      <div className="ic">

       <img src={ban} alt="" />

       <div className="ic-text">
        <h4> Repetition</h4>
        <p>Avoid repeating action verbs and phrases on your resumes</p>
       </div>
       <button>
        <p>fix it</p>
        <TfiArrowCircleRight />

       </button>
      </div>

      <div className="ic">

       <img src={ban} alt="" />

       <div className="ic-text">
        <h4>Action Verbs</h4>
        <p>We found weak action verbs that you should remove from your resume</p>
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
        <h4>Spell check</h4>
        <p>Get rid of careless errors that can dramatically reduce your resume's impact</p>
       </div>
       <button>
        <p>more</p>
        <TfiArrowCircleRight />

       </button>
      </div>

      <div className="ic">

      <MdLock style={{
        fontSize:'23px',
        color:'#8F919B'
       }}/>

       <div className="ic-text">
        <h4>Acomplishment</h4>
        <p>Your resume should focus on your accomplishments not your responsiblities</p>
       </div>
       <button>
        <p>more</p>
        <TfiArrowCircleRight />

       </button>
      </div>
    </div>
    </>
  )
}

export default ImpactComponent