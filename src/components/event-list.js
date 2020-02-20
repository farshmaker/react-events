import React from 'react';

import EventListItem from './event-list-item';

const EventList = () => {
    const events = ['Mozgo', 'Lazertag', 'Questroom'];

    return (
        <ul>
            <li><EventListItem /></li>
            <li><EventListItem /></li>
            <li><EventListItem /></li>
        </ul>
    );
};

export default EventList;