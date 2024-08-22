import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmail, signInWithFacebook, signInWithTwitter } from '../utils/firebase';
import Header from '../components/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      router.push('/chat');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithFacebook();
      router.push('/chat');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      await signInWithTwitter();
      router.push('/chat');
    } catch (error) {
      setError(error.message);
    }
  };

  // Rest of your LoginPage component code...
};

export default LoginPage;