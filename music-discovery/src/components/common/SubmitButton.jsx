import React from 'react';
import '../styles/SubmitButton.css';

function SubmitButton({ onClick, children }) {
  return (
    <button 
      className="submit-button"
      onClick={onClick}
    >
      {children || 'Submit'}
    </button>
  );
}

export default SubmitButton;