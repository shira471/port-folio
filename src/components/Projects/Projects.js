import React from "react";
import "./Projects.css";

const Projects = () => {
  const baseUrl = process.env.PUBLIC_URL;

  const projects = [
    {
      title: "Resume Website – Personal Portfolio in React",
      description:
        "Developed a personal website using React to showcase my resume in English...",
      link: "https://github.com/shira471/port-folio",
      videoUrl: baseUrl + "/website-video.mp4",
    },
    {
      title: "Cake Recognition App – AI-powered cake identification and allergen detection",
      description:
        "Designed and implemented a mobile app...",
      link: "https://github.com/shira471/cake-allergene",
      videoUrl: baseUrl + "/cake-video.mp4",
    },
    {
      title: "Community Volunteering Management - Desktop Application",
      description:
        "Developed a desktop application to manage help requests...",
      link: "https://github.com/shira471/dotNet5785_4033_4273",
      videoUrl: baseUrl + "/volunteer-video.mp4",
    },
    {
      title: "Bioinformatics Project on Parkinson's Disease",
      description:
        "Developed a Python tool to identify drugs and molecules related to Parkinson's...",
    },
  ];

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
                <source src={project.videoUrl} type="video/mp4" />
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
