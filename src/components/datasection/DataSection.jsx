import React from 'react';
import { motion } from 'framer-motion';
import "./dataSection.scss";

const DataSection = ({ type }) => {
  // Content based on type
  const isAbout = type === "aboutme";
  
  const consoleLines = isAbout 
    ? ["> Initializing Ashish.profile...", "> Fetching academic_data...", "> Loading core_skills...", "> Success."]
    : ["> Accessing project_vault...", "> Mapping repository_assets...", "> Rendering UI_previews...", "> Ready."];

  return (
    <section className="data-section">
      {/* 1. Subtle Moving Binary Background */}
      <div className="binary-bg">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div 
            key={i}
            initial={{ y: -100 }}
            animate={{ y: 1000 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
            className="binary-column"
          >
            {Math.random() > 0.5 ? "10110100" : "00101101"}
          </motion.div>
        ))}
      </div>

      <div className="content-container">
        {/* 2. Side Console Log (The "Unique" Feature) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="side-console"
        >
          {consoleLines.map((line, i) => (
            <motion.p 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* 3. Main Heading & Text */}
        <div className="text-block">
          <motion.h1
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {isAbout ? "PROFILE_SUMMARY" : "PROJECT_ARCHIVE"}
          </motion.h1>

          <motion.div 
            className="description"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isAbout ? (
              <p>
                Computer Engineering student focused on <span className="highlight">Full-Stack Architecture</span>. 
                I treat every line of code as a building block for scalable, 
                high-performance digital solutions.
              </p>
            ) : (
              <p>
                A documentation of my technical journey. These projects represent 
                challenges solved in <span className="highlight">Web Dev</span>, 
                <span className="highlight">Systems Engineering</span>, and 
                <span className="highlight">Algorithm Design</span>.
              </p>
            )}
            
            <motion.div 
              className="scroll-indicator"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              [ SCROLL_TO_EXPAND ]
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DataSection;