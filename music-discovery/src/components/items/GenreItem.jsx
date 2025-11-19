import React from 'react';
import '../styles/GenreItem.css'

function GenreItem() {
  return (
    <div className="genre-item">
      <input type="checkbox" id="genre" />
      <label htmlFor="genre">----------</label>
    </div>
  );
}

export default GenreItem;