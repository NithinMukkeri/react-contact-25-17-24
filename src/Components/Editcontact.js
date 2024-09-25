import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EditContact = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = location.state || { contact: null }; // Default to null if contact is not found

  // Initialize state with empty values
  const [updatedContact, setUpdatedContact] = useState({
    id: "",
    name: "",
    number:"",
    email: "",
   
  });

  // Use useEffect to set the state if contact is available
  useEffect(() => {
    if (contact) {
      setUpdatedContact(contact);
    }
  }, [contact]);

  const update = (e) => {
    e.preventDefault();
    if (updatedContact.name === "" || updatedContact.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    props.updateContactHandle(updatedContact);
    navigate("/");
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
    ); // or redirect to another page
  }

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={updatedContact.name}
            onChange={(e) => setUpdatedContact({ ...updatedContact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            number="number"
            placeholder="number"
            value={updatedContact.number}
            onChange={(e) => setUpdatedContact({ ...updatedContact, number: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={updatedContact.email}
            onChange={(e) => setUpdatedContact({ ...updatedContact, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
      <div style={{ paddingTop: "20px" }}>
        <Link to="/">
          <button className="ui button blue right">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default EditContact;
