import React, { useState } from 'react';
import './navbar.scss';
import { motion } from "framer-motion";
import { Link } from 'react-scroll'; 
import Logo from "../navbar/addd.png";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 1 }}
          >
            <img src={Logo} alt="Logo" />
          </motion.span>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="HomePage" smooth={true} duration={500} activeClass="active">Home</Link></li>
            <li><Link to="Aboutme" smooth={true} duration={500} activeClass="active">About</Link></li>
            <li><Link to="Skills" smooth={true} duration={500} activeClass="active">Skills</Link></li>
            <li><Link to="Projects" smooth={true} duration={500} activeClass="active">Projects</Link></li>
            <li><Link to="Contact" smooth={true} duration={500} activeClass="active">Contact</Link></li>
          </ul>
          <hr />
        </nav>
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <div className={`sidebar ${sidebar ? 'active' : ''}`}>
        <span className="close-btn" onClick={toggleSidebar}>&times;</span>
        <ul>
          <li><Link to="HomePage" smooth={true} duration={500} onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="Aboutme" smooth={true} duration={500} onClick={toggleSidebar}>About</Link></li>
          <li><Link to="Skills" smooth={true} duration={500} onClick={toggleSidebar}>Skills</Link></li>
          <li><Link to="Projects" smooth={true} duration={500} onClick={toggleSidebar}>Projects</Link></li>
          <li><Link to="Contact" smooth={true} duration={500} onClick={toggleSidebar}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
