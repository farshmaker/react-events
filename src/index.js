import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    const tasks = [
        {label: 'Mozgo', important: false, id: 1},
        {label: 'Lazertag', important: true, id: 2},
        {label: 'Questroom', important: false, id: 3}
    ];

    return (
        <div className="todo-app">
            <AppHeader />
            <div className="top-panel">
                <SearchPanel />
                <TodoList items={tasks} />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));