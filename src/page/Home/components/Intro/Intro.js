import React from "react";
import styled from "styled-components";
import { introData as data } from "./intro.data";
import image8 from "../images/pic.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 80px;
  row-gap: 30px;

  > h1,
  p {
    text-align: center;
  }

  @media (max-width: 700px) {
    padding: 50px 40px;
  }
`;

const Img = styled.img`
  border-radius: 20px;
  position: fixed;
  left: 30px;
`;

const Intro = () => {
  return (
    <Container id="intro">
      <Img src={image8} alt={"alt"} />
      <h1> {data.nameintro}</h1>
      <p>{data.description}</p>
      <p> {data.motto}</p>
      <img height={300} width={300} src={data.img} alt={"alt"} />
    </Container>
  );
};
export default Intro;
