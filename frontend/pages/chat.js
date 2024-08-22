import React from 'react';
import Header from '../components/Header';
import ChatModel from '../components/ChatModel';
import ProtectedRoute from '../components/ProtectedRoute';

const ChatPage = () => {
  return (
    // Wrap the entire page content with the ProtectedRoute component
    // This ensures that only authenticated users can access this page
    <ProtectedRoute>
      <div className="min-h-screen bg-cerise-50">
        <Header />
        <main className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-cerise-800 mb-6">PCOS AI Assistant</h1>
          {/* Render the ChatModel component */}
          <ChatModel />
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default ChatPage;