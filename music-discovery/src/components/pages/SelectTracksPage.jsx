import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrackList from '../lists/TrackList';
import '../styles/SelectTracksPage.css';

function SelectTracksPage({ tracks, selectedTracks, setSelectedTracks }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedTracks.length === 0) {
      alert('Please select at least one track');
      return;
    }

    navigate('/playlist');
  };

  const handleBack = () => {
    navigate('/select-source');
  };

  return (
    <div className="select-tracks-page">
      <TrackList 
        tracks={tracks}
        selectedTracks={selectedTracks}
        setSelectedTracks={setSelectedTracks}
        handleSubmit={handleSubmit}
        handleBack={handleBack}
      />
    </div>
  );
}

export default SelectTracksPage;