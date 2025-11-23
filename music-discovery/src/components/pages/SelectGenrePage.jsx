import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenreList from '../lists/GenreList';
import '../styles/SelectGenrePage.css';

function SelectGenrePage({ genres, selectedGenres, setSelectedGenres }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    setSelectedGenres([]);
  }, [setSelectedGenres]);

  const handleSubmit = () => {
    if (selectedGenres.length === 0) {
      setError('Please select at least one genre');
      return;
    }

    setError('');
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
        error={error}
      />
    </div>
  );
}

export default SelectGenrePage;