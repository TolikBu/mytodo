import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Task from '../Task';
import './TaskList.css';

export default class TaskList extends Component {
  static defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
    onUpdateTaskLabel: () => {},
  };

  static propTypes = {
    onUpdateTaskLabel: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { todos, onDeleted, onToggleDone, onUpdateTaskLabel } = this.props;

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <li key={id} className="completed">
          <Task
            {...itemProps}
            onDeleted={() => {
              onDeleted(id);
            }}
            onToggleDone={() => onToggleDone(id)}
            onUpdateTaskLabel={(newLabel) => onUpdateTaskLabel(id, newLabel)}
          />
        </li>
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
