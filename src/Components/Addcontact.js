import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [number,setNumber]=useState("")
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === ""|| number==="" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ name, number, email,});
    setName("");
    setNumber("")
    setEmail("");
  
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Number</label>
          <input
            type="text"
            number="number"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
      <div style={{ paddingTop: "20px" }}>
        <Link to="/">
          <button className="ui button blue right">My Contacts</button>
        </Link>
      </div>
    </div>
  );
};

export default AddContact;
