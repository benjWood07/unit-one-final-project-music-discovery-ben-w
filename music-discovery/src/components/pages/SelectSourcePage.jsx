import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SourceList from '../lists/SourceList';
import '../styles/SelectSourcePage.css';

function SelectSourcePage({ sources, selectedSources, setSelectedSources }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (selectedSources.length === 0) {
      setError('Please select at least one source');
      return;
    }

    setError('');
    navigate('/select-tracks');
  };

  const handleBack = () => {
    navigate('/select-genre');
  };

  return (
    <div className="select-source-page">
      <SourceList 
        sources={sources}
        selectedSources={selectedSources}
        setSelectedSources={setSelectedSources}
        handleSubmit={handleSubmit}
        handleBack={handleBack}
        error={error}
      />
    </div>
  );
}

export default SelectSourcePage;