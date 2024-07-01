// pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dailyCount, setDailyCount] = useState(0);
  const [monthlyCount, setMonthlyCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const dailyRes = await axios.get('http://localhost:5000/api/url/count/daily');
        const monthlyRes = await axios.get('http://localhost:5000/api/url/count/monthly');
        setDailyCount(dailyRes.data.count);
        setMonthlyCount(monthlyRes.data.count);
      } catch (err) {
        console.error('Failed to fetch counts');
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total URLs created today: {dailyCount}</p>
      <p>Total URLs created this month: {monthlyCount}</p>
    </div>
  );
};

export default Dashboard;