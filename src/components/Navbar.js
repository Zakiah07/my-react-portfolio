import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledLink,
  StyledAnchor,
  StyledLinkExtended,
  StyledAnchorExtended,
} from "./Anchor";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import image7 from "../images/mylogoz.PNG";

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ebcf63;
  z-index: 2;
  background-color: #191c29;
  padding: 0 20px;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};

  @media (min-width: 700px) {
    height: 80px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 40px;
  font-weight: bold;

  @media (max-width: 700px) {
    display: none;
  }
`;

const RightContainer = styled.div`
  position: fixed;
  right: 40px;
`;

export const OpenLinksButton = styled.button`
  position: fixed;
  right: 0px;
  top: 15px;
  width: 90px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 10%;
  border-radius: 20px;
  position: fixed;
  left: 30px;
`;

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <Container extendNavbar={extendNavbar}>
      <Img src={image7} alt={"alt"} />
      <LinksContainer>
        <StyledAnchor href="/#intro">Intro</StyledAnchor>
        <StyledAnchor href="/#skills">Skills</StyledAnchor>
        <StyledAnchor href="/#projects">Projects</StyledAnchor>
        <StyledAnchor href="/#contacts">Contact Me</StyledAnchor>
        <RightContainer>
          <StyledLink to={"/labs"}>Labs</StyledLink>
        </RightContainer>
      </LinksContainer>
      <OpenLinksButton
        onClick={() => {
          setExtendNavbar((curr) => !curr);
        }}
      >
        {extendNavbar ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </OpenLinksButton>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <StyledAnchorExtended
            onClick={() => setExtendNavbar(false)}
            href="/#intro"
          >
            Intro
          </StyledAnchorExtended>
          <StyledAnchorExtended
            href="/#skills"
            onClick={() => setExtendNavbar(false)}
          >
            Skills
          </StyledAnchorExtended>
          <StyledAnchorExtended
            href="/#projects"
            onClick={() => setExtendNavbar(false)}
          >
            Projects
          </StyledAnchorExtended>
          <StyledAnchorExtended
            href="/#contacts"
            onClick={() => setExtendNavbar(false)}
          >
            Contact Me
          </StyledAnchorExtended>
          <StyledLinkExtended
            onClick={() => setExtendNavbar(false)}
            to={"/labs"}
          >
            Labs
          </StyledLinkExtended>
        </NavbarExtendedContainer>
      )}
    </Container>
  );
}

export default Navbar;
