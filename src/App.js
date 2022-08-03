import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

const AppBody = styled.main`
  margin-top: 60px;
`;

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
        <AppBody>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;
