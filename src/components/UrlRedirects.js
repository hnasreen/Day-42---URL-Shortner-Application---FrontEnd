import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UrlRedirects = () => {
  const { shortUrl } = useParams();

  useEffect(() => {
    console.log("useEffect runs here")
    const fetchLongUrl = async () => {
      // const token = localStorage.getItem("token")

      try {
        const res = await axios.get(`http://localhost:5000/api/url/${shortUrl}`, {
          headers: {
            // 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' // Add this if you're sending JSON data
          }
        });
        // console.log(res.data.longUrl, "longUrl")
        // console.log('shortUrl',shortUrl)
        // window.location(res.data.longUrl);

        if(res.data){
          window.location.href=res.data
        }
        else{
          throw new Error("Long URL not found")
        }

      } catch (error) {
        console.error('Failed to fetch long URL:', error);
        // Handle error: show message or redirect to an error page
      }
    };

    fetchLongUrl();
  }, [shortUrl]);

  return (
    <div>
      {/* <a href={`${shortUrl}`} target="_blank"> Click</a> */}
    </div>
  );
};

export default UrlRedirects;