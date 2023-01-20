import React, { Component } from 'react';
import Data from '../Data/Data';
import './Task.css';

export default class Task extends Component {


  render() {
    const { label, onDeleted, onToggleDone, done, onEditTask, isEditing } = this.props;
  
    let classNames = 'description';

    if (done) {
      classNames += ' done';
    }

    let classNamesEdit

    if (isEditing) {
      classNamesEdit += 'hide';
    }

    return (
      <span>
        <span className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label className={classNamesEdit}>
            <span className={classNames}>{label}</span>
            <Data />
          </label>
          <button className="icon icon-edit" onClick={onEditTask}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </span>
        <input type="text" className="edit" />
      </span>
    );
  }
}
