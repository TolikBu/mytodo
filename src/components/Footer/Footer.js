import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

  render() {

    const { itemsLeft, filter, onFilterChange = () => {} } = this.props;

    const filterButtons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'completed', label: 'Completed' }
    ];

    const buttons = filterButtons.map(({ name, label }) => {
      const isActive = name === filter;
      const classNames = ' ' + (isActive ? 'completed' : ' ');

      return (
        <button key={name} type="button" onClick={() => onFilterChange(name)} className={classNames}>
          {label}
        </button>
      );
    });


    return (
      <div className="footer">
        <span className="todo-count">{itemsLeft} items left</span>
        <ul className="filters">
          <li>
            <div className="">{buttons}</div>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </div>
    );
  }
}
