import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

  
  render() {
   const { itemsLeft } = this.props;
   
   return (
    <div className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </div>
  );
 }

}