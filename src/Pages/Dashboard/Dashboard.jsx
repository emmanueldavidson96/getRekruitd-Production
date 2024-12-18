import React, { useState } from 'react';
import logo from '../../Images/image.png';
import { Link } from 'react-router-dom';
import { CiGrid41 } from "react-icons/ci";
import { LuLocateFixed } from "react-icons/lu";
import { FaBusinessTime } from "react-icons/fa";
import { PiLaptopLight } from "react-icons/pi";
import { GoPerson } from "react-icons/go";
import { RiHomeLine } from "react-icons/ri";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import Jobtracker from './Jobtracker';
import Myprofile from './Myprofile';
import Myschedule from './Myschedule';
import Overview from './Overview';
import Techlab from './Techlab';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [active, setActive] = useState("overview");
  const [iss, Sww] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className="dash">
        <div  className={iss?'dashboard container active':'dashboard container'}>
          <aside>
            <div className="top">
              <div className="log dashh">
                <img src={logo} alt="logo" />
                <h2 style={{ fontSize: '18px', cursor:"pointer" }} onClick={() => navigate("/")}>GetReKuitd</h2>
                <div className="close" onClick={()=>Sww(!iss)}>
                  <TbLayoutSidebarLeftCollapse/>
                </div>
              </div>
              <div className="sidebar">
                <div className='ttl'
                 onClick={()=>setActive('overview')}
                 style={active === 'overview' ? activeLinks : {}}> 
                 <span><CiGrid41/></span> 
                 <h3 className={iss? 'show-link': ''}>Overview</h3>
                </div>

                <div className='ttl'
                 onClick={()=>setActive('jobtracker')}
                 style={active === 'jobtracker' ? activeLinks : {}}> 
                 <span><LuLocateFixed/></span> 
                 <h3 className={iss? 'show-link': ''}>Job Tracker</h3>
                </div>

                <div className='ttl'
                 onClick={()=>setActive('myschedule')}
                 style={active === 'myschedule' ? activeLinks : {}}> 
                 <span><FaBusinessTime/></span>
                 <h3 className={iss? 'show-link': ''}>My Schedule</h3>
                </div>

                <div className='ttl'
                 onClick={()=>setActive('techlab')}
                 style={active === 'techlab' ? activeLinks : {}}> 
                 <span><PiLaptopLight/></span>
                 <h3 className={iss? 'show-link': ''}>Tech Lab</h3>
                </div>

                <div className='ttl'
                 onClick={()=>setActive('myprofile')}
                 style={active === 'myprofile' ? activeLinks : {}}> 
                 <span><GoPerson/></span>
                 <h3 className={iss? 'show-link': ''}>My Profile</h3>
                </div>

              </div>
            </div>
            <div className="logout">
            <div className='lg'>
                <Link to='/'>
                <span><RiHomeLine/></span>
                <h3>Return Home</h3></Link>
                </div>
            </div>
          </aside>

        <div className="sidebar-content-display">
           {active === 'overview' && <Overview/>}
           {active === 'jobtracker' && <Jobtracker/>}
           {active === 'myprofile' && <Myprofile/>}
           {active === 'techlab' && <Techlab/>}
           {active === 'myschedule' && <Myschedule/>}

        </div>


        </div>
      </div>
    </>
  );
};

 const activeLinks = {
      color:'#4042e2',
      borderLeft: '6px solid #4042E2',
      transform:'translateX(2px)',
      padding:'10px'
      
 }

export default Dashboard;
