import { createGlobalStyle, css } from "styled-components";

const body = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Philosopher", sans-serif;
    color: #b29eb5;
    /* color: #ebcf63; */
    font-size: 20px;
    background-color: #191c29;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${body}
`;

export default GlobalStyle;
