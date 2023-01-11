import { React } from 'react';
import './App.css';
import NewTaskForm from '../NewTaskForm'
import TaskList from '../TaskList'
import Footer from '../Footer'

const App = () => {
  const todoData = [
    { id: 1, label: 'New task', important: true },
    { id: 2, label: 'Editing task', important: false },
    { id: 3, label: 'Delete task', important: false },
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <NewTaskForm />
      <TaskList todos={todoData} />
      <Footer />
    </section>
  );
}

export default App;