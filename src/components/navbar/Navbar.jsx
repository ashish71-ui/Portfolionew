import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import "./navbar.scss";

const navLinks = [
  { name: "Home", to: "HomePage" },
  { name: "About", to: "About" },
  { name: "Skills", to: "Skills" },
  { name: "Projects", to: "Projects" },
  { name: "Contact", to: "Contact" },
  { name: "Blog", to: "Hobby" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        {/* Logo - Tech Aesthetic */}
        <Link to="HomePage" smooth spy>
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-bracket">{"<"}</span>
            Ashish
            <span className="logo-bracket">{"/>"}</span>
          </motion.div>
        </Link>

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

        {/* Download CV Button */}
        <motion.a
          href="/AshishDhakalCV.pdf"
          download
          className="btn-download-cv"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>DOWNLOAD_CV</span>
        </motion.a>

        {/* Theme Toggle */}
        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>

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
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <motion.a
                  href="/AshishDhakalCV.pdf"
                  download
                  className="mobile-download-cv"
                  onClick={() => setIsOpen(false)}
                >
                  📥 DOWNLOAD_CV
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <button className="mobile-theme-toggle" onClick={() => { toggleTheme(); setIsOpen(false); }}>
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;