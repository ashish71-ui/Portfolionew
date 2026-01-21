import React, { useState } from 'react';
import "./projects.scss";
import { motion, AnimatePresence } from "framer-motion";
// Replace FolderJson with Folder
import { Github, ExternalLink, FileCode, Folder, Terminal, ChevronRight, X, Search, Settings } from "lucide-react";import Cosmetic from '../projects/cosmetic.png'
import News from '../projects/news.jpg'
import Society from '../projects/society.png'

const items = [
  {
    id: 1,
    fileName: "cosmetic_store.ts",
    title: "Cosmetic Shop",
    img: Cosmetic,
    github: "https://github.com/ashish71-ui/Cosmeticshop",
    liveDemo: "https://luxmeestyle.netlify.app",
    tags: ["React", "E-commerce", "UI/UX"],
    metadata: {
      type: "Frontend Application",
      purpose: "Product Discovery",
      features: ["Dynamic Pricing", "Image Gallery", "Responsive Design"]
    }
  },
  {
    id: 2,
    fileName: "news_aggregator.py",
    title: "News Magazine",
    img: News,
    github: "https://github.com/ashish71-ui/NewsMagazine",
    liveDemo: "https://github.com/ashish71-ui/NewsMagazine",
    tags: ["API", "JavaScript", "News"],
    metadata: {
      type: "Data Fetching Hub",
      purpose: "Real-time Updates",
      features: ["REST API Integration", "Async Content Loading", "Article Sorting"]
    }
  },
  {
    id: 3,
    fileName: "society_connect.exe",
    title: "Society Engagement System",
    img: Society,
    github: "https://github.com/Mansish01/Tech_Army",
    liveDemo: "https://github.com/Mansish01/Tech_Army",
    tags: ["Full Stack", "Community", "Database"],
    metadata: {
      type: "Social Protocol",
      purpose: "Civic Engagement",
      features: ["Complaint Ticketing", "Expert Consultation", "Citizen Networking"]
    }
  }
];

const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">PROJECTS // SHIPPED_TO_PROD</h2>
        <p className="projects-subtitle">
          A curated set of builds — clean UI, real functionality, and deploy-ready polish.
        </p>
      </div>
      <div className="ide-container">
        {/* TOP BAR */}
        <div className="ide-top">
          <div className="window-controls">
            <span className="dot red" /> <span className="dot yellow" /> <span className="dot green" />
          </div>
          <div className="ide-search">
            <Search size={14} /> <span>ashish-dhakal-portfolio — {items[activeIdx].fileName}</span>
          </div>
          <div className="ide-actions"><Settings size={14} /></div>
        </div>

        <div className="ide-main">
          {/* SIDEBAR */}
          <div className="ide-sidebar">
            <div className="label">EXPLORER</div>
            <div className="folder">
              <ChevronRight size={14} /> <Folder size={14} color="#64ffda" /> <span>src/builds</span>
            </div>
            <div className="file-list">
              {items.map((item, i) => (
                <motion.div 
                  key={item.id} 
                  className={`file-item ${activeIdx === i ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  whileHover={{ x: 5 }}
                >
                  <FileCode size={14} /> {item.fileName}
                </motion.div>
              ))}
            </div>
          </div>

          {/* EDITOR AREA */}
          <div className="ide-editor">
            <div className="tabs">
              <div className="tab active">
                <FileCode size={14} color="#64ffda" /> {items[activeIdx].fileName} <X size={12} />
              </div>
            </div>

            <div className="editor-view">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="project-split"
                >
                  {/* LEFT: Code-Style Description */}
                  <div className="code-content">
                    <pre>
                      <code>
                        <span className="keyword">const</span> <span className="variable">project</span> = {"{"} <br />
                        &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"{items[activeIdx].title}"</span>,<br />
                        &nbsp;&nbsp;<span className="property">type</span>: <span className="string">"{items[activeIdx].metadata.type}"</span>,<br />
                        &nbsp;&nbsp;<span className="property">purpose</span>: <span className="string">"{items[activeIdx].metadata.purpose}"</span>,<br />
                        &nbsp;&nbsp;<span className="property">tags</span>: [<br />
                        {items[activeIdx].tags.map(tag => (
                          <span key={tag}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"{tag}"</span>,<br /></span>
                        ))}
                        &nbsp;&nbsp;],<br />
                        &nbsp;&nbsp;<span className="property">features</span>: [<br />
                        {items[activeIdx].metadata.features.map(feat => (
                          <span key={feat}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"{feat}"</span>,<br /></span>
                        ))}
                        &nbsp;&nbsp;]<br />
                        {"}"};
                      </code>
                    </pre>
                    <div className="project-links">
                      <a href={items[activeIdx].github} target="_blank" rel="noreferrer" className="btn-ide">
                        <Github size={16} /> git_push
                      </a>
                      <a href={items[activeIdx].liveDemo} target="_blank" rel="noreferrer" className="btn-ide primary">
                        <ExternalLink size={16} /> npm_run_dev
                      </a>
                    </div>
                  </div>

                  {/* RIGHT: Visual Preview */}
                  <div className="visual-content">
                    <div className="terminal-label"><Terminal size={12} /> UI_PREVIEW</div>
                    <div className="preview-window">
                       <img src={items[activeIdx].img} alt="Snapshot" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;