import React from "react";
import Countdown from "./components/Countdown/Countdown";
import TodoList from "./components/TodoList/TodoList";
import GithubProfiles from "./components/GithubProfiles/GithubProfiles";
import Drawing from "./components/Drawing/Drawing";
import Quiz from "./components/Quiz/Quiz";

const Labs = () => {
  return (
    <div>
      <Countdown />
      <TodoList />
      <GithubProfiles />
      <Drawing />
      <Quiz />
    </div>
  );
};

export default Labs;
