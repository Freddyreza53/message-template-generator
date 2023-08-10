import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';

// holds list of all companies to display
const companyListReducer = (state = [], action) => {
  if (action.type === 'ADD_COMPANIES') {
      return action.payload
  } 
  return state;
}
// holds the selected company to be used to generate message
const selectedCompanyReducer = (state = '', action) => {
  if (action.type === 'ADD_COMPANY') {
      return action.payload
  } else if (action.type === 'CLEAR') {
      return state = '';
  }
  return state;
}

// holds list of all guests to display
const guestListReducer = (state = [], action) => {
  if (action.type === 'ADD_GUESTS') {
      return action.payload
  }
  return state;
}
// holds the selected guest to be used to generate message
const selectedGuestReducer = (state = '', action) => {
  if (action.type === 'ADD_GUEST') {
      return action.payload
  } else if (action.type === 'CLEAR') {
      return state = '';
  }
  return state;
}

// holds list of all message templates to display
const messageTemplateReducer = (state = [], action) => {
  if (action.type === 'ADD_MESSAGES') {
      return action.payload
  } else if (action.type === 'ADD_NEW_MESSAGE_TEMPLATE') {
      return action.payload
  }
  return state;
}
// holds the selected message template to be used to generate message
const selectedMessageReducer = (state = '', action) => {
  if (action.type === 'ADD_MESSAGE') {
      return action.payload
  } else if (action.type === 'CLEAR') {
      return state = '';
  }
  return state;
}

const reduxStore = createStore(
  combineReducers({
      companyListReducer,
      guestListReducer,
      messageTemplateReducer,
      selectedCompanyReducer,
      selectedGuestReducer,
      selectedMessageReducer
  })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
        <App />
    </Provider>
);
