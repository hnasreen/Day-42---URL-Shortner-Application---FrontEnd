// components/UrlForm.js
import React, { useState } from 'react';
import axios from 'axios';
import UrlRedirects from './UrlRedirects.js'
import { Link } from 'react-router-dom';

const UrlForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")

    try {
      const res = await axios.post(
        'http://localhost:5000/api/url/shorten',
        { longUrl }, // Request payload should be passed as the second argument
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' // This is correct if you're sending JSON data
          }
        }
      );
      setShortUrl(res.data.shortUrl);
      setMessage('URL shortened successfully');
    } catch (err) {
      setMessage('Failed to shorten URL. Please try again.');
    }
  };

  return (
    <div>
      <h2>Shorten URL</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <br />
          Short URL: {' '}
          {/* <div> */}
          <Link to = {`/${shortUrl}`}> {shortUrl} </Link>
          {/* </div> */}
          {/* <a href={`$shortUrl`} target="_blank"> Click</a> */}
          {/* <UrlRedirects redirect={shortUrl}/> */}
          <br />  
          <br />
        </div>

      )}
    </div>
  );
};

export default UrlForm;