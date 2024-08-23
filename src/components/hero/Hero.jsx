import React from 'react';
import { motion } from 'framer-motion'; 
import './hero.scss';
import Ashish from '../hero/ashish.png';
import CV from '../hero/AshishDhakalCV.pdf'; 
import { Link } from 'react-scroll'; 
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
                        <motion.a href={CV} download="AshishDhakal_CV.pdf">
                            <motion.button variants={textVariants}>Download CV</motion.button>
                        </motion.a>
                        <Link to="Contact" smooth={true} duration={500} activeClass="active"> <motion.button variants={textVariants} id="contact">
                        Contact Me
                        </motion.button></Link>
                       
                    </motion.div>
                </motion.div>
                <div className="imageContainer">
                    <motion.img src={Ashish} alt="Ashish" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
