import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <LinksContainer>
        <Link to="#">Intro</Link>
        <Link to="#">Skills</Link>
        <Link to="#">Projects</Link>
        <Link to="#">Contact Me</Link>
      </LinksContainer>
    </Container>
  );
};

export default Navbar;
