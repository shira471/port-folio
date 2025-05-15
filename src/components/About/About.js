import React from "react";
import "./About.css";
import { FaUniversity, FaCertificate, FaCode } from "react-icons/fa";

const About = () => (
  <section className="timeline-container">
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-ellipse">
          <FaUniversity className="icon" />
          <span className="ellipse-label">B.Sc. in Bioinformatics</span>
        </div>
        <div className="tooltip">
          <h3>B.Sc. in Bioinformatics</h3>
          <p>Lev Academic Center, Jerusalem</p>
          <p>Oct 2022 - Mar 2025</p>
          <ul>
            <li><strong>Relevant Coursework:</strong> Object Oriented Programming, Data Structures, C++ Programming, Artificial Intelligence, Deep Learning, Algorithm Analysis</li>
            <li><strong>Laboratory Experience:</strong> Biochemistry, Molecular Biology</li>
            <li><strong>Notable Achievement:</strong> Developed and led a Bioinformatics project on Parkinson's Disease, selected for publication in <em>Nature</em> magazine</li>
          </ul>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-ellipse">
          <FaCertificate className="icon" />
          <span className="ellipse-label">Graphics Certificate</span>
        </div>
        <div className="tooltip">
          <h3>Certificate in Graphics</h3>
          <p>Mahat - Training for Certified Engineer and Technician</p>
          <p>Oct 2019 - Oct 2020</p>
          <ul>
            <li><strong>Graphic Design:</strong> Proficient in Illustrator, Photoshop</li>
          </ul>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-ellipse">
          <FaCode className="icon" />
          <span className="ellipse-label">Skills</span>
        </div>
        <div className="tooltip">
          <h3>Technical Skills</h3>
          <p>Python, REST API, C++, SQL, MySQL, C#, Data Structures, JavaScript, OOP, Linux, R, WPF, Git, TensorFlow, React</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
