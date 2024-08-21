import React from 'react';

const Header = () => {
  return (
    <header className="bg-shocking-600 text-white py-4 px-6">
      {/* Header content */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <img src="/logo.png" alt="Website Logo" className="h-8 mr-4" />
          <h1 className="text-xl font-bold">My Website</h1>
        </div>
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;