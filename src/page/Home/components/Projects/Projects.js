import React from "react";
import styled from "styled-components";
import { projectsData } from "./projects.data";

const Container = styled.div`
  padding: 50px 30px 120px 30px;
  align-items: stretch;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
`;

const ListContainer = styled.div`
  margin: 0 auto;
  padding: 50px 0px 10px 0px;
  display: grid;
  gap: 30px;
  width: 80vw;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(
      200px,
      1fr
    );
  justify-content: center;
  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

const Box = styled.a`
  border-radius: 20px;
  text-decoration: none;
  color: inherit;
  display: flex;
  width: 100%;
  background-color: #1d2951;
  flex-direction: column;
  padding: 0px;
  cursor: pointer;
  transition: 0.3s ease;
  justify-content: space-between;

  :hover {
    transform: translateY(-20px);
  }

  @media (max-width: 700px) {
    grid-template-columns: auto;
    padding: 0px;
  }
`;

const Heading = styled.div`
  margin-top: 100px;
  justify-content: center;
  display: flex;
`;

const Descp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
  gap: 30px;
  text-align: center;
  font-size: 18px;
`;

const Img = styled.img`
  width: 100%;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const LanguageList = styled.p`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Heading>
        <h2>Stuff that I have Built</h2>
      </Heading>
      <ListContainer>
        {projectsData.map((project) => (
          <Box href={project.link}>
            <Descp>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <LanguageList>
                {project.languages.map((language) => (
                  <p>{language}</p>
                ))}
              </LanguageList>
            </Descp>
            <Img src={project.img} alt={"alt"} />
          </Box>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Projects;
