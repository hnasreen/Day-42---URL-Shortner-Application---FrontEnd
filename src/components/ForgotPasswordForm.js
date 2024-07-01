// components/ForgotPasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://day-42-url-shortner-application-backend.onrender.com/api/auth/forgot-password', { email },{header:{"content-type":"application/json"},
        withCredentials:true
      });
      setMessage('Password reset link sent to your email.');
    } catch (err) {
      setMessage('Email not found.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;