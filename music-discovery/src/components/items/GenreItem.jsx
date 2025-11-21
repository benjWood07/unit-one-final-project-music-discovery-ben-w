import React from 'react';
import '../styles/GenreItem.css';

function GenreItem({ genre, isSelected, toggleGenre }) {
  return (
    <div className="genre-item">
      <input 
        type="checkbox" 
        id={`genre-${genre}`}
        checked={isSelected}
        onChange={() => toggleGenre(genre)}
      />
      <label htmlFor={`genre-${genre}`}>{genre}</label>
    </div>
  );
}

export default GenreItem;