import React from "react";
import styled from "styled-components";

const CounterBox = ({ number, label }) => {
  return (
    <ContainerBox>
      <h3>{number}</h3>
      <span>{label}</span>
    </ContainerBox>
  );
};

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  background-color: #1d2951;
  padding: 10px;
  border-radius: 20px;
  width: 100px;

  @media (max-width: 700px) {
    max-width: 70px;
    font-size: small;
  }
`;

export default CounterBox;
