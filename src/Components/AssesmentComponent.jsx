import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';


const customStyles = {
    option: (provided) => ({
      ...provided,
      fontSize: '14px',
    }),
    control: (provided) => ({
      ...provided,
      margin: '8px 0',
      borderRadius: '8px',
      boxShadow: 'none',
      height: '55px',
      border: '2px solid #ddd',
      '&:hover': {
        border: '1px solid #aaa',
        
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '14px',
      color: '#888',
      fontFamily: 'sharp sans',
    }),
  };
  

function AssesmentComponent() {
  return (
    <>
    <div className="select-flex">

    <p>Which industry are you most interested in pursuing a career in?</p>
    <Select styles={customStyles} placeholder='Select'/>

    <p>Do you have any prior experience in this industry?</p>
    <Select styles={customStyles} placeholder='select'/>

    <p>How many years of professional experience do you have?</p>
    <Select styles={customStyles} placeholder ="Select"/>

    <p>What are your top 3-5 skills that are most relevant to your desired role(s)?  </p>
    <div className="input-container">
    <textarea placeholder='Answer...'
     rows="4"
     cols="50" />

    </div>

    <div className="buttons">
        <button style={{backgroundColor:'#9CB3D7'}}><Link to='/'>Back</Link></button>
        <button style={{backgroundColor:'#111D63'}}>Proceed</button>
    </div>
     </div>
    </>
  )
}


export default AssesmentComponent