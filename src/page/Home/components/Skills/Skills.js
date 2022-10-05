import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { skillsData } from "./skills.data";

const Container = styled.div`
  padding: 40px 30px 0px 30px;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const ListContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 0;
  padding: 50px 40px 30px 40px;
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Heading = styled.div`
  justify-content: center;
  display: flex;
`;

const StarContainer = styled.div`
  color: #ebcf63;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 10px;
  font-size: 16px;
  text-align: center;
  transition: 0.3s ease;
  :hover {
    color: #ebcf63;
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Heading>
        <h2>Things that I have Learnt</h2>
      </Heading>
      <ListContainer>
        {skillsData.map((skill) => (
          <SkillBox>
            <>{skill.icon}</>
            <p>{skill.name}</p>
            <StarContainer>
              {new Array(skill.stars).fill("1").map(() => (
                <FaStar />
              ))}
            </StarContainer>
          </SkillBox>
        ))}
      </ListContainer>
    </Container>
  );
};

export default Skills;
