import React from 'react';
import NavMenu from './NavMenu';
import '../styles/Header.css';

const Header = () => {
    return (
    <header>
      <div>
        <input type="text" placeholder="Search" />
        <button>Sign In</button>
        <button>Register</button>
      </div>
      <strong>SoundScout</strong> Music Discovery
      <button>☰</button>
    </header>
    );
};

export default Header;