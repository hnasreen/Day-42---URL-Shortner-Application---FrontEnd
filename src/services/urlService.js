// services/urlService.js
import axios from 'axios';

export const shortenUrl = async (longUrl) => {
  return await axios.post('/api/url/shorten', { longUrl });
};

export const getUrlStats = async () => {
  return await axios.get('/api/url/stats');
};

export const getDailyUrlCount = async () => {
  return await axios.get('/api/url/count/daily');
};

export const getMonthlyUrlCount = async () => {
  return await axios.get('/api/url/count/monthly');
};