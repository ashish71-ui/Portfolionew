import React from 'react';
import './contact.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    
    <div className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-details">
          <div className="contact-info">
            <h1>LET'S  CONNECT TOGETHER</h1>
            <div className="info-item">
              <div className='icons'>
              <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
              <span>aashishdhakal71@gmail.com</span>
              </div>
            
            </div>
            <div className="info-item">
              <div className="icons">
              <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
             <div>
             <span>9868932919</span>
             </div>
              
            </div>
            <div className="info-item">
              <div className="icons">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
             <div>
             <span>Kathmandu, Nepal</span>
             </div>
             
            </div>
            <div className="social-media-section">
        
        <div className="social-media-icons">
          <a href="https://github.com/ashish71-ui" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.facebook.com/aashish.dhakal.54/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/aashish-dhakal-b72723213/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
          </div>
        
        </div>

        <div className="contact-form">
          <form id="contactForm" className="form" action="#" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <div className="submit-button-container">
              <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
