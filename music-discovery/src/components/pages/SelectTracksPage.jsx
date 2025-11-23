import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrackList from '../lists/TrackList';
import LoadingSpinner from '../LoadingSpinner';
import '../styles/SelectTracksPage.css';

function SelectTracksPage({ tracks, selectedTracks, setSelectedTracks }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSelectedTracks([]);
  }, [setSelectedTracks]);

  const handleSubmit = () => {
    if (selectedTracks.length === 0) {
      setError('Please select at least one track');
      return;
    }

    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate('/playlist');
    }, 1500);
  };

  const handleBack = () => {
    navigate('/select-source');
  };

  return (
    <div className="select-tracks-page">
      {isLoading && <LoadingSpinner />}
      <TrackList 
        tracks={tracks}
        selectedTracks={selectedTracks}
        setSelectedTracks={setSelectedTracks}
        handleSubmit={handleSubmit}
        handleBack={handleBack}
        error={error}
      />
    </div>
  );
}

export default SelectTracksPage;