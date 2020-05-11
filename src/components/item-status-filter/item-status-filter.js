import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'},
    ];
    
    render() {
        const { status } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = status === name;
            const activeClassName = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button className={`btn ${activeClassName}`} 
                        type="button" 
                        key={name}
                        onClick={() => this.props.onStatusChanged(name)}>
                    {label}
                </button>
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    };
}