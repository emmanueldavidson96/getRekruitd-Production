import React, { useState } from 'react';
import Navdash from './Navdash';
import { MdOutlineBusinessCenter } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { PiWarningCircleLight } from "react-icons/pi";
import { GoPeople } from 'react-icons/go';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaPen } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import RecentSearches from './RecentSearches';
import gif from '../../Images/giff.gif'
const scoreValue = 65;
const getColorBasedOnScore = (score) => {
  if (score >= 80) {
    return '#81e878'; // Green
  } else if (score >= 50) {
    return '#E8AC11'; // Yellow
  } else {
    return 'red'; // Red
  }
};

const getColorBasedOnScores = (score) => {
  if (score >= 80) {
    return '#d0efc3'; // Green
  } else if (score >= 50) {
    return '#E8781133'; // Yellow
  } else {
    return '#fbcdc0'; // Red
  }
};

const pathColor = getColorBasedOnScore(scoreValue);
const trailColor = getColorBasedOnScores(scoreValue);

const Overview = () => {

  const [recentSearches, setRecentSearches] = useState([]);

  return (
    <>
      <Navdash title='Overview' />
      <div className="overview">
        <div className="main-overview" data-aos='fade-up'>
          <div className="overview-board">
            <p>Job Application Tracking System</p>
            <h3>Your automated job application process dashboard</h3>
            <div className="buttons">
              <button style={{ backgroundColor: '#111d63', color: 'white' }}>
                <p>Book an Appointment</p>
              </button>
              <button style={{ backgroundColor: 'white', color: 'black' }}>
                <p>Join Community</p>
              </button>
              <button style={{ backgroundColor: 'white', color: 'black' }}>
                <p>My Applications</p>
              </button>
            </div>
          </div>

          <div className="overview-cards">
            <div className="vcard">
              <div className="v-icon">
                <MdOutlineBusinessCenter />
              </div>
              <h4>Total Applications</h4>
              <p>15</p>
            </div>
            <div className="vcard">
              <div className="v-icon">
                <GoPeople />
              </div>
              <h4>Total Interviews</h4>
              <p>7</p>
            </div>
            <div className="vcard">
              <div className="v-icon">
                <PiHandshakeLight />
              </div>
              <h4>Total Offers</h4>
              <p>4</p>
            </div>
            <div className="vcard">
              <div className="v-icon">
                <PiWarningCircleLight />
              </div>
              <h4>Pending Applications</h4>
              <p>1</p>
            </div>
          </div>

          <div className="recent">
            <div className="div">
            <h3>Recent Searches</h3>
            <MdOutlineBusinessCenter onClick={()=>setRecentSearches()}/>
            </div>

            <div className="gif">
            {recentSearches.length > 0 ? (
              <RecentSearches data={recentSearches} />
            ) : (
              <div className="no-search">
               <img src={gif} alt="" />
               <p>You do not have any activity yet!</p>
              </div>
            )}
            </div>
          </div>
        </div>

        {/* SECOND PART OF THE OVERVIEW */}

        <div className="last-overview">
          <div className="profile">
            <h3>Profile Relevance</h3>
            <div className="cpb">
              <CircularProgressbar
                value={scoreValue}
                text={`${scoreValue}%`}
                styles={buildStyles({
                  pathColor: pathColor,
                  textColor: 'black',
                  trailColor: trailColor,
                  textSize: '18px',
                  fontFamily: 'bold-sharp, sans-serif',
                })}
              />
            </div>

            <div className="text-view">
              <h3>John Doe</h3>
              <p>UIUX Designer, Product Manager, Graphics Designer</p>
              <p style={{ paddingTop: '10px' }}>
                <span>Edit Profile <FaPen /></span>
              </p>
            </div>
          </div>

          <h3 style={{ padding: '20px 0' }}>Upcoming Schedule</h3>
          <div className="schedules">
            <div className="schedule-card">
              <div>
                <h4 style={{ color: '#036DF5' }}>Interview</h4>
                <p>Tech Mahindra</p>
                <p className='faint'>Lagos State (Hybrid)</p>
              </div>
              <span style={{ color: '#036DF5' }}><IoIosArrowDropright /></span>
            </div>

            <div className="schedule-card">
              <div>
                <h4 style={{ color: '#036DF5' }}>Interview</h4>
                <p>Tech Mahindra</p>
                <p className='faint'>Lagos State (Hybrid)</p>
              </div>
              <span style={{ color: '#036DF5' }}><IoIosArrowDropright /></span>
            </div>

            <div className="schedule-card">
              <div>
                <h4 style={{ color: '#036DF5' }}>Interview</h4>
                <p>Tech Mahindra</p>
                <p className='faint'>Lagos State (Hybrid)</p>
              </div>
              <span style={{ color: '#036DF5' }}><IoIosArrowDropright /></span>
            </div>

            <p>See more <IoIosArrowDropright /></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
