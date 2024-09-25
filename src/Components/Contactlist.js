import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./Contactcard";

const ContactList = ({ contacts, getContactId }) => {
  const [term, setTerm] = useState(""); // State to hold the search term

  const handleChange = (e) => {
    setTerm(e.target.value); // Update search term state
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(term.toLowerCase())
  );

  const renderContactList = filteredContacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      getContactId={getContactId}
    />
  ));

  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to="/add">
        <button className="ui button blue right" style={{ marginTop: "10px", marginBottom: "20px" }}>
          Add Contact
        </button>
      </Link>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search contact"
            className="prompt"
            value={term}
            onChange={handleChange}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
