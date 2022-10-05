import React from "react";
import styled from "styled-components";
import { contactsData } from "./contacts.data";
import { StyledAnchor } from "../../../../components/Anchor";

const Container = styled.div`
  min-height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 20px;
  padding-bottom: 50px;

  > p {
    font-size: 17px;
    text-align: center;
  }
`;

const IconContainer = styled.a`
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 30px;
  font-size: 40px;
  color: #b29eb5;
  transition: 0.3s ease;

  :hover {
    transform: scale(1.5);
  }
`;

const ListContainer = styled.div`
  padding: 20px 0px 20px 0px;
  display: flex;
  gap: 30px;
`;

const Button = styled.div`
  border-radius: 4px;
  border: 2px solid #ebcf63;
  cursor: pointer;
  background: #b29eb5;
  white-space: nowrap;
  padding: 12px 64px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #191c29;

  &:hover {
    background: #ebcf63;
    transition: all 0.3s ease-out;
  }
`;

const Descp = styled.div`
  align-items: center;
  max-width: 480px;
  justify-content: center;
  display: flex;
  text-align: center;
  line-height: 1.2;

  > p {
    font-size: 21px;
    text-align: center;
  }
`;

const Contacts = () => {
  return (
    <Container id="contacts">
      <h2>{contactsData.title}</h2>
      <Descp>
        <p>{contactsData.description}</p>
      </Descp>
      <StyledAnchor href={contactsData.email}>
        <Button>{contactsData.buttontext}</Button>
      </StyledAnchor>
      <ListContainer>
        {contactsData.platforms.map((platform) => (
          <IconContainer href={platform.link}>{platform.icon}</IconContainer>
        ))}
      </ListContainer>
      <p>This project was coded by Zakiah Hashim 👩‍💻</p>
    </Container>
  );
};

export default Contacts;
