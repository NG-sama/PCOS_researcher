import React from 'react';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-cerise-50">
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-cerise-800 mb-6">PCOS Research News</h1>
        <NewsSection />
      </main>
    </div>
  );
};

export default NewsPage;