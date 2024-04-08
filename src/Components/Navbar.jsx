import React, { useEffect, useRef, useState } from "react";
import './../Styles/Navbar.css';
import image from './../Images/UIT-Logo-big.png';
import {motion} from 'framer-motion' ;

function Navbar(){
    const navRef = useRef();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [hoveredTab, setHoveredTab] = useState(null);
    const [activeTab, setActiveTab] = useState(null);

    const handleHover = (tab) => {
        if(windowWidth > 1024){
            setHoveredTab(tab);
        }
    }

    const handleLeave = () => {
        if(windowWidth > 1024){
            setHoveredTab(null);
        }
    }

    const handleToggleAccordion = (tab) => {
        if (windowWidth <= 1024) {
          setActiveTab(activeTab === tab ? null : tab);
        }
      };


    useEffect(()=>{
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); 
        }
    },[])

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <img src={image} className="uitLogo"/>
            <nav ref={navRef}>
                <div className="Menu" onMouseEnter={()=>handleHover("menu1")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu1")}>
                    <a href='#' className="menu1">
                        <span>About</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
                            <path d={activeTab==="menu1"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1024 ? "white" : "black"} stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        {(windowWidth <= 1024) && (
                            <div className={activeTab==="menu1"?"stick active":"stick"}></div>
                        )}
                    </a>
                    {(hoveredTab === "menu1" && windowWidth > 1024) && (
                        <Item1/>
                    )}
                    {(windowWidth <= 1024 && activeTab === "menu1") && (
                        <Item1/>
                    )}
                </div>

                <div className="Menu" onMouseEnter={()=>handleHover("menu2")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu2")}>
                    <a href='#'>
                        <span>Academic</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
                            <path d={activeTab==="menu2"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1024 ? "white" : "black"} stroke-width="2" stroke-linecap="round"/>
                        </svg>

                        {(windowWidth <= 1024) && (
                            <div className={activeTab==="menu2"?"stick active":"stick"}></div>
                        )}
                    </a>
                    {(hoveredTab === "menu2" && windowWidth > 1024) && (
                        <Item2/>
                    )}
                    {(windowWidth <= 1024 && activeTab === "menu2") && (
                        <Item2/>
                    )}
                </div>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H33" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16H48" stroke="#1C1D20" stroke-width="2" stroke-linecap="round"/>
                    <path d="M16 24H32" stroke="#1C1D20" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </header>
    )
}

const Item1 = ()=>{
    return (
    <motion.div class="item1"
    initial={{opacity:0, y:-10}}
    animate={{opacity: 1, y : 10}}
    transition={{ duration: 0.5}}
    >
        <div class="frame">
            <ul>
                <li class="title">About UIT</li>
                <br/>
                <li>Vision/Mission</li>
                <li>History</li>
                <li>FAQS</li>
            </ul>
        </div>
        <div class="frame">
            <ul>
                <li class="title">Our Facilities</li>
                <br/>
                <li>Library</li>
                <li>LMS</li>
                <li>Email Service</li>
            </ul>
        </div>
        <div class="frame">
            <ul>
                <li class="title">Our Locations</li>
                <br/>
                <li>Contacts</li>
                <li>Maps</li>
                <li>Campus</li>
            </ul>
        </div>                                
    </motion.div>
    )
}

const Item2 = ()=>{
    return (
        <motion.div class="item2"
        initial={{opacity:0, y:-10}}
        animate={{opacity: 1, y : 10}}
        transition={{ duration: 0.5}}
        >
        <div class="frame">
            <ul>
                <li class="title">Academic Programs</li>
                <br/>
                <li>Degree</li>
                <li>Diploma</li>
            </ul>
        </div>
        <div class="frame">
            <ul>
                <li class="title">Student Support Service</li>
                <br/>
                <li>LMS</li>
                <li>Student Registeration</li>
                <li>Email Service</li>
                <li>Library</li>
            </ul>
        </div>
        <div class="frame">
            <ul>
                <li class="title">Admission</li>
                <br/>
                <li>Calendar</li>
                <li>Academic Rules</li>
                <li>Campus</li>
            </ul>
        </div>                                
    </motion.div>
    )
}
export default Navbar;