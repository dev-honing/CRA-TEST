// src/components/Header.tsx

import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">My Blog</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/email">E-mail</a>
        <a href="https://github.com/dev-honing">GitHub</a>
      </nav>
    </header>
  );
}

export default Header;
