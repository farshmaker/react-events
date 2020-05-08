import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

    state = {
        tasks: [
            { label: 'Mozgo', id: 1 },
            { label: 'Lazertag', id: 2 },
            { label: 'Questroom', id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex((el) => el.id === id);

            const newArray = [
                ...tasks.slice(0, idx),
                ...tasks.slice(idx + 1)
            ];
            
            return {
                tasks: newArray
            };

        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList items={this.state.tasks} onDeleted={this.deleteItem} />
            </div>
        );
    };
}