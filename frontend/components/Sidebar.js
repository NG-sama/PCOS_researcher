import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-shocking-200 p-6">
      {/* Sidebar content */}
      <h2 className="text-lg font-bold mb-4">Quick Links</h2>
      <nav>
        <ul className="space-y-2">
          <li><a href="/news" className="hover:text-shocking-600">News</a></li>
          <li><a href="/resources" className="hover:text-shocking-600">Resources</a></li>
          <li><a href="/community" className="hover:text-shocking-600">Community</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;