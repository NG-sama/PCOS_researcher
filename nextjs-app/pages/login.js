import React, { useState } from 'react';
import firebase from '../utils/firebase';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      router.push('/');
    } catch (error) {
      console.error('Error signing in with email:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      router.push('/');
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      const provider = new firebase.auth.TwitterAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      router.push('/');
    } catch (error) {
      console.error('Error signing in with Twitter:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shocking-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shocking-500"
          />
        </div>
        <div className="mb-4">
          <button
            onClick={handleEmailLogin}
            className="bg-shocking-600 text-white py-2 px-4 rounded-md hover:bg-shocking-700 w-full"
          >
            Login with Email
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={handleFacebookLogin}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full"
          >
            Login with Facebook
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={handleTwitterLogin}
            className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 w-full"
          >
            Login with Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;