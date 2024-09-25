import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./Addcontact";
import ContactList from "./Contactlist";
import EditContact from "./Editcontact";
import Delete from "./Deleate";
import "./App.css";

function App() {                
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(       
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []  
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]); 
  };

  const updateContactHandler = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    
      <div className="ui container">
        <Header />
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit/:id" element={<EditContact contacts={contacts} updateContactHandle={updateContactHandler} />} />
          <Route path="/delete/:id" element={<Delete clickHandler={removeContactHandler} />} />
        </Routes>
      </div>

  );
}

export default App;
