import React from "react";
import styled from "styled-components";
import { projectsData } from "./projects.data";

const Container = styled.div`
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const ListContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  border-bottom: 1px solid black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <h4>Projects</h4>
      <ListContainer>
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
              <img height={400} width={600} src={project.img} alt={"alt"} />
            </a>
          </div>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Projects;
