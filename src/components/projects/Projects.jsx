import React, { useState } from 'react';
import "./projects.scss";
import { motion } from "framer-motion";
import News from '../projects/news.jpg'
import Cosmetic from '../projects/cosmetic.png'
import Society from '../projects/society.png'

const items = [
  {
      id: 1,
      title: "Cosmetic Shop",
      img: Cosmetic,
      desc: "This is a simple website for a cosmetic shop where users can explore detailed information about products, view images, and check prices.",
      github: "https://github.com/ashish71-ui/Cosmeticshop",
      liveDemo: "https://luxmeestyle.netlify.app"
  },
  {
      id: 2,
      title: "News Magazine",
      img: News,
      desc: "This is a straightforward news magazine website that displays the latest news by fetching updates directly from an API.",
      github: "https://github.com/ashish71-ui/NewsMagazine",
      liveDemo: "https://github.com/ashish71-ui/NewsMagazine"
  },
  {
      id: 3,
      title: "Society Engagement System",
      img: Society,
      desc: " This is the web app used for connection of local bodies to their citizen where citizens can post a complaint and local bodies will try to solve it by discussing it with experts and other citizens.",
      github: "https://github.com/Mansish01/Tech_Army",
      liveDemo: "https://github.com/Mansish01/Tech_Army"
  },
  {
      id: 4,
      title: "Fourth Project",
      img: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "My name is Aashish Dhakal and this is a description for the fourth project.",
      github: "https://github.com/fourth-project",
      liveDemo: "https://fourth-project-demo.com"
  },
  {
      id: 5,
      title: "Fifth Project",
      img: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "My name is Aashish Dhakal and this is a description for the fifth project.",
      github: "https://github.com/fifth-project",
      liveDemo: "https://fifth-project-demo.com"
  },
  {
      id: 6,
      title: "Sixth Project",
      img: "https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "My name is Aashish Dhakal and this is a description for the sixth project.",
      github: "https://github.com/sixth-project",
      liveDemo: "https://sixth-project-demo.com"
  },
];

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView="animate"
    >
      <img src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <div className="project-buttons">
        <a href={item.github} target="_blank" rel="noopener noreferrer">
          <button>GitHub</button>
        </a>
        <a href={item.liveDemo} target="_blank" rel="noopener noreferrer">
          <button>Live Demo</button>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = items.slice(indexOfFirstProject, indexOfLastProject);

  const nextPage = () => {
    if (currentPage < Math.ceil(items.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="projects">
      <div className="navbar-space"></div> 
      <div className="myproject">
        <h1>My Work</h1>
      </div>
      <motion.div
        className="project-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
         whileInView="animate"
      >
        {currentProjects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </motion.div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} className="prev-button">
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(items.length / projectsPerPage)} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
