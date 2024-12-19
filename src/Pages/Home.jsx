import React from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import bag from '../Images/bag.png'
import hand from '../Images/hand.png'
import note from '../Images/note.png'
import per from '../Images/per.png'
import people from '../Images/people.png'
import google from '../Images/google.png';
import canva from '../Images/canva.png';
import slack from '../Images/slack.png';
import zoom from '../Images/zoom.png';
import coin from '../Images/vectorr.png';
import web from '../Images/webflow.png';
import mail from '../Images/mailchimp.png';
import micro from '../Images/microsoft.png';
import { useState,useEffect,useRef } from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import Slider from '../Components/Slider';
import { PopupButton } from 'react-calendly';

function Home() {
  const [isInView, setIsInView] = useState(false); 
  const logoCarouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); 
      },
      { threshold: 0.5 } 
    );

    if (logoCarouselRef.current) {
      observer.observe(logoCarouselRef.current);
    }

    return () => {
      if (logoCarouselRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(logoCarouselRef.current);
      }
    };
  }, []);

  return (
    <>
     <div className="Home">
        <Navbar/>
        <div className="container">
          <div className="home-cont"> 
        <div className="text">
         <h1 data-aos='fade-right'>First AI Job application and support platform</h1>
        </div>
        <div className="sub-text" data-aos='fade-right' data-aos-delay='500'>
         <p>
         Land your dream job with personalized preparation and expert guidance aided with our AI-powered job processing platform
         </p>
        </div>
        <div className="buttons">
            <PopupButton
              url='https://calendly.com/with_mentor_techies?primary_color=111D63'
              rootElement={document.getElementById("root")}
              text="Schedule Appointment"
              className='btn_schedule_appointment first'
            >
            </PopupButton>

            {/* <button className='secondd'> <Link to = '/assesment'>free cv review</Link> </button> */}
        </div>
        </div>
        </div>
       
    </div>
    
    <div className="container section-two"  ref={logoCarouselRef}>
            <p>We are trusted by these brands</p>
            <div className={`brand-logos ${isInView ? 'animate' : ''}`}>
             <img src={google} alt="" />
             <img src={canva} alt="" />
             <img src={slack} alt="" />
             <img src={zoom} alt="" />
             <img src={coin} alt="" />
             <img src={web} alt="" />
             <img src={mail} alt="" />
             <img src={micro} alt="" />
            </div>
            <h2 data-aos='fade-up'><b>Land your dream job faster</b> with personalized support every step of the way.</h2>
            <p data-aos='fade-up' data-aos-delay='200'>Never face the job search alone. Our app connects you with a dedicated mentor, personalizes your CV for success, and equips you with interview skills through realistic simulations and expert feedback. Land your dream job faster with all-in-one support.</p>
        </div>
        <div className="third-section">
            <div className="container">
          <h1>Unleash your full potential and land your dream job in 4 easy steps</h1>
          <div className="grid-sec" data-aos='fade-up'>
            <Card
            image={note}
            title="Get Career Roadmap"
            content= "Upload your CV for review analysis and initial feedback on key skills and experience"/>
              <Card
            image={hand}  
            title="Get real experience with expert guidance"
            content= "We take you into the real world of how to do in your chosen career beyond the theory knowledge"/>
              <Card
            image={per}  
            title="Stimulated Interview Sessionp"
            content= "UpPractice answering both behavioral and technical interview questions in a safe and supportive environment.load your CV for review analysis and initial feedback on key skills and experience"/>
              <Card
            image={bag}  
            title="Land the Job"
            content= "Track your job applications and schedule interviews with ease using our automated and streamlined platform"/>
          </div>
          </div>
        </div>
        <div className="fourth-seg">
          <div className="text-seg">
            <h4 data-aos='fade-up'>Interview Prep Consultation</h4>
            <h1 data-aos='fade-up' data-aos-delay='200'>
            Schedule an interview Prep Consultation on behavioral and technical interviews
            </h1>
            <p>Our professional human resource and career professionals are ready to guide you through.</p>
            <PopupButton
              url='https://calendly.com/with_mentor_techies?primary_color=111D63'
              rootElement={document.getElementById("root")}
              text="Schedule Appointment"
              className='btn_schedule_appointment'
            >
            </PopupButton>
          </div>
            <img src={people} alt="" data-aos='fade-up' />
         
        </div>
        <div className="slider">
          <div className="slider-content">
          <h2 style={{color:'#111d63'}}> Here is what our applicants are saying about us</h2>
          <Slider/>
          </div>
        
        </div>
        <Footer/>
    </>
  )
  
}

export default Home;