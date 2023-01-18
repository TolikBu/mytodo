import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = { 
    label: ''
  };

  onLabelCange = (e) => {
    this.setState({ 
      label: e.target.value
     })
  };

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input value={this.state.label} type="text" className="new-todo" placeholder="What needs to be done?" onChange={this.onLabelCange} autoFocus />
      </form>
    );
  }
}
