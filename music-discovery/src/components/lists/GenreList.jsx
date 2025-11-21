import React from 'react';
import GenreItem from '../items/GenreItem';
import '../styles/GenreList.css';

function GenreList({ genres, selectedGenres, setSelectedGenres, handleSubmit, handleBack }) {
  
  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="genre-list">
      <h3>Genres</h3>
      <p>Select one or multiple genres</p>
      
      <div className="genre-items">
        {genres.map((genre, index) => (
          <GenreItem 
            key={index}
            genre={genre}
            isSelected={selectedGenres.includes(genre)}
            toggleGenre={toggleGenre}
          />
        ))}
      </div>
      
      <div className="genre-list-actions">
        <a href="#" onClick={(e) => { e.preventDefault(); handleBack(); }}>Back</a>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default GenreList;