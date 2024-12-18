import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import tailor from '../Images/tail-girl.png';
import Card from '../Components/Card';
import bag from '../Images/bag.png';
import note from '../Images/note.png';
import per from '../Images/per.png';
import analy from '../Images/analytics.png';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import { PopupButton } from 'react-calendly';


function TailoredJobs() {
  return (
    <>
    <div className="Home tailor">
        <Navbar/>
        <div className="container">
          <div className="home-cont tailor"> 
        <div className="text-centre">
         <h1 data-aos='fade-up'>Streamline Your <i>job</i> Application Process</h1>
        </div>
        <div className="sub-text">
         <p data-aos='fade-up' data-aos-delay='300'>
         Personalized job applications that save you time and increase your chances of landing the perfect job.
         </p>
        </div>
        <div className="buttons">
            {/* <button className='first'>
             <Link to = '/'>Learn More</Link> </button>

            <button className='secondd'> <Link to = '/login'>Apply Now</Link> </button> */}
            <PopupButton
                url='https://calendly.com/with_mentor_techies?primary_color=111D63'
                rootElement={document.getElementById("root")}
                text="Schedule A Call"
                className='first'
              >
            </PopupButton>             
        </div>
        </div>
        </div>


    </div>
    <div className="tailored-grid container">
              <img src={tailor} alt="" className='first-img' />
            <div className="text">
                <h2>This is what we do differently</h2>
                <div data-aos='fade-up'>
                <Card
                image={note}
                title='Tailored Applications'
                content='Automatically customize your CVs and covered letter'
                />
                <Card
                image={bag}
                title='Job Matching'
                content='Find jobs that perfectly fit your profile.'
                />
                <Card
                image={analy}
                title='Application Tracking'
                content='Keep track of where and when you applied'/>
                <Card
                image={per}
                title='Interview Preparation'
                content='Get ready with practice questions and tips'/>
                </div>
            </div>
        </div>
        <div className="blue-seg">
            <div className="container">
                <h2 style={{
                    fontSize:'48px',
                    color:'white'
                }}>How It Works</h2>
                <p data-aos='fade-up'>  Get seen by over 100 millions of job employers across the globe</p>
                <div className="blueSeg-grid">
                      <div data-aos='fade-up'>
                        <h3>1</h3>
                        <h2 style={{
                            color:'white'
                        }}>Create a Profile</h2>
                        <p>We pull your Job reference from your need assessment and CV</p>
                      </div>
                      <div data-aos='fade-up' data-aos-delay='200'>
                        <h3>2</h3>
                         <h2 style={{
                            color:'white'}}>
                        Get Matched</h2>
                        <p>Get matched with mentors to walk you through hands-on learning, interview preps and simulation</p>
                      </div>
                      <div data-aos='fade-up' data-aos-delay='400'>
                        <h3>3</h3>
                        <h2 style={{
                            color:'white'}}>Live Webinars and Classes</h2>
                        <p>Join our masterclasses and live webinar for free</p>
                      </div>
                      <div data-aos='fade-up' data-aos-delay='600'>
                        <h3>4</h3>
                        <h2 style={{
                            color:'white'}}>Track & Prepare</h2>
                        <p>Monitor your applications and get ready for interviews.</p>
                      </div>

                </div>
            </div>
        </div>
        <div className="slider">
          <div className="slider-content">
          <h2 style={{color:'#111d63'}}> Here is what our applicants are saying about us</h2>
          <Slider/>
          </div>
        
        </div>
        <div className="prices">
           <h2 style={{
            fontSize:'34px',
            color:'#000316',
            padding:'30px'
           }}>Choose Your Plan</h2>
           <div className="price">
             <div className="price-box">
                <h3>African Job Market</h3>
                <h3> </h3>
                <h2>$50</h2>
                <p>/per month</p>
                <button><p><Link to='/Paysucess'>Get Started</Link></p></button>
             </div>

             <div className="price-box">
             <h3>Non African Market</h3>
             <h3>(Europe, US etc)</h3>
                <h2>$110</h2>
                <p>/per month</p>
                <button><p><Link to='/Paysucess'>Get Started</Link></p></button>
             </div>

           </div>
        </div>
        <Footer/>
    </>
  )
}

export default TailoredJobs