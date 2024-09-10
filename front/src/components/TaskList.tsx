import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TaskList.css';

interface Task {
  id: number;
  title: string;
  status: string;
}

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:8000/api/tasks', {
          headers: {
            Authorization: `Bearer ${token}` // Adiciona o token JWT no cabeçalho Authorization
          }
        });
        setTasks(response.data);
      } catch (err) {
        setError('Error fetching tasks');
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      await axios.delete(`http://localhost:8000/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` // Token JWT no cabeçalho Authorization
        }
      });

      // Update the task list after deletion
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Error deleting task');
      console.error(err);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>
                <Link to={`/tasks/edit/${task.id}`}>Edit</Link>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const handleDelete = async (id: number) => {
  try {
    await axios.delete(`http://localhost:8000/api/tasks/${id}`);
    alert('Task deleted successfully');
    window.location.reload(); // Reload to refresh the task list
  } catch (error) {
    console.error('Error deleting task', error);
  }
};
