import React from 'react';
import { useNavigate } from 'react-router-dom';
import GenreList from '../lists/GenreList';
import '../styles/SelectGenrePage.css';

function SelectGenrePage({ genres, selectedGenres, setSelectedGenres }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedGenres.length === 0) {
      alert('Please select at least one genre');
      return;
    }
    
    navigate('/select-source');
  };

  const handleBack = () => {
    navigate('/create-playlist');
  };

  return (
    <div className="select-genre-page">
      <GenreList 
        genres={genres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        handleSubmit={handleSubmit}
        handleBack={handleBack}
      />
    </div>
  );
}

export default SelectGenrePage;