import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';
import "./navbar.scss";

const navLinks = [
  { name: "Home", to: "HomePage" },
  { name: "About", to: "Aboutme" },
  { name: "Skills", to: "Skills" },
  { name: "Projects", to: "Projects" },
  { name: "Contact", to: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        {/* Logo - Tech Aesthetic */}
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-bracket">{"<"}</span>
          Ashish
          <span className="logo-bracket">{"/>"}</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="desktop-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to} smooth spy activeClass="active-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger - Animated */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Mobile Sidebar - Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="mobile-sidebar"
          >
            <ul className="mobile-list">
              {navLinks.map((link, i) => (
                <motion.li 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link to={link.to} smooth onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;