import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import EventList from './components/event-list';

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