import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .todo-form {
    display: flex;
    width: 100%;
  }

  .todo-input {
    padding: 14px 32px 14px 16px;
    border-radius: 5px 0 0 5px;
    width: 100%;
    border: 2px solid #ebcf63;
    outline: none;
    background: transparent;
    color: #b29eb5;
  }

  .todo-input::placeholder {
    color: #fff;
  }

  .todo-button {
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(90deg, #ebcf63 0%, #2575ac 100%);
    color: #fff;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .todo-input.edit {
    border: 2px solid #149fff;
  }

  .todo-button.edit {
    background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
    padding: 16px 22px;
  }
`;

const Input = ({ edit, onSubmit }) => {
  const [input, setInput] = useState(edit ? edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <Container>
      <form className="todo-form" onSubmit={handleSubmit}>
        {edit ? (
          <>
            <input
              type="text"
              placeholder="Update your item"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add your plan"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button">Add Plan</button>
          </>
        )}
      </form>
    </Container>
  );
};

export default Input;
