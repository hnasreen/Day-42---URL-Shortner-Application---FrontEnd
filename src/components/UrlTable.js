// components/UrlTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const UrlTable = () => {
  const [urls, setUrls] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUrls = async () => {
      const token = localStorage.getItem("token")

      try {
        const res = await axios.get('http://localhost:5000/api/url/stats',{headers:{
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'// Add this if you're sending JSON data
        }});
        setUrls(res.data);
      } catch (err) {
        setMessage('Failed to fetch URLs.');
      }
    };

    fetchUrls();
  }, []);

  return (
    <div>
      <h2>URL List</h2>
      {message && <p>{message}</p>}
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Short URL</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Long URL</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Clicks</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{url.shortUrl}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{url.longUrl}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{url.clickCount}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(url.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlTable;
