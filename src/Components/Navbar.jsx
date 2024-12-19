import React, { useState } from 'react';
import logo from '../Images/image.png';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { MdArrowRightAlt } from "react-icons/md";
import {Link} from 'react-router-dom'

function Navbar() {
    const [isMobile, setMobile] = useState(false);
    const [login, set_login] = useState(false)

    return (
        <>
            <div className="navbar container">
                <Link className="logo" to={"/"}>
                    <img src={logo} alt="logo" />
                    <p>Enforca</p>
                </Link>

                <nav className={isMobile ? 'links-active' : 'links'}>
                    <ul>
                        <li><p><Link to='/tailoredJobs'>Schedule Consultation </Link></p>{ isMobile && <MdArrowRightAlt/>}</li>

                        {/* <li><p><Link to='/ResumeFeedback'>Review Resume</Link></p> { isMobile && <MdArrowRightAlt/>}</li> */}
                    </ul>
                    
                    {/* {
                        login ?
                        <button><p><Link to='/dashboard'>My Dashboard</Link></p></button>
                        :
                        <button><p><Link to="/login">Login</Link></p></button>
                    } */}
                </nav>              

                <div className="menu-bar" onClick={() => setMobile(!isMobile)}>
                    {isMobile ? <TfiClose /> : <HiOutlineMenuAlt4 />}
                </div>
            </div>
        </>
    );
}

export default Navbar;
