import React from 'react'
import './navbar.scss'
import {motion} from "framer-motion"
import Logo from "../navbar/addd.png"
const Navbar = () => {
  return (
    <div >
        <header className="navbar">
        <div className="logo">

            <motion.span
            initial={{opacity:0 ,scale:0.5}}
            animate={{opacity:1 ,scale:1.5}}
            transition={{duration:1}}
            >
                <img src={Logo} alt="" />
                </motion.span>
        </div>
        <nav className="nav-links">
    <ul>
        <li><a href="#HomePage">Home</a></li>
        <li><a href="#Aboutme">About</a></li>
        <li><a href="#Aboutme">Skills</a></li>
        <li><a href="#Project1">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
        {/* <li><a href="#Blogs">Blogs</a></li> */}
    </ul>
</nav>
    </header>

      
    </div>
  )
}

export default Navbar
