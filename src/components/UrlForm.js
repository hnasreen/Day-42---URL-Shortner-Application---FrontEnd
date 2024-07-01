// components/UrlForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UrlForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://day-42-url-shortner-application-backend.onrender.com/api/url/shorten', { longUrl });
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
          <br/>
            Short URL: {' '}
            {/* <div> */}
            <b>  {shortUrl} </b>
            {/* </div> */}
            <a href={`https://day-42-url-shortner-application-backend.onrender.com/api/url/${shortUrl}`} target="_blank"> Click</a>
            <br/>
            <br/>
        </div>
        
      )}
    </div>
  );
};

export default UrlForm;