import React from 'react';
import { FaBell } from "react-icons/fa";
import pp from '../../Images/pp.png'


function Navdash({title}) {
  return (
    <>
    <div className="navdash">
    <h2>{title}</h2>
    <div>
     <FaBell/>
     <img src={pp} alt="" />
    </div>
    </div>
    </>
  )
}

export default Navdash