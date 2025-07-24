
const BASE_URL = process.env.REACT_APP_API_URL;

export const getTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return await res.json();
};

export const addTask = async (taskName) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ taskName }),
  });
  if (!res.ok) throw new Error('Failed to add task');
};

export const updateTask = async (id) => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: 'PUT' });
  if (!res.ok) throw new Error('Failed to update task');
};

export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete task');
};

