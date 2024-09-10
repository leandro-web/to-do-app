import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditTask.css';

interface Task {
  title: string;
  status: string;
}

export const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da tarefa a partir da URL
  const [task, setTask] = useState<Task>({ title: '', status: '' });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get(`http://localhost:8000/api/tasks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}` // Inclui o token JWT no cabeçalho Authorization
          }
        });
        setTask(response.data);
      } catch (err) {
        setError('Error fetching task');
        console.error(err);
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      await axios.put(`http://localhost:8000/api/tasks/${id}`, task, {
        headers: {
          Authorization: `Bearer ${token}` // Inclui o token JWT no cabeçalho Authorization
        }
      });

      navigate('/tasks'); // Redireciona para a lista de tarefas após a edição
    } catch (err) {
      setError('Error updating task');
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div className="edit-task">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
        />
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="aguardando">Aguardando</option>
          <option value="em andamento">Em andamento</option>
          <option value="concluida">Concluída</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
