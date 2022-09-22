import React from "react";
import styled from "styled-components";
import { introData as data } from "./intro.data";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 80px;
  row-gap: 30px;

  > h1 {
    text-align: center;
  }

  @media (max-width: 700px) {
    padding: 50px 40px;
  }
`;

const Intro = () => {
  return (
    <Container id="intro">
      <h1> {data.description}</h1>
      <p>{data.nameintro}</p>
      <p> {data.motto}</p>
      <img height={300} width={300} src={data.img} alt={"alt"} />
    </Container>
  );
};
export default Intro;
