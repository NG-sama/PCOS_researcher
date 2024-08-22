import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { auth, signOut } from '../utils/firebase';
import { useRouter } from 'next/router';

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Rest of your Header component code...
};

export default Header;