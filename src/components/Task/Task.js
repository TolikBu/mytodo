import React, { Component } from 'react';
import Data from '../Data/Data';
import './Task.css';

export default class Task extends Component {
  state = {
    isEditing: false,
    newTaskLabel: false,
    labelNewInput: '',
  };

  onEditTask = () => {
    this.setState(({ isEditing }) => {
      return {
        isEditing: !isEditing,
      };
    });
  };

  getValueInput = () => {
    this.setState(({ labelNewInput }) => {

    });
  }

  render() {
    const { label, onDeleted, onToggleDone, done, onUpdateTaskLabel } = this.props;

    let classNames = 'description';
    let classNamesEdit = '';
    let classNameNewLabel = 'edit';

    if (done) {
      classNames += ' done';
    }

    if (this.state.isEditing) {
      classNamesEdit += 'hide';
      classNameNewLabel += ' edited';
    }
    // if (this.state.newTaskLabel) {

    // }

    return (
      <span>
        <span className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label className={classNamesEdit}>
            <span className={classNames}>{label}</span>
            <Data />
          </label>
          <button className="icon icon-edit" onClick={this.onEditTask}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </span>
        <label className={classNameNewLabel}>
          <input className="new-input"type="text" onChange={this.getValueInput} />
        </label>
      </span>
    );
  }
}
