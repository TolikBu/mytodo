import React from 'react';

import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, onDeleted, onToggleCompleted, onUpdateTaskLabel, onStartTask, onPauseTask }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="completed">
        <Task
          {...itemProps}
          onDeleted={() => {
            onDeleted(id);
          }}
          onToggleCompleted={() => onToggleCompleted(id)}
          onStartTask={() => onStartTask(id)}
          onPauseTask={() => onPauseTask(id)}
          onUpdateTaskLabel={(newLabel) => onUpdateTaskLabel(id, newLabel)}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
