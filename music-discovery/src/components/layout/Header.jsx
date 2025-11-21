import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div>
        <div className="header-left">
          <button className="hamburger-menu" onClick={toggleMenu}>
            ☰
          </button>
          <input type="text" placeholder="Search..." />
        </div>
        
        <div className="auth-buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>

      <div className="header-bottom">
        <h1>SoundScouter</h1>
        
        <nav className={menuOpen ? 'nav-open' : ''}>
          <a href="#home">Home</a>
          <a href="#create">Create Playlist</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;