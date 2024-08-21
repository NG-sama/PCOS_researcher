import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import firebase from '../utils/firebase';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatModel from '../components/ChatModel';
import NewsSection from '../components/NewsSection';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // Redirect to the login page if the user is not authenticated
        router.push('/login');
      }
    });

    return unsubscribe;
  }, [router]);

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