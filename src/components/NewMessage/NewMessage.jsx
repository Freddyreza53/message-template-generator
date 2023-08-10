import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function NewMessageModal() {
    const dispatch = useDispatch();
    const messageTemplates = useSelector(store => store.messageTemplateReducer);

    const [newMessageTemplate, setNewMessageTemplate] = useState('')

    const handleClick = () => {
        console.log(messageTemplates);
        let messageTemplate = [
            ...messageTemplates,
        {
            id: messageTemplates.length + 1,
            message: newMessageTemplate
        }]
        dispatch({ type: 'ADD_NEW_MESSAGE_TEMPLATE', payload: messageTemplate })
        setNewMessageTemplate('')
    }

    return (
        <>
            <h2>Add new message template:</h2>
            <div>Please use these variables when creating a template:</div>
            <ul>
                <li>{`{GREETING} will turn into morning, afternoon, or evening depending on the time of day.`}</li>
                <li>{`{HOTEL} will turn into the name of the hotel chosen above.`}</li>
                <li>{`{FIRSTNAME} will turn into guest's first name.`}</li>
                <li>{`{LASTNAME} will turn into guest's last name.`}</li>
                <li>{`{NUMBER} will turn into guest room number.`}</li>
                <li>{`{CHECKIN} will turn into date and time of check-in.`}</li>
                <li>{`{CHECKOUT} will turn into date and time of check-out.`}</li>
            </ul>
            <div>EXAMPLE: {`Good {GREETING} {FIRSTNAME} {LASTNAME}, Welcome to {HOTEL}. Room {NUMBER} will be ready for you when you arrive for your time of {CHECKIN}.`}</div>
            <br />
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