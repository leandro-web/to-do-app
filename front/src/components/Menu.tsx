import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menu.css';

export const Menu: React.FC = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token armazenado
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/tasks/create">Create Task</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};
