import React from 'react';
import { useNavigate } from 'react-router-dom';
import SourceList from '../lists/SourceList';
import '../styles/SelectSourcePage.css';

function SelectSourcePage({ sources, selectedSources, setSelectedSources }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedSources.length === 0) {
      alert('Please select at least one source');
      return;
    }

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
      />
    </div>
  );
}

export default SelectSourcePage;