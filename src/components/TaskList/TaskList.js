import { React } from 'react';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, onDeleted, onToggleDone, onUpdateTaskLabel }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    let data = item.label
    return (
      <li key={id} className="completed">
        <Task
          {...itemProps}
          onDeleted={() => {
            onDeleted(id);
          }}
          onToggleDone={() => onToggleDone(id)}
          onUpdateTaskLabel={() => onUpdateTaskLabel(id, data)}
        />
      </li>
    );
  });
  // {console.log(elements)}
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
