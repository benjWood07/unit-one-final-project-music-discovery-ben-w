import React from 'react';
import GenreList from '../lists/GenreList';
import '../styles/SelectGenrePage.css';

const SelectGenrePage = () => {
  return (
    <div>
      <h2>SoundScouter</h2>
      <GenreList />
    </div>
  );
}

export default SelectGenrePage;