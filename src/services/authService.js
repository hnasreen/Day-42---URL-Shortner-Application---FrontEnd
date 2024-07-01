// services/authService.js
import axios from 'axios';

export const login = async (email, password) => {
  return await axios.post('/api/auth/login', { email, password });
};

export const register = async (user) => {
  return await axios.post('/api/auth/register', user);
};

export const forgotPassword = async (email) => {
  return await axios.post('/api/auth/forgot-password', { email });
};

export const resetPassword = async (token, newPassword) => {
  return await axios.post(`/api/auth/reset-password/${token}`, { newPassword });
};