import React from "react";
import styled from "styled-components";
import { StyledLink, StyledAnchor } from "./Anchor";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ebcf63;
  background-color: #191c29;
  padding: 20px 20px;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;

  @media screen and (max-width: 420px) {
    margin: 0;
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 20px 100px;
    height: 60px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 40px;
  font-weight: bold;
`;

const RightContainer = styled.div`
  position: fixed;
  right: 40px;
`;

const Navbar = () => {
  return (
    <Container>
      <LinksContainer>
        <StyledAnchor href="/#intro">Intro</StyledAnchor>
        <StyledAnchor href="/#skills">Skills</StyledAnchor>
        <StyledAnchor href="/#projects">Projects</StyledAnchor>
        <StyledAnchor href="/#contacts">Contact Me</StyledAnchor>
        <RightContainer>
          <StyledLink to={"/labs"}>Labs</StyledLink>
        </RightContainer>
      </LinksContainer>
    </Container>
  );
};

export default Navbar;
