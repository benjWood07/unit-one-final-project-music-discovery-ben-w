import React from 'react';
import NavMenu from './NavMenu';

const Header = () => {
    return (
    <header>
      <div>
        <input type="text" placeholder="Search" />
        <button>Sign In</button>
        <button>Register</button>
      </div>
      <strong>IHY</strong> Music Discovery
      <button>☰</button>
    </header>
    );
};

export default Header;