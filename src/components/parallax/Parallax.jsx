import React, { useRef } from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]); 

  return (
    <div ref={ref} className='parallax' style={{
      background: type === "aboutme"
        ? "linear-gradient(180deg,#111132,#0c0c1d)"
        : "linear-gradient(180deg,#111132,#505064)"
    }}>
      <motion.h1 style={{ y: yText }}>{type === 'aboutme' ? "About Me" : 'My Projects'}</motion.h1>
      <motion.div className="title">
          <motion.h1 style={{ y: yText }}>
            As a computer engineering student, I have developed my skills to
            craft interactive and functional web applications while exploring
            new technologies. I am also passionate about exploring the latest
            technologies in various IT-related fields to contribute to impactful
            projects and achieve meaningful outcomes.
          </motion.h1>
        </motion.div>
      <motion.div className="paraimg" style={{ y: yBg }}>
       
      </motion.div>
    </div>
  );
}

export default Parallax;
