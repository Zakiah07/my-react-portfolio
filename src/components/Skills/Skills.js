import React from "react";
import styled from "styled-components";
import { skillsData } from "./skills.data";

const Container = styled.div`
  padding: 40px 30px 20px 30px;
`;

const ListContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  margin: 0;
  column-gap: 150px;
  padding: 50px 40px 30px 40px;
  row-gap: 50px;
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
