import React from "react";
import styled from "styled-components";
import { introData as data } from "./intro.data";
import { StyledAnchor } from "../../../../components/Anchor";
// import image8 from "../images/pic.jpg";

const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);

  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 80px;
  row-gap: 20px;

  > h2,
  h3 {
    text-align: center;
  }

  > h1 {
    font-size: 60px;
    text-align: center;
  }

  > p {
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 700px) {
    padding: 50px 40px;
  }
`;

const Button = styled.div`
  border-radius: 4px;
  border: 2px solid #ebcf63;
  cursor: pointer;
  background: #b29eb5;
  white-space: nowrap;
  padding: 10px 20px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #191c29;
  margin-top: 15px;

  &:hover {
    background: #ebcf63;
    transition: all 0.3s ease-out;
  }
`;

const Intro = () => {
  return (
    <Container id="intro">
      <h2> {data.nameintro}</h2>
      <h1>{data.description1}</h1>
      <h3>{data.description2}</h3>
      <StyledAnchor
        href={
          "https://drive.google.com/file/d/14O6KMT2yQnzvKVvGZMgsn5vBOXc-c5tl/view?usp=sharing"
        }
      >
        <Button>Download My Resume</Button>
      </StyledAnchor>
      <p> {data.description3}</p>
    </Container>
  );
};
export default Intro;
