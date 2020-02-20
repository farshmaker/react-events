import React from 'react';
import ReactDOM from 'react-dom';

const EventList = () => {
    return (
        <ul>
            <li>Mozgo</li>
            <li>Lazertag</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>Event List</h1>;
};

const SearchPanel = () => {
    return <input placeholder="search" />;
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <EventList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));