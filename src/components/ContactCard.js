import React from 'react'

const cardContact = () => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
      </div>
      <i
       className="trash alternate outerline icon"
        style={{ color: "red", marginTop: "7px" }}
        ></i>
     
    </div>
  );
};





export default ContactCard