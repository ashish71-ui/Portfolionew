import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';
import './hero.scss';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className='hero' onMouseMove={handleMouseMove}>
      <ParticleBackground />

      {/* Spotlight hidden on touch devices for better performance */}
      <motion.div 
        className="spotlight"
        animate={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(100, 255, 218, 0.05), transparent 80%)`
        }}
      />

      <div className="Wrapper">
        <motion.div 
          className="textContainer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="terminal-header">
            <span className="dot" /> <span className="path">~/ashish-dhakal</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            SOFTWARE ENGINEER
          </motion.h2>

          <motion.h1>
            Elevating Ideas <br />
            <span className="outline-text">Into Code.</span>
          </motion.h1>

          <p className="description">
            Specializing in high-performance full-stack applications with 
            a focus on <span className="highlight">minimalist design</span>.
          </p>

          <div className="buttons">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf" 
              className="btn-main"
            >
              DOWNLOAD_CV
            </motion.a>
            <Link to="Projects" smooth={true} className="btn-sub">
              VIEW_WORKS
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="visualContainer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="code-window">
            <div className="window-bar">
              <div className="btns"><span/><span/><span/></div>
              <span className="title">Main.ts</span>
            </div>
            <pre>
              <code>
                <span className="keyword">const</span> <span className="var">dev</span> = {"{"} <br/>
                &nbsp;&nbsp;role: <span className="str">'Engineer'</span>,<br/>
                &nbsp;&nbsp;focus: <span className="str">'Performance'</span><br/>
                {"}"};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;