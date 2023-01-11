import { React } from 'react';
import Task from "../Task";
import './TaskList.css';

const TaskList = ({todos}) => {
  
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="completed">
        <Task {...itemProps} />
      </li>
    );
  });
  // {console.log(elements)}
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
