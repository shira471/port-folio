import React from "react";
import "./About.css";
import { FaUniversity, FaCertificate, FaCode } from "react-icons/fa";

const About = () => (
  <section className="timeline-container">
    <div className="timeline">

      <div className="timeline-item">
        <div className="timeline-card">
          <div className="card-header">
            <FaUniversity className="icon" />
            <span className="card-title">B.Sc. in Bioinformatics</span>
          </div>
          <div className="card-content">
            <p>Lev Academic Center, Jerusalem</p>
            <p>Oct 2022 - Mar 2025</p>
            <ul>
              <li><strong>Relevant Coursework:</strong> Object Oriented Programming, Data Structures, C++ Programming, Artificial Intelligence, Deep Learning, Algorithm Analysis</li>
              <li><strong>Laboratory Experience:</strong> Biochemistry, Molecular Biology</li>
              <li><strong>Notable Achievement:</strong> Developed and led a Bioinformatics project on Parkinson's Disease, selected for publication in <em>Nature</em> magazine</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-card">
          <div className="card-header">
            <FaCertificate className="icon" />
            <span className="card-title">Graphics Certificate</span>
          </div>
          <div className="card-content">
            <p>Mahat - Training for Certified Engineer and Technician</p>
            <p>Oct 2019 - Oct 2020</p>
            <ul>
              <li><strong>Graphic Design:</strong> Proficient in Illustrator, Photoshop</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-card">
          <div className="card-header">
            <FaCode className="icon" />
            <span className="card-title">Skills</span>
          </div>
          <div className="card-content">
            <p>Python, REST API, C++, SQL, MySQL, C#, Data Structures, JavaScript, OOP, Linux, R, WPF, Git, TensorFlow, React</p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default About;
