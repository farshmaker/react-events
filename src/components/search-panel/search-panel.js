import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        searchText: ''
    };

    handleSearch = (e) => {
        const searchText = e.target.value;
        this.setState({ searchText: searchText });
        this.props.handleSearch(searchText);
    };

    render() {
        return (
            <input type="text"
                   className="search-input form-control"
                   onChange={this.handleSearch}
                   value={this.state.searchText}
                   placeholder="Type to search" />
        )
    };
};