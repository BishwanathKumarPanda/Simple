import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ backgroundColor: 'pink', padding: '20px', borderRadius: '5px', maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h1 style={{ textAlign: 'center' }}>To-Do List</h1>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          style={{ flex: '1', padding: '8px', borderRadius: '3px', marginRight: '10px' }}
        />
        <button onClick={addTask} style={{ padding: '8px', borderRadius: '3px', backgroundColor: '#fff', cursor: 'pointer' }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff', padding: '8px', borderRadius: '3px' }}>
            {task}
            <button onClick={() => removeTask(index)} style={{ backgroundColor: 'red', color: '#fff', border: 'none', padding: '5px', cursor: 'pointer' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
