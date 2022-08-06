import React from "react";
import styled from "styled-components";
import { contactsData } from "./contacts.data";

const Container = styled.div`
  padding: 40px 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 20px;
`;

const Icon = styled.div`
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 20px;
  font-size: 40px;

  &:hover {
    color: #ebcf63;
    transition: all 0.3s ease;
  }
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

const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Descp = styled.div`
  padding: 0px 180px 15px 180px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Contacts = () => {
  return (
    <Container id="contacts">
      <h2>{contactsData.title}</h2>
      <Descp>
        <p>{contactsData.description}</p>
      </Descp>
      <Button>
        <StyledAnchor href={contactsData.email}>
          {contactsData.buttontext}
        </StyledAnchor>
      </Button>
      <Icon>
        {contactsData.platforms.map((platform) => (
          <a href={platform.link}>{platform.icon}</a>
        ))}
      </Icon>
    </Container>
  );
};

export default Contacts;
