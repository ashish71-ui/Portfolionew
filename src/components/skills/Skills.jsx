import React, { useEffect, useState } from "react";
import { FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiJavascript } from "react-icons/si";
import { SiMongodb, SiFlutter, SiPandas } from "react-icons/si";
import { SiReact as SiReactNative } from "react-icons/si";
import { SiErpnext, SiFrappe } from "react-icons/si";

import { motion } from "framer-motion";
import { Zap, Code2, Sparkles, Binary } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import "./skills.scss";

const skills = [
  { 
    name: "React", 
    icon: FaReact, 
    color: "#61DAFB", 
    ext: ".jsx", 
    syntax: "export const Hero = () => {\n  return <section />\n}", 
    cmd: "npm install framer-motion",
    category: "Frontend"
  },
  { 
    name: "Python", 
    icon: FaPython, 
    color: "#3776AB", 
    ext: ".py", 
    syntax: "def process_data(input):\n    return [x*2 for x in input]", 
    cmd: "pip install numpy pandas",
    category: "Backend"
  },
  { 
    name: "Django", 
    icon: SiDjango, 
    color: "#092E20", 
    ext: ".py", 
    syntax: "class UserProfile(models.Model):\n    user = models.OneToOneField(User)", 
    cmd: "python manage.py migrate",
    category: "Backend"
  },
  { 
    name: "JavaScript", 
    icon: SiJavascript, 
    color: "#F7DF1E", 
    ext: ".js", 
    syntax: "const core = async () => {\n  await system.boot();\n}", 
    cmd: "node system.js --init",
    category: "Core"
  },
  { 
    name: "SQL", 
    icon: FaDatabase, 
    color: "#4479A1", 
    ext: ".sql", 
    syntax: "SELECT name, role FROM users\nWHERE status = 'active';", 
    cmd: "psql -d brain_db",
    category: "Database"
  },
  { 
    name: "Tailwind", 
    icon: SiTailwindcss, 
    color: "#06B6D4", 
    ext: ".css", 
    syntax: "@tailwind base;\n@tailwind components;", 
    cmd: "npm install -D tailwindcss",
    category: "Frontend"
  },
  { 
    name: "ERPNext", 
    icon: SiErpnext, 
    color: "#4F46E5", 
    ext: ".py", 
    syntax: "frappe.get_doc('Sales Invoice', docname)\n.submit()", 
    cmd: "bench get-app erpnext",
    category: "ERP"
  },
  { 
    name: "Frappe", 
    icon: SiFrappe, 
    color: "#1F2937", 
    ext: ".py", 
    syntax: "@frappe.whitelist()\ndef get_data():\n    return frappe.db.get_list('User')", 
    cmd: "bench new-site mysite.local",
    category: "Backend"
  },
  { 
    name: "MongoDB", 
    icon: SiMongodb, 
    color: "#47A248", 
    ext: ".js", 
    syntax: "db.users.find({ status: 'active' })", 
    cmd: "mongosh",
    category: "Database"
  },
  { 
    name: "React Native", 
    icon: SiReactNative,
    color: "#61DAFB", 
    ext: ".jsx", 
    syntax: "export default () => <View><Text>Hello</Text></View>", 
    cmd: "npx react-native init app",
    category: "Mobile"
  },
  
  { 
    name: "Flutter", 
    icon: SiFlutter, 
    color: "#02569B", 
    ext: ".dart", 
    syntax: "Widget build(_) => Scaffold(body: Text('Hi'))", 
    cmd: "flutter create app",
    category: "Mobile"
  },
  { 
    name: "Pandas", 
    icon: SiPandas, 
    color: "#150458", 
    ext: ".py", 
    syntax: "df.groupby('city').sum()", 
    cmd: "pip install pandas",
    category: "Data"
  },
];

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [terminalStep, setTerminalStep] = useState(0);
  const { theme } = useTheme();

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
    <section className={`enhanced-skills ${theme}-theme`}>
      {/* Animated Background */}
      <div className="skills-bg">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="skills-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="skills-header"
        >
          <div className="header-title">
           
            <h2 className="main-title">MY TOOLKIT</h2>
           
          </div>
          
          <p className="header-subtitle">
            <Binary className="inline-icon" size={16} />
            NEURAL_INTERFACE.v3.0
          </p>
        </motion.div>

        {/* Console Layout - Side by Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="console-layout"
        >
          {/* Left Side - Tools Grid */}
          <div className="console-left">
            <div className="tools-grid">
              {skills.map((skill, i) => (
                <motion.button
                  key={skill.name}
                  className={`tool-button ${activeIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="tool-icon" style={{ color: skill.color }}>
                    {React.createElement(skill.icon, { size: 28 })}
                  </div>
                  <span className="tool-name">{skill.name}</span>
                  {activeIdx === i && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side - Code Preview Terminal */}
          <div className="console-right">
            <div className="code-window">
              <div className="code-header">
                <div className="code-tab">
                  <div
                    className="code-indicator"
                    style={{ backgroundColor: skills[activeIdx].color }}
                  />
                  <span className="code-filename">
                    {skills[activeIdx].name.toLowerCase()}{skills[activeIdx].ext}
                  </span>
                </div>
                <Code2 size={16} className="code-icon" />
              </div>
              <div className="code-body">
                <div className="code-numbers">
                  {displayText.split('\n').map((_, i) => (
                    <div key={i} className="line-number">{String(i + 1).padStart(2, '0')}</div>
                  ))}
                </div>
                <pre className="code-content">
                  <code>
                    {displayText}
                    <motion.span
                      className="code-cursor"
                      style={{ backgroundColor: skills[activeIdx].color }}
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;