import React from 'react';
import '../styles/BackButton.css';

function BackButton({ onClick }) {
  return (
    <a 
      href="#" 
      className="back-button"
      onClick={(e) => { 
        e.preventDefault(); 
        onClick(); 
      }}
    >
      Back
    </a>
  );
}

export default BackButton;