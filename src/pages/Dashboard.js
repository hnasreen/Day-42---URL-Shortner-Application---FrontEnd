// pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dailyCount, setDailyCount] = useState(0);
  const [monthlyCount, setMonthlyCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const token = localStorage.getItem("token")
      const headers = {header: {
        "Content-Type": "application/json",
        "authtoken": token, // Replace 'token' with your actual token
      }}
      try {
        const dailyRes = await axios.post('http://localhost:5000/api/url/count/daily',headers);
        const monthlyRes = await axios.post('http://localhost:5000/api/url/count/monthly',headers);
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