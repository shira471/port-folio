import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Resume Website – Personal Portfolio in React",
    description:
      "Developed a personal website using React to showcase my resume in English. The site features a clean, responsive user interface and presents my background and skills in a professional and accessible manner.",
    link: "https://github.com/shira471/port-folio",
    videoUrl: "/website-video.mp4",
  },
  {
    title: "Cake Recognition App – AI-powered cake identification and allergen detection",
    description:
      "Designed and implemented a mobile app that lets users upload a cake image for analysis, identification, and allergen detection using a trained CNN built with TensorFlow. Developed with a React Native client, a Python server, and a CNN trained on a Kaggle dataset, communicating via a REST API.",
    link: "https://github.com/shira471/cake-allergene",
    videoUrl: "/cake-video.mp4", 
  },
  {
    title: "Community Volunteering Management - Desktop Application",
    description:
      "Developed a desktop application to manage help requests and volunteers. The application enables volunteers to log in, browse available requests, and select the ones they wish to assist with. Built with C# and WPF, the application has a three-layer architecture and uses Singleton and Factory design patterns.",
    link: "https://github.com/shira471/dotNet5785_4033_4273",
    videoUrl: "/volunteer-video.mp4",
  },
  {
    title: "Bioinformatics Project on Parkinson's Disease",
    description:
      "Developed a Python tool to identify drugs and molecules related to Parkinson's disease using NCBI data mining techniques. Created algorithms for automated data extraction and analysis. Supervised by Dr. Avraham Samson, this project will be published in Nature magazine.",
  },
];

const Projects = () => {
  return (
    <section className="projects-container">
      <div className="projects-row">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

                {project.videoUrl && (
              <video className="project-video" controls>
                <source src={`${process.env.PUBLIC_URL}${project.videoUrl}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};


export default Projects;