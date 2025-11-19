import React from 'react';
import GenreList from '../lists/GenreList';
import '../styles/SelectGenrePage.css';

function SelectGenrePage() {
  return (
    <div className="select-genre-page">
      <GenreList />
    </div>
  );
}

export default SelectGenrePage;