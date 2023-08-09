import React, { useState } from 'react';

function DisplayMessage(props) {
    const { companies, guests, messageTemplates } = props;

  return (
    <>
      <h2>Message: </h2>
      <div className='message-container'>
        
      </div>
    </>
  );
}

export default DisplayMessage;