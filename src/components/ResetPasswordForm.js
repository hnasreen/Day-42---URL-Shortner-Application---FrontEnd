// components/ResetPasswordForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPasswordForm = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://day-42-url-shortner-application-backend.onrender.com/api/auth/reset-password/${token}`, { newPassword }, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials:true
      });
      setMessage('Password reset successful');
    } catch (err) {
      setMessage('Password reset failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;