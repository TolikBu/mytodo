import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default class Footer extends Component {
  static propTypes = {
    itemsLeft: PropTypes.number,
  };

  render() {
    const { itemsLeft, filter, onFilterChange = () => {}, clearTask } = this.props;

    const filterButtons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'completed', label: 'Completed' },
    ];

    const buttons = filterButtons.map(({ name, label }) => {
      const isActive = name === filter;
      const classNames = '' + (isActive ? 'selected' : '');

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
            <div>{buttons}</div>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearTask}>
          Clear completed
        </button>
      </div>
    );
  }
}
