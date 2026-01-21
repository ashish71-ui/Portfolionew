import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import "./DataSection.scss";

const DataSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10% 0px" });
  
  // 1. Perspective Tilt Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

  function handleMouseMove(e) {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  // 2. Advanced Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0.2, 0.8], [0, 1]), { stiffness: 50 });
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

 const stats = [
  { label: "Energy Source", value: "Music × Code", pct: "100%" },
  { label: "Thinking Style", value: "Logical yet Creative", pct: "94%" },
  { label: "What Drives Me", value: "Turning Ideas Into Reality", pct: "98%" }
];


  return (
    <section 
      className="about-blueprint" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* BACKGROUND SVG DECORATION */}
      <div className="svg-overlay">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <motion.path
            d="M 50,100 L 150,100 L 150,500 L 300,500"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="0.5"
            style={{ pathLength, opacity: 0.3 }}
          />
        </svg>
      </div>

      <motion.div 
        className="tilt-wrapper"
        style={{ rotateX, rotateY, y: contentY }}
      >
        <div className="content-inner">
          {/* TECHNICAL HEADER */}
          <div className="meta-container">
            <div className="scanner-line" />
            <div className="meta-header">
              <span className="code-text">ARCH_TYPE: FULL_STACK</span>
              <div className="line-grow" />
              <span className="code-text">LOC: 27.71N_85.32E</span>
            </div>
          </div>

          <div className="main-layout">
            {/* LEFT: CONTENT */}
            <div className="content-col">
              <motion.div 
                className="tag"
                animate={isInView ? { opacity: [0.4, 1, 0.4] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                // DATA_SPEC_V2.06
              </motion.div>
              
              <motion.h2 
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                Engineering <span className="outline">Digital</span> <br/>
                <span className="filled">Ecosystems</span>
              </motion.h2>

              <motion.p 
                className="description"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                I don't just build websites; I architect high-performance 
                digital environments. My workflow merges <strong>algorithmic efficiency</strong> 
                with intuitive human-centric design.
              </motion.p>
              <motion.div
                className="left-extra"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="mini-block">
                  <span className="mini-label">MODE</span>
                  <span className="mini-value">BUILD • LEARN • EVOLVE</span>
                </div>
                <div className="mini-block">
                  <span className="mini-label">FOCUS</span>
                  <span className="mini-value">Data, Design & Systems</span>
                </div>
                <div className="mini-block">
                  <span className="mini-label">STATUS</span>
                  <span className="mini-value">Always Improving</span>
                </div>
              </motion.div>
            </div>
            

            {/* RIGHT: INTERACTIVE SPECS */}
            <div className="specs-col">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(100, 255, 218, 0.05)" }}
                >
                  <div className="stat-info">
                    <span className="label">{stat.label}</span>
                    <span className="pct">{stat.pct}</span>
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="bar-bg">
                    <motion.div 
                      className="bar-fill" 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: stat.pct } : {}}
                      transition={{ duration: 1.5, delay: 1, ease: "anticipate" }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* FLOATING HUD ELEMENT */}
              <motion.div 
                className="hud-module"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="circle-loader" />
                <div className="hud-data">
                  <span>SYSTEM_STABLE</span>
                  <span className="blink">● LIVE_NODE</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DataSection;