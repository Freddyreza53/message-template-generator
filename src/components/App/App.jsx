import DisplayMessage from '../DisplayMessage/DisplayMessage';
import TemplateForm from '../TemplateForm/TemplateForm';
import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  let companies = require('../../utils/Companies.json');
  let guests = require('../../utils/Guests.json');
  let messageTemplates = require('../../utils/MessageTemplates.json');

  const dispatch = useDispatch();

  const company = useSelector(store => store.selectedCompanyReducer);
  const guest = useSelector(store => store.selectedGuestReducer);
  const messageTemplate = useSelector(store => store.selectedMessageReducer);

  useEffect(() => {
    dispatch({ type: 'ADD_COMPANIES', payload: companies });
    dispatch({ type: 'ADD_GUESTS', payload: guests });
    dispatch({ type: 'ADD_MESSAGES', payload: messageTemplates });
  }, []);

console.log('company: ', company);
console.log('guest: ', guest);
console.log('message: ', messageTemplate);

  return (
    <div className="App">
      <TemplateForm
      />
      <DisplayMessage
      />
    </div>
  );
}

export default App;
