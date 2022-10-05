import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #ebcf63;
    transition: all 0.3s ease;
    transform: scale(1.2);
  }
`;

export const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #ebcf63;
    transition: all 0.3s ease;
    transform: scale(1.2);
  }
`;

export const StyledLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: inherit;
  text-decoration: none;
  margin: 10px;
`;

export const StyledAnchorExtended = styled.a`
  color: white;
  font-size: x-large;
  font-family: inherit;
  text-decoration: none;
  margin: 10px;
`;
