import React from "react";
import styled from "styled-components";
import { introData as data } from "./intro.data";

const Container = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Intro = () => {
  return (
    <Container id="intro">
      <h1> {data.description}</h1>
      <p>{data.nameintro}</p>
      <p> {data.motto}</p>
      <img height={400} width={400} src={data.img} alt={"alt"} />
    </Container>
  );
};
export default Intro;
