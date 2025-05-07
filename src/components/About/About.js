import React from "react";
import './About.css';

const About=()=>(
    <section className="About">
        <h2>Education & Certification</h2>
        <div className="education">
            <h3>B.Sc. in Bioinformatics</h3>
            <p className="institution">Lev Academic Center, jerusalem <span className="date">Oct 2022 - Mar 2025</span></p>
            <ul>
                <li><strong>Relevant Coursework:</strong>Object Oriented Programming, Data Structures, C++ Programming, Artificial Intelligence, Deep Learning, Algorithm Analysis</li>
                <li><strong>Laboratory Experience:</strong>Biochemistry, Molecular Biology</li>
                <li><strong>Notable Achievement:</strong>Developed and led a Bioinformatics project on Parkinson's Disease, selected for publication in <em>Nature</em> magazine</li>
            </ul>
        </div>
        <div className="education">
            <h3>Certificate in Graphics</h3>
            <p className="institution">Mahat - Training for Certified Engineer and Technician <span className="date">Oct 2019 - Oct 2020</span></p>
            <ul>
                <li><strong>Graphic Design:</strong>Proficient in Illustrator, Photoshop</li>
            </ul>
        </div>
        <div className="languages">
             <ul>
                <p>Python, REST API, CPP, SQL, My SQL, C#, Data Structures, JavaScript, OOP, Linux, R, WPF, Git, TensorFlow, React</p>
             </ul>
        </div>
    </section>
);

export default About;