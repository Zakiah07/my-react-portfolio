import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import Input from "./Input";

const Container = styled.div`
  padding: 30px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 500px;
  width: 100%;
  min-height: 600px;
  background: #1d2951;
  text-align: center;
  margin: 40px auto;
  border-radius: 20px;
`;

const Heading = styled.h1`
  font-size: 15px;
  margin-bottom: 20px;
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log({ todo });
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <Heading>
        <h1>Any Plan for Today ?</h1>
      </Heading>
      <Input onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </Container>
  );
};

export default TodoList;
