import React, { useState } from 'react';
import axios from 'axios';

const ChatModel = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('${process.env.NEXT_PUBLIC_API_URL}/api/chatmodel', { message }); // we use axios to make HTTP requests to these endpoints
      setResponse(res.data.response);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-shocking-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Chat Model</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-24 p-2 bg-shocking-50 rounded-md border-shocking-300 border focus:outline-none focus:ring-2 focus:ring-shocking-500"
          placeholder="Type your message..."
        ></textarea>
        <button
          type="submit"
          className="mt-2 bg-shocking-600 text-white py-2 px-4 rounded-md hover:bg-shocking-700"
        >
          Send
        </button>
      </form>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold mb-2">Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatModel;