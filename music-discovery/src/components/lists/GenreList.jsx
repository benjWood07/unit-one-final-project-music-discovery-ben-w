import React from 'react';
import GenreItem from '../items/GenreItem';
import '../styles/GenreList.css'

function GenreList() {
  return (
    <div>
      <h3>Genres</h3>
      <p>Select one or multiple genres</p>
      
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
      <GenreItem />
      
      <div>
        <a href="#back">Back</a>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default GenreList;