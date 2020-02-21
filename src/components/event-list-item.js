import React from 'react';

const EventListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };

    return <span style={style}>{label}</span>;
}

export default EventListItem;