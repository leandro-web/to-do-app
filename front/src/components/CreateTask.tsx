import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateTask.css';

export const CreateTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('awaiting');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/tasks', { title, status });
      navigate('/tasks');
    } catch (error) {
      console.error('Error creating task', error);
    }
  };

  return (
    <div className="create-task">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="awaiting">Awaiting</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
