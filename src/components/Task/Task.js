import { React } from 'react';
import './Task.css';

const Task = ({ label, important = false }) => {
  const style = {
    textDecoration: important ? 'line-through' : 'none',
    fontWeight: important ? '300' : "400",
    color: important ? ' ' : "black"
  };

  return (
    <span>
      <span className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span style={style} className="description">
            {label}
          </span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </span>
      <input type="text" className="edit" />
    </span>
  );
};

export default Task;
