import React from "react";
import styled from "styled-components";
import { projectsData } from "./projects.data";

const Container = styled.div`
  padding: 20px 20px;
  align-items: center;
  border-bottom: 1px solid #ebcf63;
`;

const ListContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  gap: 20px;
`;

const StyledAnchor = styled.a`
  display: block;
`;

const Box = styled.div`
  border: 4px solid rebeccapurple;
  border-radius: 30px;
  display: block;
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
  height: auto;
  width: 100%;
`;

// const Image = styled.div`
//   border-radius: 30px;
// `;

// const LanguageUsed = styled.p`
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
// `;

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
                {/* <LanguageUsed> */}
                <p>
                  {project.languages.map((language) => (
                    <p>{language}</p>
                  ))}
                </p>
                {/* </LanguageUsed> */}
                <StyledAnchor href={project.link}>
                  {/* <Image> */}
                  <img height={200} width={400} src={project.img} alt={"alt"} />
                  {/* </Image> */}
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
