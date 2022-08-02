import React from "react";
import { contactsData } from "./contacts.data";

const Contacts = () => {
  return (
    <div>
      <h6>{contactsData.title}</h6>
      <p>{contactsData.description}</p>
      <p>{contactsData.buttontext}</p>
      <p>
        {contactsData.platforms.map((platform) => (
          <a href={platform.link}>{platform.icon}</a>
        ))}
      </p>
    </div>
  );
};

export default Contacts;
