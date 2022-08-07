import React from "react";
import Contacts from "./components/Contacts/Contacts";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
