import { React } from 'react';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, onDeleted, onToggleDone, onUpdateTaskLabel }) => {
  const elements = todos.map((item) => {
    const { id } = item;

    return (
      <li key={id} className="completed">
        <Task
          data={item}
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
};

export default TaskList;
