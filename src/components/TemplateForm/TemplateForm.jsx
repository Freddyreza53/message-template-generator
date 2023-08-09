import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TemplateForm() {

  const dispatch = useDispatch();

  const companies = useSelector(store => store.companyListReducer);
  const guests = useSelector(store => store.guestListReducer);
  const messageTemplates = useSelector(store => store.messageTemplateReducer);
  const company = useSelector(store => store.selectedCompanyReducer);
  const guest = useSelector(store => store.selectedGuestReducer);
  const messageTemplate = useSelector(store => store.selectedMessageReducer);

  const handleTemplateChange = (e) => {
    console.log(e.target.value);
    dispatch({ type: 'ADD_MESSAGE', payload: messageTemplates });
  }

  const handleCompanyChange = (companyId) => {
    console.log(companyId);
    dispatch({ type: 'ADD_COMPANY', payload: companyId });
  }

  const handleGuestChange = (e) => {
    console.log(e.target.value);
    dispatch({ type: 'ADD_GUEST', payload: guests });
  }


  return (
    <>
      <h2>Choose a message template: </h2>
      <select onChange={(e) => handleTemplateChange(e)}>
        <option defaultValue="Select a message" disabled selected>Select message</option>
        {messageTemplates?.map(message => {
          return (
            <option value={message.message} key={message.id}>{message.message}</option>
          )
        })}
      </select>

      {messageTemplate == '' ? <></> : 
        <>
          <h2>Choose a Hotel: </h2>
          <select onChange={(e) => handleCompanyChange(e.target.value)}>
            <option defaultValue="Select a hotel" disabled selected>Select a hotel</option>
            {companies?.map(companyObject => {
              const { company, id } = companyObject;
              return (
                <option value={id} key={id}>{company}</option>
              )
            })}
          </select>
        </>
      }

      {company == '' ? 
        <></>
        :
        <>
          <h2>Choose a guest: </h2>
          <select onChange={(e) => handleGuestChange(e)}>
            <option defaultValue="Select a guest" disabled selected>Select a guest</option>
            {guests?.map(guest => {
              return (
                <option value={guest.firstName} key={guest.id}>{guest.firstName} {guest.lastName}</option>
              )
            })}
          </select>
        </>
      }
    </>
  );
}

export default TemplateForm;