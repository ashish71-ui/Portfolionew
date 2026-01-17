import React, { useRef, useEffect, useState } from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState('');
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const text = type === 'aboutme' 
      ? '$ ./initialize_profile.sh' 
      : '$ git clone portfolio.git';
    
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTerminalText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [type]);

  // Floating code particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  const codeSymbols = ['{', '}', '<', '>', '/', '(', ')', ';', '[', ']', '=', '+'];

  return (
    <div ref={ref} className='parallax'>
      {/* Animated Grid Background */}
      <div className="grid-container">
        <motion.div 
          className="grid-lines"
          style={{ 
            x: mousePos.x * 0.5,
            y: mousePos.y * 0.5
          }}
        />
      </div>

      {/* Floating Code Particles */}
      <div className="code-particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            initial={{ 
              x: `${particle.x}vw`, 
              y: `${particle.y}vh`,
              opacity: 0 
            }}
            animate={{ 
              y: [`${particle.y}vh`, `${particle.y - 30}vh`],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          >
            {codeSymbols[particle.id % codeSymbols.length]}
          </motion.div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        className="glow-orb orb-1"
        style={{
          x: mousePos.x * -1,
          y: mousePos.y * -1
        }}
      />
      <motion.div 
        className="glow-orb orb-2"
        style={{
          x: mousePos.x * 1.5,
          y: mousePos.y * 1.5
        }}
      />

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText, scale }} 
        className="content-wrapper"
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">~/ashish/portfolio</div>
        </div>

        {/* Terminal Command */}
        <motion.div 
          className="terminal-command"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {terminalText}<span className="cursor">_</span>
        </motion.div>

        {/* Section Label */}
        <motion.span 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          01 // EXECUTE
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {type === 'aboutme' ? (
            <>
              IDENTIFY<span className="accent-text">_SELF</span>
            </>
          ) : (
            <>
              PORTFOLIO<span className="accent-text">_BIN</span>
            </>
          )}
        </motion.h1>

        {/* Description */}
        <motion.div 
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p>
            {type === 'aboutme' 
              ? "Bridging the gap between Computer Engineering principles and creative web architecture. Focused on high-fidelity user interfaces and system efficiency."
              : "A curated collection of digital builds, ranging from full-stack architectures to experimental frontend components."
            }
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="stats-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          {type === 'aboutme' ? (
            <>
              <div className="stat">
                <span className="stat-value">4+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">50+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">∞</span>
                <span className="stat-label">Learning Mode</span>
              </div>
            </>
          ) : (
            <>
              <div className="stat">
                <span className="stat-value">FULL-STACK</span>
                <span className="stat-label">Architecture</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">UI/UX</span>
                <span className="stat-label">Design</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">MODERN</span>
                <span className="stat-label">Tech Stack</span>
              </div>
            </>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <motion.div className="parallax-stars" style={{ y: yBg }} />
      <motion.div 
        className="parallax-planets" 
        style={{ 
          y: yBg,
          rotateX: scrollYProgress
        }} 
      />
    </div>
  );
}

export default Parallax;