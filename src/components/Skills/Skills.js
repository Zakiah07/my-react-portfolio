import React from "react";
import { skillsData } from "./skills.data";

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      {skillsData.map((skill) => (
        <div>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
          <p>{skill.icon}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
