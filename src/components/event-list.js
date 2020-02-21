import React from 'react';

import EventListItem from './event-list-item';

const EventList = () => {
    const events = ['Mozgo', 'Lazertag', 'Questroom'];

    return (
        <ul>
            <li><EventListItem label = 'Mozgo'/></li>
            <li><EventListItem label = 'Lazertag' important/></li>
            <li><EventListItem label = 'Questroom'/></li>
        </ul>
    );
};

export default EventList;