import React, { Component } from 'react';
import Data from '../Data/Data';
import './Task.css';

export default class Task extends Component {


  // onClickLabel = () => {
  //   this.setState(({ done, editing }) => {
  //     return {
  //       done: !done,
  //       editing: !editing,
  //     };
  //   });

  // };

  // edit = () => {
  //   console.log('work');
  //   this.setState(({ editing }) => {
  //     return {
        
  //     };
  //   });
  // };

  render() {
    const { label, onDeleted, onToggleDone, done, editing } = this.props;

    let classNames = 'description';

    if (done) {
      classNames += ' done';
    }

    return (
      <span>
        <span className="view">
          <input className="toggle" type="checkbox" checked={editing} readOnly/>
          <label>
            <span className={classNames} onClick={onToggleDone}>
              {label}
            </span>
            <Data />
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </span>
        <input type="text" className="edit" />
      </span>
    );
  }
}
