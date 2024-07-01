// pages/UrlShortenerPage.js
import React from 'react';
import UrlForm from '../components/UrlForm';
import UrlTable from '../components/UrlTable';

const UrlShortenerPage = () => {
  return (
    <div>
      <h1>URL Shortener Page</h1>
      <UrlForm />
      <UrlTable />
    </div>
  );
};

export default UrlShortenerPage;