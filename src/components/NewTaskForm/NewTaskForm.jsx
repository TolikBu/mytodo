import { useState } from 'react';

import './NewTaskForm.css';

const NewTaskForm = ({ onItemAdded }) => {
  const [params, setParams] = useState({ label: '', minutes: null, seconds: null });

  const onSubmit = (e) => {
    if (e.key !== 'Enter') return;

    const { label, minutes, seconds } = { ...params };

    if (minutes == null && seconds == null) return;
    if (label == null || label.length === 0) return;

    const mins = minutes || 0;
    const secs = seconds || 0;

    const taskTimeMS = (mins * 60 + secs) * 1000;
    onItemAdded(label, taskTimeMS);

    setParams({});
  };

  const updateParams = (name, value) => {
    const newParams = { ...params };

    if (name === 'minutes' || name === 'seconds') {
      const n = Number(value);
      if (!isNaN(n)) {
        newParams[name] = n;
      }
    } else {
      newParams[name] = value;
    }

    setParams(newParams);
  };

  return (
    <form className="new-todo-form" onKeyDown={onSubmit}>
      <input
        className="new-todo"
        placeholder="Task"
        autoFocus
        value={params.label || ''}
        onChange={(e) => {
          updateParams('label', e.target.value);
        }}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        autoFocus
        value={params.minutes || ''}
        onChange={(e) => {
          updateParams('minutes', e.target.value);
        }}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        autoFocus
        value={params.seconds || ''}
        onChange={(e) => {
          updateParams('seconds', e.target.value);
        }}
      />
    </form>
  );
};

export default NewTaskForm;
