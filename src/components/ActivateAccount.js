// src/components/ActivateAccount.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ActivateAccount = () => {
  const { token } = useParams(); // Get the token from the URL
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await axios.get(`https://day-42-url-shortner-application-backend.onrender.com/api/auth/activate/${token}`);
        setMessage(response.data.message);
      } catch (error) {
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : 'Activation failed, please try again later.'
        );
      }
    };

    activateAccount();
  }, [token]);

  return (
    <div className="container">
      <h2>Account Activation</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default ActivateAccount;