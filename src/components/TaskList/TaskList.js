import { React } from 'react';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, onDeleted, onToggleDone, onEditTask }) => {
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
          onEditTask={() => onEditTask(id)}
        />
      </li>
    );
  });
  // {console.log(elements)}
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
