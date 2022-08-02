import React from "react";
import { contactsData } from "./contacts.data";

const Contacts = () => {
  return (
    <div>
      <p>{contactsData.title}</p>
      <p>{contactsData.description}</p>
      <p>{contactsData.buttontext}</p>
    </div>
  );
};

export default Contacts;
