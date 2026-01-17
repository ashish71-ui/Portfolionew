import React from "react";
import "./services.scss";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Terminal } from "lucide-react";

const Experience = () => {
  const work = [
    {
      company: "Pahadi Research LLC",
      role: "R&D Intern (Remote)",
      date: "Dec 2023 - Feb 2024",
      loc: "Seattle, USA",
      tasks: ["Collaborative Research", "Impactful Initiatives", "System Testing"]
    }
  ];

  const education = [
    { type: "Bachelor", name: "ACEM", major: "Computer Engineering", date: "2019-Present", status: "85%" },
    { type: "+2 Science", name: "NIST", major: "Physical Science", date: "2017-2018", status: "100%" },
    { type: "School", name: "SBBB", major: "Foundational", date: "2010-2017", status: "100%" }
  ];

  return (
    <div className="experience-section">
      <div className="wrapper">
        
        {/* --- WORK EXPERIENCE PART (Git Branch Style) --- */}
        <div className="section-block">
          <div className="title-group">
            <Briefcase size={32} className="icon" />
            <h2>PROFESSIONAL_PATH</h2>
          </div>
          
          <div className="work-timeline">
            {work.map((item, i) => (
              <motion.div 
                className="work-item" 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="node-line"><div className="node-dot" /></div>
                <div className="work-content">
                  <span className="date-tag">{item.date}</span>
                  <h3>{item.role} <span className="at">@</span> {item.company}</h3>
                  <p className="location">{item.loc}</p>
                  <ul className="task-list">
                    {item.tasks.map((t, idx) => <li key={idx}><Terminal size={12} /> {t}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- EDUCATION PART (Module Card Style) --- */}
        <div className="section-block">
          <div className="title-group">
            <GraduationCap size={32} className="icon" />
            <h2>ACADEMIC_MODULES</h2>
          </div>
          
          <div className="edu-grid">
            {education.map((edu, i) => (
              <motion.div 
                className="edu-card" 
                key={i}
                whileHover={{ y: -5, borderColor: "#64ffda" }}
              >
                <div className="card-header">
                  <span className="type">{edu.type}</span>
                  <Code2 size={16} />
                </div>
                <h3>{edu.name}</h3>
                <p className="major">{edu.major}</p>
                <div className="stats">
                  <span>DATE: {edu.date}</span>
                  <div className="progress-mini"><motion.div initial={{width:0}} whileInView={{width: edu.status}} className="bar"/></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;