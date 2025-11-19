import React from 'react';
import GenreItem from '../items/GenreItem';
import '../styles/GenreList.css'

function GenreList() {
  return (
    <div className="genre-list">
      <h3>Genres</h3>
      <p>Select one or multiple genres</p>
      
      <div className="genre-items">
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
        <GenreItem />
      </div>
      
      <div className="genre-list-actions">
        <a href="#back">Back</a>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default GenreList;