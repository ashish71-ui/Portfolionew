import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Rocket, Zap, ChevronRight, Binary, Target } from "lucide-react";
import "./services.scss";

const data = {
  work: [
    { id: "SYS_01", company: "Geofinity Solutions", role: "System Developer", period: "2024 — PRES", details: ["Architecting Scalable Logic", "DB Optimization", "CI/CD Pipeline"], icon: <Rocket size={18}/> },
    { id: "SYS_02", company: "Pahadi Research", role: "R&D Intern", period: "2023 — 2024", details: ["Emerging Tech Research", "System QA", "Data Analysis"], icon: <Zap size={18}/> }
  ],
  education: [
    { id: "EDU_01", inst: "ACEM / TU", degree: "Computer Engineering", period: "2019 — 2024", score: "85%" },
    { id: "EDU_02", inst: "NIST", degree: "Physical Science", period: "2017 — 2018", score: "100%" }
  ]
};

const Services = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section className="terminal-blueprint">
      {/* Dynamic Background Noise */}
      <div className="grain-overlay" />
      
      <div className="container">
        <header className="terminal-header">
          <div className="status-bar">
            <span className="blink">●</span> SYSTEM_CORE_ACTIVE
          </div>
          <h2 className="glitch-title" data-text="EXPERIENCE_MAP">EXPERIENCE_MAP</h2>
        </header>

        <div className="schematic-grid">
          {/* Work Stream */}
          <div className="stream-section">
            <div className="stream-header">
              <Briefcase size={14} /> <span>ACTIVE_OPERATIONS</span>
            </div>
            
            <div className="nodes-container">
              {data.work.map((item, i) => (
                <SchematicNode 
                  key={i} 
                  item={item} 
                  type="work" 
                  onHover={setHoveredNode} 
                  isDimmed={hoveredNode && hoveredNode !== item.id}
                />
              ))}
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="schematic-divider">
            <div className="line" />
            <Binary size={16} className="icon" />
            <div className="line" />
          </div>

          {/* Education Stream */}
          <div className="stream-section">
            <div className="stream-header">
              <GraduationCap size={14} /> <span>KNOWLEDGE_STACK</span>
            </div>
            <div className="nodes-container">
              {data.education.map((item, i) => (
                <SchematicNode 
                  key={i} 
                  item={item} 
                  type="edu" 
                  onHover={setHoveredNode}
                  isDimmed={hoveredNode && hoveredNode !== item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SchematicNode = ({ item, type, onHover, isDimmed }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={`schematic-node ${isDimmed ? 'dim' : ''}`}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => setIsOpen(!isOpen)}
      layout
    >
      <div className="node-main">
        <div className="node-id">{item.id}</div>
        <div className="node-content">
          <div className="top">
            <span className="period">{item.period}</span>
            <span className="category">{type === 'work' ? item.company : item.score}</span>
          </div>
          <h3>{type === 'work' ? item.role : item.degree}</h3>
          {type === 'edu' && <p className="inst">{item.inst}</p>}
        </div>
        <motion.div 
          className="node-action"
          animate={{ rotate: isOpen ? 90 : 0 }}
        >
          <ChevronRight size={18} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && type === 'work' && (
          <motion.div 
            className="node-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="details-inner">
              {item.details.map((detail, idx) => (
                <div key={idx} className="detail-line">
                  <Target size={10} className="accent" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background Decorative Line */}
      <div className="node-wire" />
    </motion.div>
  );
};

export default Services;