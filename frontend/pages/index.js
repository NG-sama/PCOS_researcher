import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import ChatModel from '../components/ChatModel';
import NewsSection from '../components/NewsSection';

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();



  return (
    <div className="min-h-screen bg-cerise-50">
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-cerise-800 mb-6">Welcome to PCOS Researcher</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/news">
            <div className="bg-cerise-200 p-6 rounded-lg shadow-md hover:bg-cerise-300 transition-colors cursor-pointer">
              <h2 className="text-2xl font-bold text-cerise-800">News Section</h2>
              <p className="text-cerise-700">Discover the latest PCOS research news</p>
            </div>
          </Link>
          <Link href="/chat">
            <div className="bg-cerise-200 p-6 rounded-lg shadow-md hover:bg-cerise-300 transition-colors cursor-pointer">
              <h2 className="text-2xl font-bold text-cerise-800">Chat Model</h2>
              <p className="text-cerise-700">Interact with our AI-powered PCOS assistant</p>
            </div>
          </Link>
        </div>
        <div className="mt-6">
          <ChatModel />
        </div>
        <div className="mt-6">
          <NewsSection />
        </div>
      </main>
    </div>
  );
};

export default Home;