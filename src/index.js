import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>Event List</h1>
        <input placeholder="search" />
        <ul>
            <li>Mozgo</li>
            <li>Lazertag</li>
        </ul>
    </div>
);

ReactDOM.render(el, document.getElementById('root'));