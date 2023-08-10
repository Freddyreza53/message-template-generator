import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';

const companyListReducer = (state = [], action) => {
  if (action.type === 'ADD_COMPANIES') {
      return action.payload
  } 
  return state;
}

const selectedCompanyReducer = (state = '', action) => {
  if (action.type === 'ADD_COMPANY') {
      return action.payload
  } else if (action.type === 'CLEAR') {
      return state = '';
  }
  return state;
}

const guestListReducer = (state = [], action) => {
  if (action.type === 'ADD_GUESTS') {
      return action.payload
  }
  return state;
}

const selectedGuestReducer = (state = '', action) => {
  if (action.type === 'ADD_GUEST') {
      return action.payload
  } else if (action.type === 'CLEAR') {
      return state = '';
  }
  return state;
}

const messageTemplateReducer = (state = [], action) => {
  if (action.type === 'ADD_MESSAGES') {
      return action.payload
  } else if (action.type === 'ADD_NEW_MESSAGE_TEMPLATE') {
      return action.payload
  }
  return state;
}

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
