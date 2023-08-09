import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import  { MessageFinder } from '../../helpers'

function DisplayMessage() {
    const company = useSelector(store => store.selectedCompanyReducer);
    const guest = useSelector(store => store.selectedGuestReducer);
    const messageTemplate = useSelector(store => store.selectedMessageReducer);

    console.log('company: ', company);
    console.log('guest: ', guest);
    console.log('message: ', messageTemplate);

    let finalMessage = ''


    finalMessage = messageTemplate.message
        ?.replace("{GREETING}", "morning")
        ?.replace("{HOTEL}", company.company)

    finalMessage = finalMessage
        ?.replace("{FIRSTNAME}", guest.firstName)
        ?.replace("{NUMBER}", guest.reservation?.roomNumber)
        
    return (
        <>
            <h2>Message: </h2>
            {messageTemplate == '' ?  
                <div className='message-container'>
                    {messageTemplate}
                </div>
                :
                <div className='message-container'>
                    {messageTemplate.message
                        ?.replace("{GREETING}", "morning")
                        ?.replace("{HOTEL}", company.company)}
                </div>
            }
        </>
    );
}

export default DisplayMessage;