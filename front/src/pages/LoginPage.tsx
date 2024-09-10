import React from 'react';
import { Login } from '../components/Login';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './LoginPage.css';

export const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};
