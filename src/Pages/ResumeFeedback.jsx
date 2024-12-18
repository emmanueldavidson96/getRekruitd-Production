import React, { useState } from 'react';
import logo from '../Images/image.png';
import pp from '../Images/profilepic.png';
import { IoIosArrowDown } from "react-icons/io";
import arrow from '../Images/vec.png';
import RelevancyScoreComponent from '../Components/RelevancyScoreComponent';
import OverallResumeScoreComponent from '../Components/OverallResumeScoreComponent';
import ImpactComponent from '../Components/ImpactComponent';
import BrevityComponent from '../Components/BrevityComponent';
import StyleComponent from '../Components/StyleComponent';
import SectionsComponent from '../Components/SectionsComponent';
import SkillsComponent from '../Components/SkillsComponent';
import { GrDocumentDownload } from "react-icons/gr";
import ResumeView from '../Components/ResumeView';
import threedee from '../Images/3d.png';
import { TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import FixResume from '../Components/FixResume';

// Set up modal style
Modal.setAppElement('#root');

function ResumeFeedback() {
  const [activeFirstSection, setActiveFirstSection] = useState('relevancy');  
  const [activeFeedback, setActiveFeedback] = useState('impact');  
  const [isFixModalOpen, setIsFixModalOpen] = useState(false); 

  const openFixModal = () => setIsFixModalOpen(true);
  const closeFixModal = () => setIsFixModalOpen(false);

  return (
    <>
      <div className="container">
        {/* Navigation Bar */}
        <div className="review-nav">
          <div className="log">
            <img src={logo} alt="logo" />
            <h2>GetReKuitd</h2>
          </div>
          <div className="review-links">
            <nav>
              <ul>
                <li>Resume <IoIosArrowDown /></li>
                <li>Interview Prep</li>
                <li>Jobs</li>
              </ul>
            </nav>
          </div>
          <div className="profile">
            <img src={pp} alt="profile" />
            <p>Hi, Mike</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="back" style={{ display: 'flex', gap: '10px' }}>
          <img src={arrow} alt="arrow" />
          <p><Link to='/'>Back</Link></p>
        </div>

        {/* My CV Board */}
        <div className="review-nav">
          <h2 style={{ color: '#111d63' }}>My CV board</h2>
          <div className="buttons">
            <button style={{ background: '#F2F7FF', color: 'black' }}> 
              <p><Link to='/tailoredJobs'>My Tailored jobs</Link></p>
            </button>
            <button style={{ backgroundColor: '#111d63', color: 'white' }} onClick={openFixModal}>
              <p>Auto Fix All</p>
            </button>
          </div>
        </div>

        {/* Main Grid Housing the Two Sections */}
        <div className="main-grid">
          <section className="feedback">
            <div className="first">
              <div className="header" style={{ display: 'flex', gap: '6px' }}>
                <h4
                  onClick={() => setActiveFirstSection('relevancy')}
                  style={activeFirstSection === 'relevancy' ? activeLink : {}}
                >
                  Relevancy Score
                </h4>
                <h4
                  onClick={() => setActiveFirstSection('overallResume')}
                  style={activeFirstSection === 'overallResume' ? activeLink : {}}
                >
                  Overall Resume Score
                </h4>
              </div>
              <div className="first-section-content">
                {activeFirstSection === 'relevancy' && <RelevancyScoreComponent />}
                {activeFirstSection === 'overallResume' && <OverallResumeScoreComponent />}
              </div>
            </div>

            {/* Second section (Feedback) */}
            <div className="second">
              <h4 style={{ padding: '25px 0', color: '#111d63' }} className='hh'>Feedback</h4>
              <h4 style={{ padding: '10px 0' }}>You should improve your resume in the following areas</h4>
              <div className="header-links">
                <h3
                  onClick={() => setActiveFeedback('impact')}
                  style={activeFeedback === 'impact' ? activeLinks : {}}
                >
                  Impact
                </h3>
                <h3
                  onClick={() => setActiveFeedback('brevity')}
                  style={activeFeedback === 'brevity' ? activeLinks : {}}
                >
                  Brevity
                </h3>
                <h3
                  onClick={() => setActiveFeedback('style')}
                  style={activeFeedback === 'style' ? activeLinks : {}}
                >
                  Style
                </h3>
                <h3
                  onClick={() => setActiveFeedback('sections')}
                  style={activeFeedback === 'sections' ? activeLinks : {}}
                >
                  Sections
                </h3>
                <h3
                  onClick={() => setActiveFeedback('skills')}
                  style={activeFeedback === 'skills' ? activeLinks : {}}
                >
                  Skills
                </h3>
              </div>
              <div className="feedback-content">
                {activeFeedback === 'impact' && <ImpactComponent />}
                {activeFeedback === 'brevity' && <BrevityComponent />}
                {activeFeedback === 'style' && <StyleComponent />}
                {activeFeedback === 'sections' && <SectionsComponent />}
                {activeFeedback === 'skills' && <SkillsComponent />}
              </div>
            </div>

            <div className="check-it-out" style={{ display: 'flex', padding: '20px 0' }}>
              <img src={threedee} alt="" />
              <div className='btn-blu'>
                <p> There are over 5000 jobs that suit your resume</p>
                <h4> check it out <TfiArrowCircleRight /></h4>
              </div>
            </div>
          </section>

          <section className="preview">
            <div className="Pre-link">
              <h3>Preview</h3>
              <div className="pre-link-head">
                <p>Change Resume</p>
                <p> Download <GrDocumentDownload /></p>
              </div>
            </div>
            <div className="content">
              <ResumeView />
            </div>
          </section>
        </div>

        {/* Modal for Auto Fix All */}
        <Modal
          isOpen={isFixModalOpen}
          onRequestClose={closeFixModal}
          contentLabel="Fix Resume"
          className="modal auto"
          overlayClassName="modal-overlay"
        >
          <FixResume onClose={closeFixModal} />
        </Modal>
      </div>
    </>
  );
}

// Active link styles
const activeLink = {
  color: '#4042E2',
  backgroundColor: '#F9f9ff',
};
const activeLinks = {
  color: '#4042e2',
  borderBottom: '2px solid #4042e2'
}

export default ResumeFeedback;
