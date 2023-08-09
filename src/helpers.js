import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';



export function MessageFinder(messageId) {
    const messageTemplates = useSelector(store => store.messageTemplateReducer);

    for (let index = 0; index < messageTemplates.length; index++) {
        console.log(index, messageTemplates[index]);
        
        
    }
    console.log('works');

    return '1'
}