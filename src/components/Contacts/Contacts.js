import React from "react";
import styled from "styled-components";
import { contactsData } from "./contacts.data";

const Container = styled.div`
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const Icon = styled.div`
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 20px;
  font-size: 40px;
`;

const Contacts = () => {
  return (
    <Container id="contacts">
      <h6>{contactsData.title}</h6>
      <p>{contactsData.description}</p>
      <p>{contactsData.buttontext}</p>
      <Icon>
        {contactsData.platforms.map((platform) => (
          <a href={platform.link}>{platform.icon}</a>
        ))}
      </Icon>
    </Container>
  );
};

export default Contacts;
