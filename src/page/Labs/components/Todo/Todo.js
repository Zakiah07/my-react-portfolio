import React, { useState } from "react";
import Input from "./Input";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styled from "styled-components";

const Container = styled.div`
  .complete {
    text-decoration: line-through;
    opacity: 0.4;
  }

  .todo-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto;
    color: #fff;
    background: linear-gradient(90deg, #ffdd00 0%, #fbb034 100%);
    padding: 16px;
    border-radius: 5px;
  }

  .todo-row:nth-child(3n + 1) {
    background: linear-gradient(90deg, #9fa4c4 0%, #b3cdd1 100%);
  }

  .todo-row:nth-child(3n + 2) {
    background: linear-gradient(90deg, #a4508b 0%, #5f0a87 100%);
  }

  .icons {
    display: flex;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }

  .delete-icon {
    margin-right: 5px;
    color: #fff;
  }

  .edit-icon {
    color: #fff;
  }
`;

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);

    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Input edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <Container>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div>
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Todo;
