import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

// const FilterType = {
//   All: 'All',
//   Active: 'Active',
//   Completed: 'Completed',
// };

export default class Footer extends Component {
  static propTypes = {
    itemsLeft: PropTypes.number,
  };

  render() {
    const { itemsLeft, filter, onFilterChange = () => {}, clearTask } = this.props;

    const filterButtons = [
      {
        type: 'All',
        label: 'All',
      },
      {
        type: 'Active',
        label: 'Active',
      },
      {
        type: 'Completed',
        label: 'Completed',
      },
    ];

    const buttons = filterButtons.map(({ type, label }) => {
      const isActive = type === filter;
      const classNames = '' + (isActive ? 'selected' : '');

      return (
        <button key={type} type="button" onClick={() => onFilterChange(type)} className={classNames}>
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
