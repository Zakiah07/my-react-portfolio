import React from "react";
import { projectsData } from "./projects.data";

const Projects = () => {
  return (
    <div>
      <h4>Projects</h4>
      {projectsData.map((project) => (
        <div>
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          <p>
            {project.languages.map((language) => (
              <li>{language}</li>
            ))}
          </p>
          <a href={project.link}>
            <img height={400} width={900} src={project.img} alt={"alt"} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
