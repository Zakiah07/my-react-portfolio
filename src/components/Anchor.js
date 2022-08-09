import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #ebcf63;
    transition: all 0.3s ease;
  }
`;
