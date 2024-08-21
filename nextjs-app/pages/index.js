import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatModel from '../components/ChatModel';
import NewsSection from '../components/NewsSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-shocking-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChatModel />
            <NewsSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;