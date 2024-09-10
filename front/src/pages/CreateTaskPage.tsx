import React from 'react';
import { CreateTask } from '../components/CreateTask';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import './CreateTaskPage.css';

export const CreateTaskPage: React.FC = () => {
  return (
    <div className="create-task-page">
      <Header />
      <Menu />
      <CreateTask />
      <Footer />
    </div>
  );
};
