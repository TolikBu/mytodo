import React, { Component } from 'react';
import './App.css';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [this.createTodoItem('New task'), this.createTodoItem('Editing task'), this.createTodoItem('Delete task')],
    filter: 'all',
    isEditing: false
  };

  createTodoItem(label) {
    return {
      id: this.maxId++,
      label,
      done: false,
      editing: false,
    };
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done, editing: !oldItem.editing };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  getFilteredTasks = () => {
    if (this.state.filter === 'active') {
      return this.state.todoData.filter((item) => !item.done);
    } else if (this.state.filter === 'completed') {
      return this.state.todoData.filter((item) => item.done);
    }
    return this.state.todoData;
  };

  clearTask = () => {
    this.setState(({ todoData }) => {
      let newArr = todoData.filter((item) => !item.done);
      return {
        todoData: newArr,
      };
    });
  };

  onEditTask = (id) => {
    if (id) {
      this.setState(({ isEditing }) => {
        const idx = this.state.todoData.findIndex((el) => {
          if (el.id === id) {
            console.log(el);
          }
        });
        // return {
        //   isEditing: !isEditing
        // }
    });
    }
    
  };

  render() {
    const doneCount = this.state.todoData.filter((el) => !el.done).length;
    const { filter } = this.state;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
        </header>
        <NewTaskForm onItemAdded={this.addItem} />
        <TaskList todos={this.getFilteredTasks()} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onEditTask={this.onEditTask} />
        <Footer itemsLeft={doneCount} filter={filter} onFilterChange={this.onFilterChange} clearTask={this.clearTask} />
      </section>
    );
  }
}
