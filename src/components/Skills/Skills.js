import React from "react";
import styled from "styled-components";
import { skillsData } from "./skills.data";

const Container = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <h2>Skills</h2>
      {skillsData.map((skill) => (
        <div>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
          <p>{skill.icon}</p>
        </div>
      ))}
    </Container>
  );
};

export default Skills;
