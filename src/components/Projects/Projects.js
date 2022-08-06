import React from "react";
import styled from "styled-components";
import { projectsData } from "./projects.data";

const Container = styled.div`
  padding: 40px 40px;
  align-items: center;
  border-bottom: 1px solid #ebcf63;
`;

const ListContainer = styled.div`
  padding: 50px 0px 30px 0px;
  display: flex;
  gap: 30px;
`;

const StyledAnchor = styled.a`
  display: block;
`;

const Box = styled.div`
  border-radius: 20px;
  display: flex;
  background-color: #1d2951;
  width: 400px;
  height: 400px;
  flex-direction: column;
  padding: 20px 40px;
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
  width: 400px;
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
          <div>
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
                  <Img src={project.img} alt={"alt"} />
                </StyledAnchor>
              </Descp>
            </Box>
          </div>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Projects;
