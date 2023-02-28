import { useState, useEffect } from 'react';

import './App.css';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

const App = () => {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      label: 'New task',
      completed: false,
      createdAt: new Date(),
      timeLeft: 10000,
      isActive: false,
    },
    {
      id: 2,
      label: 'Editing task',
      completed: false,
      createdAt: new Date(),
      timeLeft: 20000,
      isActive: false,
    },
    {
      id: 3,
      label: 'Delete task',
      completed: false,
      createdAt: new Date(),
      timeLeft: 30000,
      isActive: false,
    },
  ]);

  const [filterType, setFilterType] = useState('All');

  const completedCount = todoData.filter((el) => !el.completed).length;

  const createTodoItem = (label, time) => {
    let maxId = 100;
    const newTodoData = [...todoData];
    const id = maxId++;
    const task = {
      id: id,
      label: label,
      completed: false,
      createdAt: new Date(),
      timeLeft: time,
      isActive: false,
    };

    newTodoData.push(task);

    setTodoData(newTodoData);
  };

  const onToggleCompleted = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[idx];
    const newItem = { ...oldItem, completed: !oldItem.completed, isActive: !oldItem.isActive };
    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

    setTodoData(newArray);
  };

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
    setTodoData(newArray);
  };

  const onTaskAdded = (text, time) => {
    createTodoItem(text, time);
  };

  const onFilterChange = (filter) => {
    setFilterType(filter);
  };

  const getFilteredTasks = () => {
    if (filterType === 'Active') {
      return todoData.filter((item) => !item.completed);
    } else if (filterType === 'Completed') {
      return todoData.filter((item) => item.completed);
    }

    return todoData;
  };

  const clearTask = () => {
    let newArr = todoData.filter((item) => !item.completed);
    setTodoData(newArr);
  };

  const onUpdateTaskLabel = (id, newLabel) => {
    const i = todoData.findIndex((el) => el.id === id);
    if (i >= 0) {
      const newTodoData = [...todoData];
      newTodoData[i] = { ...newTodoData[i], label: newLabel };

      setTodoData(newTodoData);
    }
  };

  const onStartTask = (id) => {
    const i = todoData.findIndex((el) => el.id === id);
    if (i >= 0) {
      const newTodoData = [...todoData];
      newTodoData[i] = { ...newTodoData[i], isActive: true };

      setTodoData(newTodoData);
    }
  };

  const onPauseTask = (id) => {
    const i = todoData.findIndex((el) => el.id === id);
    if (i >= 0) {
      const newTodoData = [...todoData];
      newTodoData[i] = { ...newTodoData[i], isActive: false };

      setTodoData(newTodoData);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTodoData((state) => {
        return [...state].map((data) => {
          if (!data.isActive) return data;
          const newData = { ...data };
          const now = Date.now();
          const lastTick = newData.lastTickTime || now;

          const time = Math.max(newData.timeLeft - (now - lastTick), 0);
          newData.timeLeft = time;
          newData.lastTickTime = now;

          if (time <= 0) {
            newData.isActive = false;
          }

          return newData;
        });
      });
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <NewTaskForm onItemAdded={onTaskAdded} />
      <TaskList
        todos={getFilteredTasks()}
        onDeleted={deleteItem}
        onToggleCompleted={onToggleCompleted}
        onUpdateTaskLabel={onUpdateTaskLabel}
        onStartTask={onStartTask}
        onPauseTask={onPauseTask}
      />
      <Footer itemsLeft={completedCount} filter={filterType} onFilterChange={onFilterChange} clearTask={clearTask} />
    </section>
  );
};

export default App;
