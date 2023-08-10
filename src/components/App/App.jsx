import DisplayMessage from '../DisplayMessage/DisplayMessage';
import NewMessage from '../NewMessage/NewMessage';
import TemplateForm from '../TemplateForm/TemplateForm';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';


function App() {
  // initial fetch for data from JSON files
  let companies = require('../../utils/Companies.json');
  let guests = require('../../utils/Guests.json');
  let messageTemplates = require('../../utils/MessageTemplates.json');

  const dispatch = useDispatch();

  // on page load, the data from each JSON file will be sent to reducer to be available for any component used
  useEffect(() => {
    dispatch({ type: 'ADD_COMPANIES', payload: companies });
    dispatch({ type: 'ADD_GUESTS', payload: guests });
    dispatch({ type: 'ADD_MESSAGES', payload: messageTemplates });
  }, []);

  return (
    <div className="App">
      <h1 className='title'>Message Generator</h1>
      {/* 
        TemplateForm component is the form the user fills out in order to see final generated message 
      */}
      <TemplateForm
      />
      {/* 
        DisplayMessage component is used to handle the final message that is dynamically generated based on the 
        user selections in the form component
      */}
      <DisplayMessage
      />
      {/* 
        NewMessage component is used to allow the user to create a new custom message template to be used in the app
      */}
      <NewMessage/>
    </div>
  );
}

export default App;
