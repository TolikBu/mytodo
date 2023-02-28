import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import DateDisplay from '../DateDisplay/DateDisplay';
import './Task.css';

const Task = ({
  completed,
  label,
  createdAt,
  onDeleted,
  onToggleCompleted,
  onUpdateTaskLabel,
  timeLeft,
  onStartTask,
  onPauseTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskLabel, setNewTaskLabel] = useState(label);

  const onEditTask = () => {
    setIsEditing(true);
  };

  const onLabelChange = (e) => {
    const { value } = e.target;

    setNewTaskLabel(value);
  };

  const onLabelKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      onUpdateTaskLabel(newTaskLabel);
    }
  };

  const onClickBtnOk = () => {
    setIsEditing(false);
    onUpdateTaskLabel(newTaskLabel);
  };

  const formatTimeLeft = (timeLeft) => {
    const secs = Math.ceil(timeLeft / 1000);
    const mins = Math.floor(secs / 60);

    return `${mins}:${('00' + String(secs - mins * 60)).slice(-2)}`;
  };

  const classNames = completed ? 'description done' : 'description';
  const classNamesEdit = isEditing ? 'hide' : '';
  const classNameNewLabel = isEditing ? 'edit edited' : 'edit';
  const classNameOk = isEditing ? 'hide-button-ok visible' : 'hide-button-ok';

  return (
    <span className="item-list">
      <span className="view">
        <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
        <label className={classNamesEdit}>
          <span className={classNames}>{label}</span>
          <div className="descriptions">
            <button className="icon-play" onClick={onStartTask}></button>
            <button className="icon-pause" onClick={onPauseTask}></button>
            <span className="time">{formatTimeLeft(timeLeft)}</span>
          </div>
          <DateDisplay time={createdAt} />
        </label>
        <button className="icon icon-edit" onClick={onEditTask}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </span>
      <span className={classNameOk} onClick={onClickBtnOk}>
        ok
      </span>
      <input
        className={classNameNewLabel}
        type="text"
        onChange={onLabelChange}
        onKeyDown={onLabelKeyDown}
        value={newTaskLabel}
      />
    </span>
  );
};

export default Task;
