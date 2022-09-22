import React from "react";
import styled from "styled-components";
import { projectsData } from "./projects.data";
import { StyledAnchor } from "../../../../components/Anchor";

const Container = styled.div`
  padding: 50px 30px 120px 30px;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const ListContainer = styled.div`
  margin: 0 auto;
  padding: 50px 0px 30px 0px;
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

const Box = styled.div`
  border-radius: 20px;
  display: flex;
  width: 100%;
  z-index: 0;
  background-color: #1d2951;
  flex-direction: column;
  padding: 10px 30px;
  position: relative;
  padding-bottom: 140px;
  height: auto;

  @media (max-width: 700px) {
    grid-template-columns: auto;
    min-height: 530px;
  }
`;

const Heading = styled.div`
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
`;

const Img = styled.img`
  width: 100%;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 20px;
  position: absolute;
  border-bottom-right-radius: 20px;
`;

const LanguageList = styled.p`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Button = styled.div`
  border-radius: 4px;
  border: 2px solid #ebcf63;
  cursor: pointer;
  background: #b29eb5;
  white-space: nowrap;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #191c29;

  &:hover {
    background: #ebcf63;
    transition: all 0.3s ease-out;
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Heading>
        <h2>Stuff that I have Built</h2>
      </Heading>
      <ListContainer>
        {projectsData.map((project) => (
          <Box>
            <Descp>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <LanguageList>
                {project.languages.map((language) => (
                  <p>{language}</p>
                ))}
              </LanguageList>
              <StyledAnchor href={project.link}>
                <Button>{project.buttontext}</Button>
              </StyledAnchor>
              <StyledAnchor href={project.link}>
                <Img src={project.img} alt={"alt"} />
              </StyledAnchor>
            </Descp>
          </Box>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Projects;
