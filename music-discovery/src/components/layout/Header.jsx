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
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>

      <div className="header-bottom">
        <h1>SongScout</h1>
        
        <nav className={menuOpen ? 'nav-open' : ''}>
          <Link to="/">Home</Link>
          <Link to="/create-playlist">Create Playlist</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;