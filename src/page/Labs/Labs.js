import React from "react";
import Countdown from "./components/Countdown/Countdown";
import TodoList from "./components/Todo/TodoList";
import GithubProfiles from "./components/GithubProfiles/GithubProfiles";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
  padding: 50px 10px;
  /* justify-content: center; */
  align-items: center;
`;

const Labs = () => {
  return (
    <Container>
      <Countdown />
      <TodoList />
      <GithubProfiles />
    </Container>
  );
};

export default Labs;
