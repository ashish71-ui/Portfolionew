import React, { useRef } from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Type: 'aboutme' gets a subtle code drift, 'projects' gets a structural grid drift
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className='parallax'>
      {/* Dynamic Gradient Background based on theme */}
      <div className="parallax-overlay" />

      <motion.div style={{ y: yText, opacity: opacityText }} className="content-wrapper">
        <span className="section-label">01 // EXECUTE</span>
        <h1>{type === 'aboutme' ? "IDENTIFY_SELF" : 'PORTFOLIO_BIN'}</h1>
        
        <div className="title">
          <p>
            {type === 'aboutme' 
              ? "Bridging the gap between Computer Engineering principles and creative web architecture. Focused on high-fidelity user interfaces and system efficiency."
              : "A curated collection of digital builds, ranging from full-stack architectures to experimental frontend components."
            }
          </p>
        </div>
      </motion.div>

      {/* Instead of a JPEG, we use a code/grid pattern for that tech look */}
      <motion.div className="parallax-stars" style={{ y: yBg }} />
      <motion.div className="parallax-planets" style={{ y: yBg }} />
    </div>
  );
}

export default Parallax;