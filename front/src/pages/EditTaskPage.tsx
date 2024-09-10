import React from 'react';
import { EditTask } from '../components/EditTask';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import './EditTaskPage.css';

export const EditTaskPage: React.FC = () => {
  return (
    <div className="edit-task-page">
      <Header />
      <Menu />
      <EditTask />
      <Footer />
    </div>
  );
};
