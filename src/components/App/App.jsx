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

  useEffect(() => {
    dispatch({ type: 'ADD_COMPANIES', payload: companies });
    dispatch({ type: 'ADD_GUESTS', payload: guests });
    dispatch({ type: 'ADD_MESSAGES', payload: messageTemplates });
  }, []);

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
