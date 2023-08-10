import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* 
  TemplateForm component is the form the user fills out in order to see final generated message 
*/
function TemplateForm() {

  const dispatch = useDispatch();

  // fetches all the lists being held in reducers
  const companies = useSelector(store => store.companyListReducer);
  const guests = useSelector(store => store.guestListReducer);
  const messageTemplates = useSelector(store => store.messageTemplateReducer);

  // fetches company and messageTemplate that the user selected 
  const company = useSelector(store => store.selectedCompanyReducer);
  const messageTemplate = useSelector(store => store.selectedMessageReducer);

  // function takes in the id of the selected message template and finds the matching object to send to reducer
  const handleTemplateChange = (messageId) => {
    messageTemplates.forEach(messageTemplate => {
      if (messageId == messageTemplate.id) {
        dispatch({ type: 'ADD_MESSAGE', payload: messageTemplate });
      }
    });
  }

  // function takes in the id of the selected company and finds the matching object to send to reducer
  const handleCompanyChange = (companyId) => {
    companies.forEach(company => {
      if (companyId == company.id) {
        dispatch({ type: 'ADD_COMPANY', payload: company });
      }
    });
  }

  // function takes in the id of the selected guest and finds the matching object to send to reducer
  const handleGuestChange = (guestId) => {
    guests.forEach(guest => {
      if (guestId == guest.id) {
        dispatch({ type: 'ADD_GUEST', payload: guest });
      }
    });
  }

  return (
    <>
      <h2>Choose a message template: </h2>
      <select onChange={(e) => handleTemplateChange(e.target.value)}>
        <option defaultValue="Select a message" disabled selected>Select message</option>
        {messageTemplates?.map(messageObject => {
          const { message, id } = messageObject;
          return (
            <option value={id} key={id}>{message}</option>
          )
        })}
      </select>

      {messageTemplate == '' ? 
        <></> 
        : 
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
          <select onChange={(e) => handleGuestChange(e.target.value)}>
            <option defaultValue="Select a guest" disabled selected>Select a guest</option>
            {guests?.map(guestObject => {
              const { firstName, id, lastName } = guestObject
              return (
                <option value={id} key={id}>{firstName} {lastName}</option>
              )
            })}
          </select>
        </>
      }
    </>
  );
}

export default TemplateForm;