import React, { useState } from 'react';
import Navdash from './Navdash';
import { FaCamera } from 'react-icons/fa';
import PrivateInfo from '../../Components/PrivateInfo';
import PrivateneedAssesment from '../../Components/PrivateneedAssesment';


const Myprofile = () => {
  const [active, setactive] = useState('personalinfo')
  return (
    <>
    <Navdash title='My Profile'/>
    <div className="myprofile-background">
      <div className="image-bg">
      
      </div>
      <div className="grid-bg">
        <div className="component">

        <div className="profile-side-bar">
        <div className="profile-container">
      <div className="profile-picture">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-img" 
        />
        <FaCamera className="iconn" />
      </div>
    </div>
              <div className="user-applications">
                <div className="first-div">
                <h3>Mike sean</h3>
                <p>mike@example.com</p>
                </div>
                <div className="each">
                <h4>Total Applications</h4>
                <h3 style={{color:'blue'}}> 223</h3>
                </div>
                <div className="each">
                <h4>Offers Received</h4>
                <h3 style={{color:'green'}}>14</h3>
                </div>
                <div className="each">
                <h4>Upcoming Interviews</h4>
                <h3 style={{color:'orange'}}>13</h3>
                </div>
                <div className="each">
                <h4>Rejections</h4>
                <h3 style={{color:'red'}}>67</h3>
                </div>
              </div>
        </div>
        <div className="personal-info">
          <div className="linked-titles">
            <p onClick={()=> setactive('personalinfo')}
              style={active === 'personalinfo' ? activeLink : inactiveLink}>Private Information</p>
            <p onClick={()=>setactive('privateinfoAssesment')}
              style={active === 'privateinfoAssesment' ? activeLink: inactiveLink}>Need Assesment</p>
          </div>
          {active === 'personalinfo' && <PrivateInfo/>}
          {active === 'privateinfoAssesment' && <PrivateneedAssesment/>}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

const activeLink = {
  color: '#4042e2',
  borderBottom: '4px solid #4042E2',
};

const inactiveLink = {
  color: '#8f919b',  
 
};


export default Myprofile