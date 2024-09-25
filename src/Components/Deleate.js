import React from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";

const Delete = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = location.state || { contact: null }; // Default to null if contact is not found

  const handleDelete = () => {
    props.clickHandler(id); // Call the delete handler passed as props
    navigate("/"); // Redirect to the contact list after deletion
  };

  // Handle case when contact is not available
  if (!contact) {
    return (
      <div>
        <h2>Error: Contact not found.</h2>
        <Link to="/">
          <button className="ui button blue">Go to Contact List</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Delete Contact</h2>
      <div className="ui card center">
        <img
          src="https://via.placeholder.com/150/000000/FFFFFF/?text=Photo"
          alt="user"
        />
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
          <div className="description">{contact.number}</div>
        </div>
      </div>
      <button onClick={handleDelete} className="ui button red">Delete</button>
      <Link to="/">
        <button className="ui button blue right">No</button>
      </Link>
    </div>
  );
};

export default Delete;
