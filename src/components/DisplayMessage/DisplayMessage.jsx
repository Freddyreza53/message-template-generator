import React from 'react';
import { useSelector } from 'react-redux';

/* 
    DisplayMessage component is used to handle the final message that is dynamically generated based on the 
    user selections in the form component
*/
function DisplayMessage() {
    // Retrieving all the data for each selected company, guest, and message template from reducers to be used in final message.
    const company = useSelector(store => store.selectedCompanyReducer);
    const guest = useSelector(store => store.selectedGuestReducer);
    const messageTemplate = useSelector(store => store.selectedMessageReducer);

    // luxon is being used to manage the date and time conversions 
    const { DateTime } = require('luxon');

    // function for converting timestamps into readable formatted date and time
    const convertUnixTimestamp = (unixTimestamp) => {
        const dateTime = DateTime.fromSeconds(unixTimestamp);
        const formattedDate = dateTime.toFormat('DDDD, h:mm a');

        return formattedDate;
    }

    // function for managing greeting output based on the current time of the user 
    const checkTimeOfDayForGreeting = (timeNow) => {
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
                {/* 
                    Using conditional rendering, the variables within the message template chosen will be dynamically 
                    replaced as the user chooses the hotel and guest information.
                */}
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