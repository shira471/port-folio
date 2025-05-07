import React from "react";
import './Projects.css';
const Projects=()=>(
  <section className="Projects">
      <h2>Resume Website – Personal Portfolio in React</h2>
        <div className="text-2xl font-bold mb-2">
          <p>
          Developed a personal website using React to showcase my resume in English. The site features a clean, responsive user interface and presents my background and skills in a professional and accessible manner.
          </p>
          </div>
      <h2>Cake Recognition App – AI-powered cake identification and allergen detection</h2>
      <div className="text-2xl font-bold mb-2">
      <p>
      Designed and implemented a mobile app that lets users upload a cake image for 
      analysis, identification, and allergen detection using a trained CNN built with 
      TensorFlow. Developed with a React Native client, a Python server, and a CNN 
      trained on a Kaggle dataset, communicating via a REST API.
      </p>
      </div>
      <div className="text-2xl font-bold mb-2">
          <h2>Community Volunteering Management - Desktop Application</h2>
          <p>
          Developed a desktop application to manage help requests and volunteers. 
          The application enables volunteers to log in, browse available requests, 
          and select the ones they wish to assist with. Administrators can also 
          access the platform to submit new requests. Built with C# and WPF, the 
          application has a three-layer architecture and uses Singleton and Factory 
          design patterns, with data stored and managed through XML.
          </p>
      </div>
      <div className="text-2xl font-bold mb-2">
      <h2>Bioinformatics Project on Parkinson's Disease</h2>
      <p>
      Developed a Python tool to identify drugs and molecules related to Parkinson's 
      disease using NCBI data mining techniques. Created algorithms for automated 
      data extraction and analysis. Supervised by Dr. Avraham Samson, this project 
      will be published in Nature magazine.
  </p>
      </div>
  </section>
);


export default Projects;
