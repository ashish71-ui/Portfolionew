import React from 'react';
import './contact.scss';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Facebook, Linkedin, Send, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-bg-text">CONNECT</div>
      
      <motion.div 
        className="contact-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT SIDE: SYSTEM LOGS & INFO */}
        <div className="contact-details">
          <div className="terminal-header">
            <Terminal size={18} />
            <span>SYSTEM_LOG // CONNECTION_PORT</span>
          </div>
          
          <div className="contact-info-content">
            <h1 className="glitch-text">INITIALIZE_TALK</h1>
            <p className="summary">
              Available for full-stack architecture, ERPNext implementation, 
              and creative digital engineering. Let's build the future.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="icon-circle"><Mail size={20} /></div>
                <div className="text">
                  <label>EMAIL</label>
                  <span>aashishdhakal71@gmail.com</span>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle"><Phone size={20} /></div>
                <div className="text">
                  <label>COMM_LINK</label>
                  <span>+977 9868932919</span>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-circle"><MapPin size={20} /></div>
                <div className="text">
                  <label>COORDINATES</label>
                  <span>Kathmandu, Nepal [27.7172° N]</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/ashish71-ui" target="_blank" rel="noreferrer"><Github /></a>
              <a href="https://linkedin.com/in/aashish-dhakal" target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook /></a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: MESSAGE PROTOCOL */}
        <div className="contact-form-container">
          <div className="form-header">
            <span className="status-dot"></span>
            <span>SECURE_MESSAGE_PROTOCOL</span>
          </div>
          
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="IDENTITY (Name)" required />
              <div className="input-focus-line"></div>
            </div>
            
            <div className="input-group">
              <input type="email" placeholder="COMM_ADDR (Email)" required />
              <div className="input-focus-line"></div>
            </div>
            
            <div className="input-group">
              <textarea placeholder="MISSION_DETAILS (Message)" rows="5" required></textarea>
              <div className="input-focus-line"></div>
            </div>

            <button type="submit" className="submit-btn">
              <span>TRANSMIT_DATA</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;