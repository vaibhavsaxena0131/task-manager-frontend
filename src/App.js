
import { useEffect, useState } from 'react';
import { getTasks } from './services/api';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      alert(err.message || 'Failed to load tasks');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Task Manager</h1>
      <TaskForm refreshTasks={fetchTasks} />
      <TaskList tasks={tasks} refreshTasks={fetchTasks} />
    </div>
  );
}

export default App;