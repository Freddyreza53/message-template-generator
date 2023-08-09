import React, { useState } from 'react';

function TemplateForm(props) {

  const { companies, guests, messageTemplates } = props;


  const [company, setCompany] = useState('');
  const [guest, setGuest] = useState('');
  const [template, setTemplate] = useState('');


  const handleTemplateChange = (e) => {
    console.log(e.target.value);
    setTemplate(e.target.value)
  }

  const handleCompanyChange = (companyObject) => {
    console.log(companyObject.company);
    setCompany(companyObject)
  }

  const handleGuestChange = (e) => {
    console.log(e.target.value);
    setGuest(e.target.value)
  }

  return (
    <>
      <h2>Choose a message template: </h2>
      <select onChange={(e) => handleTemplateChange(e)}>
        <option defaultValue="Select a message" disabled selected>Select message</option>
        {messageTemplates.map(message => {
          return (
            <option value={message.message} key={message.id}>{message.message}</option>
          )
        })}
      </select>

      <h2>Choose a Hotel: </h2>
      <select onChange={(e) => handleCompanyChange(e.target.value)}>
        <option defaultValue="Select a hotel" disabled selected>Select a hotel</option>
        {companies.map(companyObject => {
          const { company, id } = companyObject;
          return (
            <option value={companyObject} key={id}>{company}</option>
          )
        })}
      </select>

      <h2>Choose a guest: </h2>
      <select onChange={(e) => handleGuestChange(e)}>
        <option defaultValue="Select a guest" disabled selected>Select a guest</option>
        {guests.map(guest => {
          return (
            <option value={guest.firstName} key={guest.id}>{guest.firstName} {guest.lastName}</option>
          )
        })}
      </select>
    </>
  );
}

export default TemplateForm;