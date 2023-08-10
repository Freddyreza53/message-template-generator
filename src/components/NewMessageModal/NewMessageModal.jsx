import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function NewMessageModal() {
    let companies = require('../../utils/Companies.json');
    let guests = require('../../utils/Guests.json');
    let messageTemplates = require('../../utils/MessageTemplates.json');

    const [newMessageTemplate, setNewMessageTemplate] = useState('')

    const dispatch = useDispatch();

    const handleClick = () => {
        console.log(messageTemplates);
        let messageTemplate = {
            id: messageTemplates.length + 1,
            message: newMessageTemplate
        }
        dispatch({ type: 'CLEAR'})
        dispatch({ type: 'ADD_MESSAGE', payload: messageTemplate })
        setNewMessageTemplate('')
    }

    return (
        <>
            <h2>Add new message template:</h2>
            <textarea 
                value={newMessageTemplate} 
                onChange={(e)=>setNewMessageTemplate(e.target.value)}
                rows="5" 
                cols="33" 
                placeholder='enter a new message template to add to the list above.'>
            </textarea>
            <br />
            <button onClick={(e) => handleClick()}>Add New Message</button>
        </>
    );
}

export default NewMessageModal;