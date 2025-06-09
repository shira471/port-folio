import React from "react";
import './Contact.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const Contact=()=>(
    <section className='Contact'>
    <h1>Contact me:</h1>
    <div className='Contact-item'>
      <a href="tel:0584084178" className='Contact-link'>
        <FaPhone className="Contact-icon" />
        <span>058-4084178</span>
      </a>
    </div>
    <div className="Contact-item">
      <a href="mailto:syrhlpsy7@gmail.com" className='Contact-link'>
       <FaEnvelope className="Contact-icon" />
       <span>syrhlpsy7@gmail.com</span>
       </a>
    </div>
    <div className="Contact-item">
      <a href="https://www.linkedin.com/in/shira-alfasi-74027726b/" target="_blank" rel="noopener noreferrer" className="Contact-link">
        <FaLinkedin className="Contact-icon" />
        <span>LinkedIn</span>
        </a>
    </div>
    <div className="Contact-item">
  <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="Contact-link">
    <FaGithub className="Contact-icon" />
    <span>GitHub</span>
  </a>
</div>
<div className="Cv-item">
  <a href="/port-folio/updated resume.docx" download className="Contact-link">
    <FaFileDownload className="Contact-icon" />
    <span>Download CV</span>
  </a>
</div>
  </section>
);

export default Contact;
