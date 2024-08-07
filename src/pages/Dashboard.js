// pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dailyCount, setDailyCount] = useState(0);
  const [monthlyCount, setMonthlyCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const token = localStorage.getItem("token")
      console.log(token)
      // const headers = {
      //   'Authorization': `Bearer ${token}`,
      //   'Content-Type': 'application/json' // Add this if you're sending JSON data
      // };
      try {
        console.log(headers.Authorization)
        // const token=headers.Authorization
        const dailyRes = await axios.get('http://localhost:5000/api/url/count/daily',{headers:{
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // Add this if you're sending JSON data
        }});
        const monthlyRes = await axios.get('http://localhost:5000/api/url/count/monthly',{headers:{
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // Add this if you're sending JSON data
        }});
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