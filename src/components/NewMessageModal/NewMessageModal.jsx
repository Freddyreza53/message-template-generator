import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function NewMessageModal() {
    let companies = require('../../utils/Companies.json');
    let guests = require('../../utils/Guests.json');
    let messageTemplates = require('../../utils/MessageTemplates.json');

    const dispatch = useDispatch();

    return (
        <>
            <div>Hello World</div>
        </>
    );
}

export default NewMessageModal;