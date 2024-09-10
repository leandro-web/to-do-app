import React from 'react';
import { Register } from '../components/Register';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './RegisterPage.css';

export const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <Header />
      <Register />
      <Footer />
    </div>
  );
};
