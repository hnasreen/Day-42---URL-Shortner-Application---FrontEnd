import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UrlRedirects = () => {
  const { shortUrl } = useParams();

  useEffect(() => {
    const fetchLongUrl = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/url/${shortUrl}`);
        window.location.replace(res.data.longUrl);
      } catch (error) {
        console.error('Failed to fetch long URL:', error);
        // Handle error: show message or redirect to an error page
      }
    };

    fetchLongUrl();
  }, [shortUrl]);

  return (
    <div>
      Redirecting...
    </div>
  );
};

export default UrlRedirects;