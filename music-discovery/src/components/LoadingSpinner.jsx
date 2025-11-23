import React from 'react';
import './styles/LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>Loading your playlist...</p>
    </div>
  );
}

export default LoadingSpinner;