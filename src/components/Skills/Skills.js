import React from "react";
import styled from "styled-components";
import { skillsData } from "./skills.data";

const Container = styled.div`
  padding: 20px 20px;
  border-bottom: 1px solid #ebcf63;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

const Heading = styled.div`
  justify-content: center;
  display: flex;
`;

const Descp = styled.div`
  color: #ebcf63;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Heading>
        <h2>Things that I have Learnt</h2>
      </Heading>
      <ListContainer>
        {skillsData.map((skill) => (
          <div>
            <p>{skill.icon}</p>
            <h4>{skill.name}</h4>
            <Descp>
              <p>{skill.description}</p>
            </Descp>
          </div>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Skills;
