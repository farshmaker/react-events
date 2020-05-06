import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
    const tasks = [
        {label: 'Mozgo', important: false, id: 1},
        {label: 'Lazertag', important: true, id: 2},
        {label: 'Questroom', important: false, id: 3}
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList items={tasks} />
        </div>
    );
};

export default App;