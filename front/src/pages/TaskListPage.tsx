import React from 'react';
import { TaskList } from '../components/TaskList';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import './TaskListPage.css';

export const TaskListPage: React.FC = () => {
  return (
    <div className="task-list-page">
      <Header />
      <Menu />
      <TaskList />
      <Footer />
    </div>
  );
};
