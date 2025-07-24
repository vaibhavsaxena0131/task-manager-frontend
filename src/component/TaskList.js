
import { updateTask, deleteTask } from '../services/api';

const TaskList = ({ tasks, refreshTasks }) => {
  const toggleStatus = async (id) => {
    try {
      await updateTask(id);
      refreshTasks();
    } catch (err) {
      alert(err.message || 'Error updating task');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      refreshTasks();
    } catch (err) {
      alert(err.message || 'Error deleting task');
    }
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '12px' }}>Task</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'center' }}>Status</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td style={{ padding: '12px' }}>{task.taskName}</td>
              <td style={{ textAlign: 'center' }}>{task.status ? '✔️' : '❌'}</td>
              <td style={{ textAlign: 'center' }}>
                <button
                  onClick={() => toggleStatus(task._id)}
                  style={{ marginRight: '10px', padding: '6px 12px', borderRadius: '4px', border: 'none', backgroundColor: '#28a745', color: 'white' }}>
                  {task.status ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  style={{ padding: '6px 12px', borderRadius: '4px', border: 'none', backgroundColor: '#dc3545', color: 'white' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

