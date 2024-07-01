// pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Login Page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;