import React from "react";
import Countdown from "./components/Countdown/Countdown";
import TodoList from "./components/Todo/TodoList";
import GithubProfiles from "./components/GithubProfiles/GithubProfiles";

const Labs = () => {
  return (
    <div>
      <Countdown />
      <TodoList />
      <GithubProfiles />
    </div>
  );
};

export default Labs;
