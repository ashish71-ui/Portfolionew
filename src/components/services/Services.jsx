import React from "react";
import "./services.scss";
import { animate, motion } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <motion.div className="title">
          <motion.h1>
            As a computer engineering student, I have developed my skills to
            craft interactive and functional web applications while exploring
            new technologies. I am also passionate about exploring the latest
            technologies in various IT-related fields to contribute to impactful
            projects and achieve meaningful outcomes.
          </motion.h1>
        </motion.div>
        <motion.button>Education and Experience</motion.button>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <motion.h2>School</motion.h2>
          <p>
            Shree Birendra Bidhya Mandir <br />
            Location: Tikapur, Kailali <br />
            Duration: 2010-2017 <br />
            Completed foundational education with a strong focus on academic
            excellence and extracurricular activities, setting a solid base for
            future studies.
          </p>
        </motion.div>
        <motion.div className="box">
          <h2>+2</h2>
          <p>
            National School of Science and Technology <br />
            Location: Lainchaur, Kathmandu <br />
            Duration: 2017-2018 <br />
            Pursued +2 education with a specialization in science, developing
            analytical and problem-solving skills essential for engineering
            studies.
          </p>
        </motion.div>
        <motion.div className="box">
          <h2>Bachelor</h2>
          <p>
            Advanced College of Engineering And Management <br />
            Location: Kalanki, Kathmandu <br />
            Duration: 2019-Present <br />
            Currently pursuing a Bachelor's degree in Computer Engineering,
            focusing on software development, system design, and emerging
            technologies.
          </p>
        </motion.div>
        <motion.div className="box">
          <h2>Work Experience</h2>
          <p>
            Intern (Remote) <br />
            Duration: December 2023 - <br /> February 2024 <br />
            Company: Pahadi Research LLC, <br /> Seattle, USA <br />
            Assisted in various research and development projects. Collaborated
            with a remote team to contribute to impactful research initiatives.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
