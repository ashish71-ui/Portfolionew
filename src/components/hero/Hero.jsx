import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';
import './hero.scss';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Smooth mouse movement for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 25;
    const moveY = (clientY - window.innerHeight / 2) / 25;
    x.set(moveX);
    y.set(moveY);
  };

  return (
    <div className='hero' onMouseMove={handleMouseMove}>
      <ParticleBackground />

      <div className="Wrapper">
        <motion.div 
          className="textContainer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ x: springX, y: springY }}
        >
          <div className="status-badge">
            <span className="pulse-dot" />
            <span className="status-text">SYSTEM_ACTIVE // V2.0.26</span>
          </div>

          <motion.div className="title-wrapper">
            {/* <motion.h2 className="sub-title">Computer Engineer</motion.h2> */}
            <motion.h1 className="main-title">
              Engineering <br />
              <span className="accent-text">Performance</span> <br />
              Through Code
            </motion.h1>
          </motion.div>

          {/* <div className="cta-group">
            <motion.a 
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(100, 255, 218, 0.2)" }}
              href="/cv.pdf" 
              className="btn-primary"
            >
              <span className="btn-content">EXPLORE_CV</span>
            </motion.a>
            <Link to="Projects" smooth={true} className="btn-secondary">
              SEE_WORKS_02/
            </Link>
          </div> */}

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <motion.a
              href="/AshishDhakalCV.pdf"
              download
              className="btn-primary-cta"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="btn-text">📥 DOWNLOAD_CV</span>
              <span className="btn-arrow">→</span>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="visualContainer"
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <div className="glass-panel">
            <div className="window-header">
              <div className="window-controls">
                <span className="red"></span><span className="yellow"></span><span className="green"></span>
              </div>
              <div className="window-tab">Main.tsx</div>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  <span className="comment">// Initializing creative engine</span><br/>
                  <span className="keyword">import</span> {'{'} Engineer {'}'} <span className="keyword">from</span> <span className="str">'@core'</span>;<br/><br/>
                  <span className="keyword">export default</span> <span className="func">function</span> <span className="var">Profile</span>() {'{'}<br/>
                  &nbsp;&nbsp;<span className="keyword">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;Passion</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">focus</span>=<span className="str">"Scalability"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">design</span>=<span className="str">"Minimal"</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">/&gt;</span><br/>
                  &nbsp;&nbsp;);<br/>
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="window-footer">
              <span>UTF-8</span>
              <span>TypeScript</span>
              <span>100%</span>
            </div>
          </div>
          
          {/* Floating HUD element */}
            {/* <motion.div 
                className="hud-card"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
                <div className="hud-stat">
                <span className="label">Uptime</span>
                <span className="value">99.9%</span>
                </div>
            </motion.div> */}
        </motion.div>
      </div>

      {/* <div className="scroll-indicator">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mouse-icon"
        />
        <span>SCROLL</span>
      </div> */}
    </div>
  );
}

export default Hero;