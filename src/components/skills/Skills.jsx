import React, { useRef } from "react";
import "./skills.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";

// Variants for fade-in animation
const variants = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Django", icon: <SiDjango />, color: "#092E20" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "DRF", icon: <SiDjango />, color: "#092E20" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "SQL", icon: <FaDatabase />, color: "#003B57" },
];

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="parallax">
      <motion.div className="tools" style={{ y: yBg }} variants={variants} initial="initial" whileInView="animate">
        <motion.h2 style={{ y: yText }} variants={variants}>
          TOOLS I KNOW
        </motion.h2>
      </motion.div>
      <motion.div
        className="skills-section"
        style={{ y: yBg }}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        {skills.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={variants}>
            <div className="icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="name">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
