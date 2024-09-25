import React from "react";
import { useLocation,Link } from "react-router-dom";

const Contactd = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div className="main">
      <div className="ui card center">
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=Photo" alt="user" />
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="header">{contact.number}</div>
          <div className="header">{contact.email}</div>
        
        </div>
      </div>
      <Link to="/add">
        <button className="ui button blue right">goo back</button>
        </Link>
    </div>
  );
};

export default Contactd;
