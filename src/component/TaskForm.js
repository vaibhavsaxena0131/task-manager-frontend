
import { useState } from 'react';
import { addTask } from '../services/api';

const TaskForm = ({ refreshTasks }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName.trim()) return alert('Task name is required');

    try {
      await addTask(taskName);
      setTaskName('');
      refreshTasks();
    } catch (err) {
      alert(err.message || 'Error adding task');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', textAlign: 'center' }}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
        style={{ padding: '10px', marginRight: '10px', width: '250px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>Add Task</button>
    </form>
  );
};

export default TaskForm;
