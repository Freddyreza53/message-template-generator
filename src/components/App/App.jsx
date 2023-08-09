import DisplayMessage from '../DisplayMessage/DisplayMessage';
import TemplateForm from '../TemplateForm/TemplateForm';
import './App.css';
import React, { useState } from 'react';


function App() {
  let companies = require('../../utils/Companies.json');
  let guests = require('../../utils/Guests.json');
  let messageTemplates = require('../../utils/MessageTemplates.json');
  
  return (
    <div className="App">
      <TemplateForm
        companies={companies}
        guests={guests}
        messageTemplates={messageTemplates}
      />
      <DisplayMessage
        companies={companies}
        guests={guests}
        messageTemplates={messageTemplates}
      />
    </div>
  );
}

export default App;
