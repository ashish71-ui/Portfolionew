import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import './hero.scss';
import Ashish from '../hero/ashish.png';
import Resume from '../hero/resume.png';

// Define textVariants outside the component
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className="Wrapper">
                <motion.div 
                    className="textContainer" 
                    variants={textVariants} 
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Ashish Dhakal</motion.h2>
                    <motion.h1 variants={textVariants}>Computer Engineer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>Download CV</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    {/* <motion.img variants={textVariants} src={Resume} alt="Resume" /> */}
                </motion.div>
                <div className="imageContainer">
                    <motion.img src={Ashish} alt="Ashish" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
