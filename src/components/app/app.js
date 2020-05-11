import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        tasks: [
            this.createTaskItem('Mozgo'),
            this.createTaskItem('Lazertag'),
            this.createTaskItem('Questroom')
        ],
        searchText: '',
        status: 'all' //active, all, done
    };

    createTaskItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++
        };
    };

    addItem = (text) => {
        const newItem = this.createTaskItem(text);

        this.setState(({ tasks }) => {
            const newArray = [
                ...tasks,
                newItem
            ];

            return {
                tasks: newArray
            };
        });
    }

    deleteItem = (id) => {
        this.setState(({ tasks }) => {
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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({ tasks }) => {
            return {
                tasks: this.toggleProperty(tasks, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ tasks }) => {
            return {
                tasks: this.toggleProperty(tasks, id, 'done')
            };
        });
    };

    handleSearch = (searchText) => {
        this.setState({searchText});
    }

    search(tasks, text) {
        if(text === 0 ){ 
            return tasks;
        }

        return tasks.filter(task => task.label.toLowerCase().includes(this.state.searchText.toLocaleLowerCase()));        
    };

    filterByStatus(tasks, status) {
        switch(status) {
            case 'all': 
                return tasks;
            case 'active': 
                return tasks.filter((task) => !task.done);
            case 'done': 
                return tasks.filter((task) => task.done);
            default: 
                return tasks;
        }
    };

    onStatusChanged = (status) => {
        this.setState({status});
    }

    render() {
        const { tasks, searchText, status } = this.state;
        const doneCount = tasks.filter((el) => el.done).length;
        const todoCount = tasks.length - doneCount;
        const visibleTasks = this.filterByStatus(this.search(tasks, searchText), status);

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel handleSearch={this.handleSearch}/>
                    <ItemStatusFilter status={status} onStatusChanged={this.onStatusChanged}/>
                </div>
                <TodoList items={visibleTasks}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant} />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    };
}