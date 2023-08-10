import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import  { MessageFinder } from '../../helpers'
import { current } from '@reduxjs/toolkit';

function DisplayMessage() {
    const company = useSelector(store => store.selectedCompanyReducer);
    const guest = useSelector(store => store.selectedGuestReducer);
    const messageTemplate = useSelector(store => store.selectedMessageReducer);

    const { DateTime } = require('luxon');

const convertUnixTimestamp = (unixTimestamp) => {
    const dateTime = DateTime.fromSeconds(unixTimestamp);
    const formattedDate = dateTime.toFormat('DDDD, h:mm a');
    
    return formattedDate;
}

const checkTimeOfDayForGreeting = (timeNow) => {
    console.log(timeNow.c.hour);
    if (timeNow.c.hour >= 6 && timeNow.c.hour <= 12) {
        return 'morning'
    } else if (timeNow.c.hour > 12 && timeNow.c.hour <= 18) {
        return 'afternoon'
    } 
    return 'evening'
}

    return (
        <>
            <h2>Message: </h2>
            <div className='message-container'>
                {messageTemplate == '' ?  
                    <div>
                        {messageTemplate}
                    </div>
                    :
                    company == '' ?
                        <div>
                            {messageTemplate.message
                                ?.replace("{GREETING}", checkTimeOfDayForGreeting(DateTime.now()))
                            }
                        </div>
                        :
                        guest == '' ?
                            <div>
                                {messageTemplate.message
                                    ?.replace("{GREETING}", checkTimeOfDayForGreeting(DateTime.now()))
                                    ?.replace("{HOTEL}", company.company)
                                }
                            </div>
                            :
                            <div>
                            {messageTemplate.message
                                ?.replace("{GREETING}", checkTimeOfDayForGreeting(DateTime.now()))
                                ?.replace("{HOTEL}", company.company)
                                ?.replace("{FIRSTNAME}", guest.firstName)
                                ?.replace("{NUMBER}", guest.reservation?.roomNumber)
                                ?.replace("{CHECKIN}", convertUnixTimestamp(guest.reservation?.startTimestamp))
                                ?.replace("{CHECKOUT}", convertUnixTimestamp(guest.reservation?.endTimestamp))
                                ?.replace("{LASTNAME}", guest.lastName)
                            }
                        </div>
                }
            </div>
        </>
    );
}

export default DisplayMessage;