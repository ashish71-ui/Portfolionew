import React, { useEffect, useState } from "react";
import { FaPython, FaReact, FaDatabase, FaBrain } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import "./skills.scss";

const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB", ext: ".jsx", syntax: "export const Hero = () => {\n  return <section />\n}", cmd: "npm install framer-motion" },
  { name: "Python", icon: FaPython, color: "#3776AB", ext: ".py", syntax: "def process_data(input):\n    return [x*2 for x in input]", cmd: "pip install numpy pandas" },
  { name: "Django", icon: SiDjango, color: "#092E20", ext: ".py", syntax: "class UserProfile(models.Model):\n    user = models.OneToOneField(User)", cmd: "python manage.py migrate" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", ext: ".js", syntax: "const core = async () => {\n  await system.boot();\n}", cmd: "node system.js --init" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1", ext: ".sql", syntax: "SELECT name, role FROM users\nWHERE status = 'active';", cmd: "psql -d brain_db" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", ext: ".css", syntax: "@tailwind base;\n@tailwind components;", cmd: "npm install -D tailwindcss" },
];

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [terminalStep, setTerminalStep] = useState(0);

  useEffect(() => {
    let i = 0;
    const currentSyntax = skills[activeIdx].syntax;
    setDisplayText("");
    setTerminalStep(0);

    const typing = setInterval(() => {
      if (i < currentSyntax.length) {
        setDisplayText(currentSyntax.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => setTerminalStep(1), 500);
      }
    }, 30);

    const timer = setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % skills.length);
    }, 5000);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, [activeIdx]);

  return (
    <section className="skill-processor">
      {/* Section Header */}
      <div className="section-title">
        <h2 data-text="NEURAL_ENGINE">NEURAL_ENGINE</h2>
        <div className="subtitle">SYSTEM_CAPABILITIES_REPORT.LOG</div>
      </div>

      <div className="processor-wrapper">
        {/* LEFT: INPUT NODES (All Visible) */}
        <div className="input-section">
          <div className="system-label"><span>01</span> PERIPHERAL_BUS</div>
          <div className="skill-list">
            {skills.map((skill, i) => (
              <div key={skill.name} className={`skill-node ${activeIdx === i ? 'active' : 'standby'}`}>
                <div className="node-info">
                  <div className="icon-box" style={{ color: activeIdx === i ? skill.color : '#444' }}>
                    <skill.icon />
                  </div>
                  <span className="skill-label" style={{ color: activeIdx === i ? '#fff' : '#444' }}>
                    {skill.name}
                  </span>
                </div>
                
                <div className="stream-path">
                  {activeIdx === i && (
                    <motion.div 
                      className="data-chunk"
                      animate={{ x: [0, 180], opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ background: skill.color, boxShadow: `0 0 12px ${skill.color}` }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER: BRAIN & TERMINAL */}
        <div className="brain-section">
          <div className="brain-container">
            <div className="brain-shell">
              <FaBrain className="brain-icon" style={{ 
                color: skills[activeIdx].color,
                filter: `drop-shadow(0 0 20px ${skills[activeIdx].color}80)` 
              }} />
            </div>
            <div className="core-glow" style={{ background: skills[activeIdx].color }}></div>
          </div>

          <div className="mini-terminal">
            <div className="term-header">
              <div className="term-dots"><span/><span/><span/></div>
              <span>neural_shell_v1.0</span>
            </div>
            <div className="term-body">
              <div className="term-line">
                <span className="prompt">ashish@dev:~$</span> 
                <span className="cmd"> {skills[activeIdx].cmd}</span>
              </div>
              {terminalStep === 1 && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="term-success">
                  {">"} {skills[activeIdx].name} runtime_v2.4 loaded.
                </motion.div>
              )}
              <span className="cursor">_</span>
            </div>
          </div>
        </div>

        {/* RIGHT: DYNAMIC EDITOR */}
        <div className="output-section">
          <div className="system-label"><span>02</span> LOGIC_COMPILATION</div>
          <div className="editor-window">
            <div className="editor-tab">
              <span className="file-icon" style={{ color: skills[activeIdx].color }}>●</span>
              {skills[activeIdx].name.toLowerCase()}{skills[activeIdx].ext}
            </div>
            <div className="editor-body">
              <div className="line-numbers">
                {displayText.split('\n').map((_, i) => <span key={i}>{i + 1}</span>)}
              </div>
              <pre className="code-content">
                <code>{displayText}</code>
                <span className="typing-cursor" style={{ background: skills[activeIdx].color }}> </span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;