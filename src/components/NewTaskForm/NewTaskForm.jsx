import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelCange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let labelNewText = this.state.label;
    if (labelNewText.trim().length > 0) {
      this.props.onItemAdded(labelNewText);
      this.setState({
        label: '',
      });
    } else {
      alert('Введите задача');
    }
  };

  render() {
    const { label } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={label}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelCange}
          autoFocus
        />
      </form>
    );
  }
}
