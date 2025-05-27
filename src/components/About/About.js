import React from "react";
import "./About.css";

const About = () => (
  <section className="timeline-container">
    <div className="timeline">

      <div className="timeline-item">
        <div className="card-graphic">
             <img
              src="/port-folio/graffic.jpeg"
              alt="Graphic Certificate"
              className="graphic-image"
              />
            <span className="card-title">Graphics Certificate</span>
            </div>
        <div className="timeline-card">
          <div className="card-content">
            <p>Mahat - Training for Certified Engineer and Technician  <p>Oct 2019 - Oct 2020</p></p>
            
            <ul>
              <li><strong>Graphic Design:</strong></li> 
              <li> Proficient in Illustrator, Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="timeline-item">
             <div className="card-bio">
             <img
              src="/port-folio/bio.jpeg"
              alt="bio Certificate"
              className="bio-image"
              />
           <div className="card-header">
            <span className="card-title">B.Sc. in Bioinformatics</span>
          </div>
          </div>
        <div className="timeline-card">
          <div className="card-content">
            <p>Lev Academic Center, Jerusalem    <p>Oct 2022 - Mar 2025</p></p>
           
            <ul>
              <li><strong>Relevant Coursework:</strong>
              <ul className="course"><li> Object Oriented Programming</li><li>Data Structures</li>  <li>C++ Programming</li> <li>Artificial Intelligence</li> <li>Deep Learning</li> <li>Algorithm Analysis</li></ul></li>
              <li><strong>Laboratory Experience:</strong></li>
              <li> Biochemistry, Molecular Biology</li>
              <li><strong>Notable Achievement:</strong></li>
              <li> Developed and led a Bioinformatics project on Parkinson's Disease, selected for publication in <em>Nature</em> magazine</li>
            </ul>
          </div>
        </div>
      </div>
      

      <div className="timeline-item">
         
  <div className="card-header">
    <img
              src="/port-folio/skill.jpeg"
              alt="skill Certificate"
              className="skill-image"
              />
    <span className="card-title">Skills</span>
  </div>
  <div className="skills-grid">
    {[
      "Python", "REST API", "C++", "SQL", "MySQL", "C#", "Data Structures",
      "JavaScript", "OOP", "Linux", "R", "WPF", "Git", "TensorFlow", "React"
    ].map((skill, index) => (
      <div key={index} className="skill-card">
        {skill}
      </div>
    ))}
  </div>
</div>
</div>
  </section>
);

export default About;
