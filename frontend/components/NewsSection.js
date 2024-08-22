import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('${process.env.NEXT_PUBLIC_API_URL}/api/news');
        setArticles(res.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-shocking-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Latest News</h2>
      {articles.map((article, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-shocking-600 font-bold">{article.title}</h3>
          <p className="text-shocking-800">{article.description}</p>
          
            href={article.url}
            className="text-shocking-600 hover:text-shocking-700"
          <a>
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;