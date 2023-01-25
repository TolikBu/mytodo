import React, { Component } from 'react';
import DateDisplay from '../DateDisplay/DateDisplay';
import './Task.css';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      newTaskLabel: props.label,
    };
  }

  onEditTask = () => {
    this.setState(({ isEditing }) => {
      return {
        isEditing: !isEditing,
      };
    });
  };

  onLabelChange = (e) => {
    const { value } = e.target
    
    this.setState({
      newTaskLabel: value,
    });
  };

  onLabelKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        isEditing: false,
      });
      this.props.onUpdateTaskLabel(this.state.newTaskLabel);
    }
  };

  render() {
    const { done, label, createdAt, onDeleted, onToggleDone } = this.props;
    const { newTaskLabel, isEditing } = this.state;
    

    let classNames = 'description';
    let classNamesEdit = '';
    let classNameNewLabel = 'edit';

    if (done) {
      classNames += ' done';
    }

    if (isEditing) {
      classNamesEdit += 'hide';
      classNameNewLabel += ' edited';
    }

    return (
      <span>
        <span className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label className={classNamesEdit}>
            <span className={classNames}>{label}</span>
            <DateDisplay time={createdAt} />
          </label>
          <button className="icon icon-edit" onClick={this.onEditTask}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </span>
        <input className={classNameNewLabel} type="text" onChange={this.onLabelChange} onKeyDown={this.onLabelKeyDown} value={newTaskLabel} />
      </span>
    );
  }
}
