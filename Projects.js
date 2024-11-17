import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of project one.',
      image: 'project1.jpg',
    },
    {
      title: 'Project Two',
      description: 'A brief description of project two.',
      image: 'project2.jpg',
    },
    // Add more projects here
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
