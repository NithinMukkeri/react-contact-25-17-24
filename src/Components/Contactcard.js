import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, getContactId }) => {
  return (
    <div className="item" style={{ display: "flex", alignItems: "center", padding: "10px" }}>
      <img
        className="ui avatar image"
        src="https://via.placeholder.com/150/000000/FFFFFF/?text=Photo"
        alt="user"
        style={{ marginRight: "10px" }}
      />
      <div style={{ flex: 1 }}>
        <div className="header" style={{ fontWeight: "bold" }}>{contact.name}</div>
        <div>{contact.number}</div>
        <div>{contact.email}</div>
      </div>
      <div className="ui buttons">
        <Link to={`/edit/${contact.id}`} state={{ contact }}> {/* Pass the contact in state */}
          <button className="ui button blue" style={{ marginRight: "5px" }}>
            <i className="edit icon"></i>
          </button>
        </Link>
        <Link to={`/delete/${contact.id}`} state={{ contact }}>
          <button className="ui button red">
            <i className="trash icon"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
