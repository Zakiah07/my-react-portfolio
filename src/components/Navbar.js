import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 40px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #ebcf63;
    transition: all 0.3s ease;
  }
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
        <StyledAnchor href="#skills">Skills</StyledAnchor>
        <StyledAnchor href="#projects">Projects</StyledAnchor>
        <StyledAnchor href="#contacts">Contact Me</StyledAnchor>
        <RightContainer>
          <StyledLink to={"/labs"}>Labs</StyledLink>
        </RightContainer>
      </LinksContainer>
    </Container>
  );
};

export default Navbar;
