import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../utils/firebase';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Set up an authentication state observer
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // If no user is logged in, redirect to the login page
        router.push('/login');
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, [router]);

  // Render the children components if the user is authenticated
  return <>{children}</>;
};

export default ProtectedRoute;